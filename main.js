const fs = require ('fs')

let contents1 = fs.readFileSync("a.txt", "utf-8");
console.log (contents1) 

let contents2 = fs.readFileSync('b.txt', 'utf-8');
console.log(contents2)