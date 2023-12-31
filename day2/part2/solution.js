const {readFileSync} = require ('fs')
const data = readFileSync('./input', 'utf-8').split(/\r?\n/);

const splitIntoSets = data.map(game => game.split("; "))

function hightestProductOfCubes(game) {
    let numberOfRedCubes = 0, numberOfGreenCubes = 0, numberOfBlueCubes = 0;
    game.forEach(gameSet => {
        const redIndex = gameSet.search("red") - 3;
        const greenIndex = gameSet.search("green") - 3;
        const blueIndex = gameSet.search("blue") - 3;
        const redNum = Number(gameSet.substring(redIndex, redIndex + 2));
        const greenNum = Number(gameSet.substring(greenIndex, greenIndex + 2));
        const blueNum = Number(gameSet.substring(blueIndex, blueIndex + 2))
        if (redNum > numberOfRedCubes) {
            numberOfRedCubes = redNum;
        }
        if (greenNum > numberOfGreenCubes) {
            numberOfGreenCubes = greenNum;
        }
        if (blueNum > numberOfBlueCubes) {
            numberOfBlueCubes = blueNum;
        }
    })
    return numberOfRedCubes * numberOfGreenCubes * numberOfBlueCubes;
}

console.log("RESULT: ", splitIntoSets.reduce((accumulator, game, index) => accumulator += hightestProductOfCubes(game), 0))