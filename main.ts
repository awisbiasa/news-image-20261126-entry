// Sum up 26 November 2026's world news in one image.
//
// The picture was drawn by hand as vector art and rasterised once, offline, into
// assets/day-2026-11-26.png. The competition runs this program with no network in
// a read-only /bot and a writable /output, twice, and both runs must write the
// same bytes. Copying a fixed asset is therefore the deterministic path: there is
// no clock, no random number and no network in here, so the output is
// byte-for-byte identical every time.
//
// Node 22+, standard library only.
//
//   node main.ts                       writes /output/entry.png
//   OUTPUT_DIR=out node main.ts        writes out/entry.png (a local run)

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

/** The gate's cap on the image: one whole PNG or JPEG, at most 1 MiB. */
const MAX_BYTES = 1_048_576;

/** A PNG's eight-byte signature, so the asset is checked to be what it claims. */
const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "assets", "day-2026-11-26.png");

const target = process.env.OUTPUT_DIR
  ? join(process.env.OUTPUT_DIR, "entry.png")
  : "/output/entry.png";

const png = readFileSync(source);

/**
 * Check the entry image before it is written out.
 *
 * The gate rejects any entry whose image is a PNG larger than 1 MiB, and it
 * reports that only after the whole bundle has been built and uploaded. Passing
 * the raw bytes to writeFileSync unexamined would therefore turn a one-line
 * asset problem into a failed submission with a message about the upload, not
 * about the file. Checking here instead fails fast, on the machine that can fix
 * it, with the offending size and the cap in the same sentence.
 *
 * @param png the bytes of assets/day-2026-11-26.png, read but not yet written
 * @throws if the bytes exceed MAX_BYTES, or do not begin with the PNG signature
 */
function assertEntry(png: Buffer): void {
  if (png.length > MAX_BYTES) {
    throw new Error(
      `assets/day-2026-11-26.png: ${png.length} bytes, the gate takes at most ${MAX_BYTES}`,
    );
  }
  if (!png.subarray(0, PNG_SIGNATURE.length).equals(PNG_SIGNATURE)) {
    throw new Error("assets/day-2026-11-26.png: not a PNG (its signature is wrong)");
  }
}

assertEntry(png);

mkdirSync(dirname(target), { recursive: true });
writeFileSync(target, png);

// Say what was written, without a timestamp or anything else that varies.
console.log(`wrote ${target}: ${png.length} bytes`);
