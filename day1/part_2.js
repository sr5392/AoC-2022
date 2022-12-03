const fs = require("fs");

console.log(
    fs.readFileSync("input.txt", "utf-8").split("\r\n\r\n")
    .map((element) => element.split("\r\n")
    .reduce((accumulator, element) => accumulator + Number(element), 0))
    .sort((x, y) => (y - x))
    .slice(0,3)
    .reduce((accumulator, element) => accumulator + Number(element), 0)
);


