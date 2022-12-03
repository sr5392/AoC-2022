const fs = require('fs');

// A, X = Rock = 1 points
// B, Y = Paper = 2 points
// C, Z = Scissors = 3 points
const value = {
    "X": 1,
    "Y": 2,
    "Z": 3,
};

// Win = 6 points
// Lose = 0 points
// Draw = 3 points 
const eval = {
    "A": {"X": 3, "Y": 6, "Z": 0},
    "B": {"X": 0, "Y": 3, "Z": 6},
    "C": {"X": 6, "Y": 0, "Z": 3},
};

const outcome = {
    "X": { "A": "Z", "B": "X", "C": "Y"},   //Lose
    "Y": { "A": "X", "B": "Y", "C": "Z"},   //Draw
    "Z": { "A": "Y", "B": "Z", "C": "X"}    //Win
};

let score = 0;
fs.readFileSync("input.txt", "utf-8").split("\r\n").map((element) => {
    let [a, b] = element.split(" ");

    b = outcome[b][a];

    score += value[b];
    score += eval[a][b];
});

console.log(score);