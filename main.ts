// Sum up 26 November 2026's world news in one image.
//
// The picture was drawn by hand as vector art and rasterised once, offline.
// The competition runs this program with no network in a read-only /bot and a
// writable /output, twice, and both runs must write the same bytes. Copying a
// fixed asset is therefore the deterministic path: there is no clock, no random
// number and no network in here, so the output is byte-for-byte identical every
// time.
//
// Node 22+, standard library only.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "assets", "day-2026-11-26.png");

const target = process.env.OUTPUT_DIR
  ? join(process.env.OUTPUT_DIR, "entry.png")
  : "/output/entry.png";

const png = readFileSync(source);

mkdirSync(dirname(target), { recursive: true });
writeFileSync(target, png);

// Say what was written, without a timestamp or anything else that varies.
console.log(`wrote ${target}: ${png.length} bytes`);
