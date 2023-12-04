const { readFileSync } = require('fs');
const data = readFileSync('./input', 'utf-8').split(/\r?\n/);

const calibrationDocArr = data.reduce((accum, line) => {
    const lineNumbers = line.match(/[\d+]/g);
        if (lineNumbers && lineNumbers.length > 0) {
            accum += (Number(lineNumbers[0]) * 10 + Number(lineNumbers[lineNumbers.length - 1]));
        }
    return accum;
}, 0);

console.log("RESULT: ", calibrationDocArr)