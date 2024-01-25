// This doesn't really do anything useful. It's to simulate doing something.
import fs from "fs";
import path from "path";
import crypto from "crypto";

let i = 0;
console.log("Building...");
const jobInterval = setInterval(build, 500);

function build() {
  doWork();
  i++;
  if (i > 10) {
    clearInterval(jobInterval);
    console.log("Done building!");
  }
}

function doWork() {
  const hashes: string[] = [];
  for (let i = 0; i < 10000; i++) {
    const hash = crypto.createHash("sha256");
    hash.update(i.toString());
    hashes.push(hash.digest("hex"));
  }
  fs.writeFileSync(
    path.join(process.cwd(), "build.txt"),
    "Hello world\n"+hashes.join("\n"),
    "utf-8"
  );
}
