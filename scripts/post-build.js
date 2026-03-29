const fs = require("fs");
const path = require("path");

fs.writeFileSync(
  path.join(__dirname, "..", "dist", "cjs", "package.json"),
  JSON.stringify({ type: "commonjs" }, null, 2)
);

fs.writeFileSync(
  path.join(__dirname, "..", "dist", "esm", "package.json"),
  JSON.stringify({ type: "module" }, null, 2)
);

console.log("Post-build: wrote dist/cjs/package.json and dist/esm/package.json");
