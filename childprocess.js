let cp = require("child_process");
console.log("Trying to open Pepcoding")
//cp.execSync("calc");
cp.execSync("start chrome https:\\www.pepcoding.com")
console.log("Trying to open Pepcoding")
let output = cp.execSync("node abc.js")
console.log("Output: "+ output)