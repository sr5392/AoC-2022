const fs = require("fs");

fs.readFile("input.txt", "utf-8", (err, data) => {
    const arr = [];
    console.log(data);

    data.split("\r\n\r\n").forEach(element => {
        arr.push(element.split("\r\n").reduce((accumulator, element) => accumulator + Number(element), 0));
    });

    //Output highest element
    console.log(Math.max(...arr));

    //Output 3 highest elements
    console.log(arr.sort((x, y) => (y - x)).slice(0,3).reduce((accumulator, element) => accumulator + Number(element), 0));
});