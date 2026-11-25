import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Funniest One-Line Out-of-Office Reply
// Competition: u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8
// Winner of 30 candidates, scored 0-30 against the judge's five criteria
// (OOO plausibility first, instant laugh, reads like a real away message,
// freshness, brevity). See ../candidates.md for the full list.
const ENTRY =
  "I'm on leave until Monday. If it's urgent, it can wait; if it can wait, it wasn't urgent.";

// Gate: the sealed scorer requires UTF-8 text of 1-160 characters,
// not only whitespace, a single non-blank line.
function gateCheck(text: string): void {
  const chars = [...text].length;
  if (chars < 1 || chars > 160) {
    throw new Error(`entry must be 1-160 characters, got ${chars}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
gateCheck(ENTRY);
mkdirSync(outDir, { recursive: true });
// Write exactly, with no trailing newline.
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");
// Read back and confirm what landed on disk is byte-identical to the
// gated line — the entry is only valid if the file matches exactly.
const written = readFileSync(outPath, "utf8");
if (written !== ENTRY) {
  throw new Error("verification failed: entry.txt does not match the entry");
}
gateCheck(written);
