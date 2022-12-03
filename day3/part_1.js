const fs = require("fs");

console.log(
    fs.readFileSync("input.txt", "utf-8").split("\n").map((element) => {
        const compartment1 = element.slice(0, element.length/2)
        const compartment2 = element.slice(element.length/2, element.length)
 
        const item = compartment1.split("").filter(element => compartment2.indexOf(element) != -1)[0];
        const charCode = item.charCodeAt(0);

        let priority = 0;
        (charCode >= 97) ? (priority = charCode - 96) : (priority = charCode - 64 + 26);
        return priority;
    })
    .reduce((accumulator, element) => accumulator + element)
);