import { existsSync } from "node:fs";
import { rm } from "node:fs/promises";
import path from "node:path";
import { execFileSync } from "node:child_process";

const repoUrl = "https://github.com/susaamara/e-prasanka.git";
const dest = path.resolve("pos-app");

// In Vercel (and many CI environments), git submodules are not checked out.
// We clone the repo at build time so `/pos` can be served on the same domain.
if (existsSync(dest)) {
  // Remove anything leftover from a previous build cache.
  await rm(dest, { recursive: true, force: true });
}

execFileSync("git", ["clone", "--depth", "1", repoUrl, dest], {
  stdio: "inherit",
});

