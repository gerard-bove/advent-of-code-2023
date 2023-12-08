const { readFileSync } = require('fs');
const data = readFileSync('./input', 'utf-8').split(/\r?\n/);

const redCubes = 12;
const greenCubes = 13;
const blueCubes = 14;

const splitIntoSets = data.map(game => game.split("; "))

function isPossible(game) {
    let isPossible = true;
    game.forEach(gameSet => {
        const redIndex = gameSet.search("red") - 3;
        const greenIndex = gameSet.search("green") - 3;
        const blueIndex = gameSet.search("blue") - 3;
        const redNum = Number(gameSet.substring(redIndex, redIndex + 2));
        const greenNum = Number(gameSet.substring(greenIndex, greenIndex + 2));
        const blueNum = Number(gameSet.substring(blueIndex, blueIndex + 2))
        if (redNum > redCubes || greenNum > greenCubes || blueNum > blueCubes) {
            isPossible = false;
        }
    })
    return isPossible;
}

const result = splitIntoSets.reduce((accumulator, game, index) => {
    if (isPossible(game)) {
        accumulator += index+1;
    }
    return accumulator
}, 0)

console.log("RESULT: ", result)