const fs = require("fs");

console.log(
    Math.max(
        ...fs.readFileSync("input.txt", "utf-8").split("\r\n\r\n")
        .map((element) => element.split("\r\n")
        .reduce((accumulator, element) => accumulator + Number(element), 0))
    )
);