const fs = require("fs");

// Calling the readFileSync() method
// to read 'input.txt' file
const data = fs.readFileSync("./dataJson.txt", { encoding: "utf8", flag: "r" });

// Display the file data
console.log(data);
