import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const appFile = path.resolve("pos-app", "client", "src", "App.jsx");

let src = await readFile(appFile, "utf8");

// Ensure the React Router app works under /pos-demo (same domain) instead of pushing to /login at the domain root.
// We keep the upstream repo untouched by patching during build.
src = src.replace("<Router>", '<Router basename="/pos-demo">');

await writeFile(appFile, src, "utf8");

console.log("Patched POS app Router basename to /pos-demo");

