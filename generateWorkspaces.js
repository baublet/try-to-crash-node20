import fs from "fs";
import path from "path";

const TOTAL_TO_GENERATE = 200;
const WORKSPACES_DIR = path.join(process.cwd(), "workspaces");

for (let i = 0; i < TOTAL_TO_GENERATE; i++) {
  const dirname = `_${Date.now()}${Math.floor(Math.random() * 99999)}`;
  const dirPath = path.join(WORKSPACES_DIR, dirname);
  fs.mkdirSync(dirPath);

  const packageName = `@test/${dirname}`;
  const packageJsonPath = path.join(dirPath, "package.json");
  fs.writeFileSync(
    packageJsonPath,
    `{
  "name": "${packageName}",
  "version": "1.0.0",
  "scripts": {
    "build": "build-app"
  },
  "devDependencies": {
    "@test/a": "1.0.0"
  }
}\n`
  );
}
