const fs = require("fs");

let count = 0;
fs.readFileSync("input.txt", "utf-8").split("\r\n").forEach((element) => {
    const group = element;
    const [sections1, sections2] = group.split(",");

    const [sections1Low, sections1High] = sections1.split("-").map(Number);
    const [sections2Low, sections2High] = sections2.split("-").map(Number);

    if((sections1Low >= sections2Low && sections1High <= sections2High) 
    || (sections2Low >= sections1Low && sections2High <= sections1High))
            count += 1;
});

console.log(count);