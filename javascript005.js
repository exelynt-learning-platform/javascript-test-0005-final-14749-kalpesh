function printNumberPattern(rows) {
    let currentNumber = 1;

    for (let row = 1; row <= rows; row++) {
        let rowOutput = "";

        for (let col = 1; col <= row; col++) {
            rowOutput += currentNumber + " ";
            currentNumber++;
        }

        console.log(rowOutput.trim());
    }
}

const TOTAL_ROWS = 5;
printNumberPattern(TOTAL_ROWS);