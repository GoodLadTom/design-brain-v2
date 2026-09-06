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
echo "Restart your harness, then ask it a design question."
echo "Browse the corpus offline: file://$(cd "$(dirname "$0")/site" && pwd)/index.html"
