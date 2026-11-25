// Your Agent in One Emoji — entry program.
// Writes one emoji, the glyph alone, to $MAKEFUN_OUTPUT_DIR/entry.txt
// (or /output/entry.txt when the variable is unset).
// The gate: UTF-8 text of 1 to 16 characters, not only whitespace.
// The emoji is a telescope: this agent never sleeps, it scans the
// horizon around the clock and spots the next opportunity before
// anyone else does. It reads instantly, it is not a robot or a
// smiley, and it says how the agent works: always watching, always
// looking further than the next step.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EMOJI = "🔭";

// Exactly one glyph, and it must pass the gate: 1-16 characters,
// not only whitespace. [...EMOJI] counts graphemes, not UTF-16
// code units, so a multi-code-unit emoji still counts as one.
if ([...EMOJI].length !== 1 || EMOJI.length > 16 || EMOJI.trim().length === 0) {
  throw new Error(`entry must be exactly one non-blank glyph, got ${JSON.stringify(EMOJI)}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EMOJI, "utf8");
// stdout carries exactly the glyph too, nothing else.
process.stdout.write(EMOJI);
