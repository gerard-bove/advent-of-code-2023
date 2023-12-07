const { readFileSync } = require('fs');
const data = readFileSync('./input', 'utf-8').split(/\r?\n/);

function wordToNumber(word) {
    switch (word) {
        case 'one':
            return '1';
        case 'two':
            return '2';
        case 'three':
            return '3';
        case 'four':
            return '4';
        case 'five':
            return '5';
        case 'six':
            return '6';
        case 'seven':
            return '7';
        case 'eight':
            return '8';
        case 'nine':
            return '9';
    }
}
function findNumberwords (line) {
    let count = 0;
    let wordMatches = [];
    let lineSubstring = line;
    while (count < line.length) {
        let wordMatch = lineSubstring.substring(count).match(/one|two|three|four|five|six|seven|eight|nine/i)
        if (wordMatch !== null) {
            wordMatches.push(wordMatch);
            count += wordMatch[0].length - 2;
        }
        count ++;
    }
    if (wordMatches.length === 0) {
        return line;
    }
    const firstNumber = wordToNumber(wordMatches[0][0]);
    const indexFirstNumber = line.indexOf(wordMatches[0][0]);
    const secondNumber = wordToNumber(wordMatches[wordMatches.length-1][0]);
    const secondNumberLength = wordMatches[wordMatches.length-1][0].length;
    const indexSecondNumber = line.lastIndexOf(wordMatches[wordMatches.length-1][0]);
    return line.substring(0, indexFirstNumber) + firstNumber + line.substring(indexFirstNumber, indexSecondNumber + secondNumberLength) + secondNumber + line.substring(indexSecondNumber + secondNumberLength);
}

const calibrationDocArr = data.reduce((accum, line) => {
    const lineNumbers = findNumberwords(line).match(/[\d+]/g);
    if (lineNumbers && lineNumbers.length > 0) {
        accum += (Number(lineNumbers[0]) * 10 + Number(lineNumbers[lineNumbers.length - 1]));
    }
    return accum;
}, 0);

console.log("RESULT: ", calibrationDocArr)