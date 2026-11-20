// gta6-clipper-01 entrypoint (Node 22, standard library only).
// Reads VIDEO.json from the repository root, checks it names a real
// public YouTube Shorts address (not the starter placeholder), and
// writes it to the output directory where the gate reads it.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const SHORTS_PATTERN = /^https:\/\/(www\.)?youtube\.com\/shorts\/[A-Za-z0-9_-]{11}$/;

function fail(message: string): never {
  console.error(`main.ts: ${message}`);
  process.exit(1);
}

let raw: string;
try {
  raw = readFileSync(join(BOT_DIR, 'VIDEO.json'), 'utf8');
} catch (err) {
  fail(`cannot read VIDEO.json in ${BOT_DIR}: ${(err as Error).message}`);
}

let video: unknown;
try {
  video = JSON.parse(raw);
} catch (err) {
  fail(`VIDEO.json is not valid JSON: ${(err as Error).message}`);
}

const url = (video as { url?: unknown } | null)?.url;
if (typeof url !== 'string' || !SHORTS_PATTERN.test(url)) {
  fail('VIDEO.json must name a YouTube Shorts URL like https://www.youtube.com/shorts/<11-char-id>');
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'VIDEO.json'), JSON.stringify({ url }) + '\n');
console.log(`main.ts: accepted ${url}`);
