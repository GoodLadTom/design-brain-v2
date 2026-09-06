#!/bin/bash
# Re-pull the Design Brain mirror from the live site and rebuild the query index.
# Needs curl and node. Only run this when the live site has actually changed.
set -euo pipefail
BASE="${DESIGN_BRAIN_URL:-https://design-brain-rust.vercel.app}"
SKILL="$(cd "$(dirname "$0")/.." && pwd)"
REPO="$(cd "$SKILL/../.." && pwd)"
SITE="$REPO/site"

mkdir -p "$SITE/assets" "$SITE/data" "$SKILL/data"
curl -sf "$BASE/" -o "$SITE/index.html"
for f in app.js styles.css demos.css; do
  curl -sf "$BASE/assets/$f" -o "$SITE/assets/$f"
done

# Pull section files until one is missing, so new sections come down on their own.
i=1
while :; do
  nn=$(printf "%02d" "$i")
  if curl -sf "$BASE/data/s$nn.js" -o "$SITE/data/s$nn.js"; then
    i=$((i+1))
  else
    rm -f "$SITE/data/s$nn.js"
    break
  fi
done
echo "Mirrored $((i-1)) sections."

node -e '
const fs = require("fs"), path = require("path");
global.window = {};
const dir = process.argv[1];
const files = fs.readdirSync(dir).filter(f => /^s\d+\.js$/.test(f)).sort();
for (const f of files) new Function("window", fs.readFileSync(path.join(dir, f), "utf8"))(global.window);
const sections = Object.values(global.window.DESIGN_BRAIN).sort((a, b) => a.n - b.n);
const total = sections.reduce((s, x) => s + x.entries.length, 0);
fs.writeFileSync(process.argv[2], JSON.stringify({ generated: new Date().toISOString(), source: process.argv[3], sections }, null, 1));
console.log("Index rebuilt:", sections.length, "sections,", total, "entries.");
' "$SITE/data" "$SKILL/data/design-brain.json" "$BASE/"
# Rebuild the numbers index from the corpus.
node -e '
const fs = require("fs");
const d = JSON.parse(fs.readFileSync(process.argv[1], "utf8"));
const rows = [];
for (const s of d.sections) for (const e of s.entries) if (e.numbers) rows.push({ n: e.n, title: e.title, section: s.slug, verify: e.verify && e.verify.status, numbers: e.numbers, source: e.source || "" });
fs.writeFileSync(process.argv[2], JSON.stringify({ generated: new Date().toISOString(), count: rows.length, entries: rows }, null, 1));
console.log("Numbers index rebuilt:", rows.length, "entries with published figures.");
' "$SKILL/data/design-brain.json" "$SKILL/data/numbers.json"
echo "Browse offline: file://$SITE/index.html"
