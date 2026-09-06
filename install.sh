#!/bin/bash
# Link the Design Brain skill into every agent harness found on this machine.
# Claude Code users can use /plugin marketplace add instead; this is for Codex,
# Cursor, and anyone who would rather have a plain symlink.
set -euo pipefail
SRC="$(cd "$(dirname "$0")/skills/design-brain" && pwd)"
linked=0
for dir in "$HOME/.claude/skills" "$HOME/.cursor/skills" "$HOME/.codex/skills" "$HOME/.agents/skills"; do
  parent="$(dirname "$dir")"
  [ -d "$parent" ] || continue
  mkdir -p "$dir"
  rm -rf "$dir/design-brain"
  ln -s "$SRC" "$dir/design-brain"
  echo "Linked into $dir"
  linked=$((linked+1))
done
if [ "$linked" -eq 0 ]; then
  echo "No agent harness found. Expected one of ~/.claude, ~/.cursor, ~/.codex or ~/.agents."
  exit 1
fi
echo
echo "Requirements:"
command -v python3 >/dev/null 2>&1 && echo "  python3: $(python3 --version 2>&1)" || echo "  python3: NOT FOUND (query.py needs it)"
if command -v node >/dev/null 2>&1; then
  v=$(node -v | sed 's/v//' | cut -d. -f1)
  [ "$v" -ge 22 ] 2>/dev/null && echo "  node: $(node -v)" || echo "  node: $(node -v), measure.mjs needs 22 or later"
else
  echo "  node: NOT FOUND (measure.mjs needs 22 or later)"
fi
found=""
for c in "$DESIGN_BRAIN_CHROME" "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" "/Applications/Chromium.app/Contents/MacOS/Chromium" /usr/bin/google-chrome /usr/bin/google-chrome-stable /usr/bin/chromium /usr/bin/chromium-browser; do
  [ -n "$c" ] && [ -x "$c" ] && { found="$c"; break; }
done
[ -n "$found" ] && echo "  chrome: $found" || echo "  chrome: NOT FOUND (set DESIGN_BRAIN_CHROME to the binary for measure.mjs)"
echo
echo "Restart your harness, then ask it a design question."
echo "Browse the corpus offline: file://$(cd "$(dirname "$0")/site" && pwd)/index.html"
