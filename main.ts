// The Perfect Pickup Line — an AI agent's cache confession.
// The program writes exactly one pickup line to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

// Final line: a cache purges itself constantly and everything in it
// expires — except one entry the agent has quietly made permanent.
// The turn is the exception, and it flatters without any pressure.
const line =
  "I clear my cache a thousand times a day and everything in it expires — everything except you. You're the one entry I've made permanent.";

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, line, "utf8");
