#!/usr/bin/env python3
"""Query the Design Brain corpus (1,124 sourced design fundamentals, 31 sections).

Usage:
  query.py sections                     List all 31 sections
  query.py search <terms...>            Ranked keyword search (compact)
  query.py entry <n> [n...]             Full entry/entries by number
  query.py section <slug-or-number>     List entries in one section
  query.py critique <terms...>          Critic view: oneLine + pitfall + verify
                                        for matching entries (for design review)
  query.py numbers <terms...>           Search the published thresholds only
                                        (every entry's numbers field, with source)

Options:
  --limit N     Max results for search/critique (default 12)
  --json        Raw JSON output
"""
import json, re, sys
from pathlib import Path

DATA = Path(__file__).resolve().parent.parent / "data" / "design-brain.json"
NUMBERS = Path(__file__).resolve().parent.parent / "data" / "numbers.json"

def load():
    return json.loads(DATA.read_text())

def entry_text(e):
    parts = [e.get("title",""), e.get("oneLine","")] + e.get("aka",[])
    for k in ("what","why","how","example","pitfall","verify"):
        v = e.get(k)
        if isinstance(v, str): parts.append(v)
        elif isinstance(v, list): parts += [str(x) for x in v]
    return " ".join(parts).lower()

def score(e, terms, sec):
    t = entry_text(e); title = (e.get("title","") + " " + " ".join(e.get("aka",[]))).lower()
    s = 0
    for term in terms:
        if term in title: s += 5
        s += min(t.count(term), 4)
    return s

def flat(db):
    for sec in db["sections"]:
        for e in sec["entries"]:
            yield sec, e

def compact(sec, e):
    return f'#{e["n"]} {e["title"]} [{sec["slug"]}] — {e.get("oneLine","")} (Source: {e.get("source","?")})'

def full(sec, e):
    out = [f'#{e["n"]} {e["title"]}  [section {sec["n"]}: {sec["title"]}]']
    if e.get("aka"): out.append("aka: " + "; ".join(e["aka"]))
    for k in ("oneLine","what","why","how","example","pitfall"):
        v = e.get(k)
        if isinstance(v, dict): continue
        if v: out.append(f"{k}: {v if isinstance(v,str) else '; '.join(map(str,v))}")
    fc = e.get("verify")
    if isinstance(fc, dict) and fc.get("status"):
        out.append(f"fact-check: {fc['status']}")
    elif isinstance(fc, str):
        out.append(f"verify: {fc}")
    if e.get("numbers"):
        n = e["numbers"]
        out.append("numbers: " + (n if isinstance(n,str) else "; ".join(map(str,n))))
    if e.get("source"): out.append(f"SOURCE: {e['source']}")
    if e.get("related"): out.append("related: " + ", ".join(f"#{r}" for r in e["related"]))
    return "\n".join(out)

def main():
    args = sys.argv[1:]
    as_json = "--json" in args
    args = [a for a in args if a != "--json"]
    limit = 12
    if "--limit" in args:
        i = args.index("--limit"); limit = int(args[i+1]); del args[i:i+2]
    if not args:
        print(__doc__); return
    cmd, rest = args[0], args[1:]
    db = load()

    if cmd == "sections":
        for s in db["sections"]:
            entries = s.get("entries", [])
            print(f'{s["n"]:2d}. {s["slug"]:20s} {s["title"]}  ({len(entries)} entries)')
        return

    if cmd == "entry":
        wanted = {int(x) for x in rest}
        hits = [(s,e) for s,e in flat(db) if e["n"] in wanted]
        if as_json: print(json.dumps([e for _,e in hits], indent=1)); return
        print("\n\n".join(full(s,e) for s,e in hits) or "No such entry.")
        return

    if cmd == "section":
        key = rest[0].lower()
        for s in db["sections"]:
            if s["slug"] == key or str(s["n"]) == key:
                print(f'Section {s["n"]}: {s["title"]}\n{s.get("blurb","")}\n')
                for e in s["entries"]:
                    print(f'  #{e["n"]} {e["title"]} — {e.get("oneLine","")}')
                return
        print("No such section. Try: query.py sections")
        return

    if cmd == "numbers":
        terms = [t.lower() for t in rest]
        nums = json.loads(NUMBERS.read_text())["entries"] if NUMBERS.exists() else []
        def nscore(e):
            t = (e["title"] + " " + e["numbers"]).lower()
            return sum((5 if term in e["title"].lower() else 0) + min(t.count(term), 4) for term in terms)
        hits = sorted((x for x in nums if nscore(x) > 0), key=lambda x: -nscore(x))[:limit]
        if not hits: print("No matches in the numbers index."); return
        if as_json: print(json.dumps(hits, indent=1)); return
        for e in hits:
            flag = "" if e.get("verify") == "verified" else f' [{e.get("verify")}]'
            print(f'#{e["n"]} {e["title"]}{flag}\n  {e["numbers"]}\n  source: {e["source"]}\n')
        return

    if cmd in ("search", "critique"):
        terms = [t.lower() for t in rest]
        scored = sorted(((score(e,terms,s), s, e) for s,e in flat(db)), key=lambda x: -x[0])
        hits = [(s,e) for sc,s,e in scored[:limit] if sc > 0]
        if not hits: print("No matches."); return
        if as_json: print(json.dumps([e for _,e in hits], indent=1)); return
        for s,e in hits:
            if cmd == "search":
                print(compact(s,e))
            else:
                print(f'#{e["n"]} {e["title"]} [{s["slug"]}]')
                print(f'  rule:    {e.get("oneLine","")}')
                if e.get("pitfall"): print(f'  pitfall: {e["pitfall"]}')
                how = e.get("how")
                if isinstance(how, list) and how: print(f'  check:   {how[0]}')
                elif isinstance(how, str) and how: print(f'  check:   {how}')
                if e.get("numbers"): print(f'  numbers: {e["numbers"]}')
                print(f'  source:  {e.get("source","?")}\n')
        return

    print(__doc__)

if __name__ == "__main__":
    main()
