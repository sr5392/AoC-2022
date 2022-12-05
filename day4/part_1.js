const fs = require("fs");

let count = 0;
const input = fs.readFileSync("input.txt", "utf-8").split("\r\n").forEach((element) => {
    const group = element;
    const [sections1, sections2] = group.split(",");

    let [sections1Low, sections1High] = sections1.split("-").map(element => Number(element));
    let [sections2Low, sections2High] = sections2.split("-").map(element => Number(element));

    if((sections1High - sections1Low) > (sections2High - sections2Low)){
        if((sections1High >= sections2High) && (sections1Low <= sections2Low)){
            count += 1;
        } 
    } else if((sections2High - sections2Low) > (sections1High - sections1Low)){
        if((sections2High >= sections1High) && (sections2Low <= sections1Low)){
            count += 1;   
        } 
    } else {
        if((sections1High == sections2High) && (sections1Low == sections2Low)){
            count += 1;
        } 
    }
});

console.log(count);