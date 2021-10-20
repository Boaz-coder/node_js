// file system

const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first);
console.log(second);

// write

writeFileSync(
  "./content/result-sync.txt",
  `Here is the results: ${first}, ${second}`,
  { flag: "a" }
);
