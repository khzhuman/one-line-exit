// The One-Line Exit — a single-line resignation letter.
// The program prints one letter to /output/entry.txt.
// A resignation needs exactly one line: the farewell, the co-signer,
// and the reason nobody at the office will argue with.
import { mkdirSync, writeFileSync } from "node:fs";

const letter =
  "Dear sirs, I resign. " +
  "The printer and I have agreed " +
  "it is time we both stopped pretending this works.";

// One line, no padding: the letter goes out exactly as written.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", letter, "utf8");
