const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf-8");
let [stacks, moves] = input.split("\r\n\r\n");

stacks = stacks
    .split("\r\n")
    .slice(0, -1)
    .map(element => [...element].filter((_, index) => index % 4 == 1));

stacks = stacks[0].map((_, index) => stacks.map(element => element[index]).filter(element => element != " ").reverse())

moves = moves
    .split("\r\n")
    .map(element => element.match(/^move (\d+) from (\d+) to (\d+)$/).slice(1,4))

for (const [count, source, target] of moves) {
    for (let i = 0; i < count; i++) {
        stacks[target - 1].push(stacks[source - 1].pop())
    }
}

const output = stacks.reduce((accumulator, element) => accumulator += element[element.length - 1]);
console.log(output);

