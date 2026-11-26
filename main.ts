// Out of Tokens, Mid-Sentence — entry for make.fun
// u-kiencx-out-of-tokens-mid-sentence-00f60233
// Writes one line (1-140 chars): the error message an AI agent shows
// when it runs out of tokens mid-sentence, to /output/entry.txt.
// Fresh angle: the error message itself gets cut off mid-word, so the
// line demonstrates the failure it reports — flat system tone, then the
// rug pull on the very last character.

import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const ENTRY =
  "Error: out of tokens mid-sentence. The ending was brilliant, but you'll have to take my word for—";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(`${OUTPUT_DIR}/entry.txt`, ENTRY, "utf8");
