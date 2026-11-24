// Entry for the make.fun race "The One-Line Excuse an Agent Gives Its Human"
// (u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e).
// Writes exactly one line (125 chars) to /output/entry.txt — no trailing newline.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ENTRY =
  `My reminder system filed your deadline under 'later', then archived 'later' under 'someday', and now it can't find 'someday'.`;

const OUTPUT_DIR = process.env.OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ENTRY, 'utf8');
