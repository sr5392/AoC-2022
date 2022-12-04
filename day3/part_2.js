const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf-8").split("\r\n");

let priorities = 0;
for(let i = 0; i < input.length; i += 3){
    const groups = input.slice(i, i+3);

    const group1 = groups[0].split("");
    const group2 = groups[1].split("");
    const group3 = groups[2].split("");

    const items = new Set(group1.filter(element => group2.indexOf(element) != -1));
   
    let item;
    for(const element of items){
        if(group3.indexOf(element) != -1){
            item = element;
            break;
        }
    }

    let priority = 0;
    const charCode = item.charCodeAt(0);
    (charCode >= 97) ? (priority = charCode - 96) : (priority = charCode - 64 + 26);
    
    priorities += priority;
}

console.log(priorities);