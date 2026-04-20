import { cp, mkdir, rm } from "node:fs/promises";
import path from "node:path";

const from = path.resolve("pos-app", "client", "build");
const to = path.resolve("public", "pos-demo");

await rm(to, { recursive: true, force: true });
await mkdir(to, { recursive: true });
await cp(from, to, { recursive: true });

console.log(`Copied POS demo build from ${from} to ${to}`);

