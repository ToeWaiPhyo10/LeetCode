// Problem: Zigzag Conversion
// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows.
// Write the code that will take a string and make this conversion given a number of rows.

function convert(s, numRows) {
    if (numRows === 1 || s.length <= numRows) return s;

    const rows = Array.from({ length: Math.min(numRows, s.length) }, () => '');
    let curRow = 0;
    let goingDown = false;

    for (const char of s) {
        rows[curRow] += char;
        if (curRow === 0 || curRow === numRows - 1) goingDown = !goingDown;
        curRow += goingDown ? 1 : -1;
    }

    return rows.join('');
}

// Example usage:
const s1 = "PAYPALISHIRING";
console.log(convert(s1, 3)); // Output: "PAHNAPLSIIGYIR"

console.log(convert(s1, 4)); // Output: "PINALSIGYAHRPI"

const s2 = "A";
console.log(convert(s2, 1)); // Output: "A"

// Explanation:
// The solution iterates through the string, placing each character in the appropriate row based on the zigzag pattern.
// It toggles the direction of row traversal when reaching the top or bottom row.
