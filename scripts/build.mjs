import { mkdirSync, copyFileSync } from "node:fs";
import { build } from "esbuild";

mkdirSync("dist", { recursive: true });
copyFileSync("src/index.html", "dist/index.html");
copyFileSync("src/styles.css", "dist/styles.css");
copyFileSync("src/favicon.svg", "dist/favicon.svg");

await build({
  entryPoints: ["src/app.js"],
  bundle: true,
  format: "iife",
  outfile: "dist/app.js",
  legalComments: "inline",
  charset: "utf8",
  sourcemap: false
});
