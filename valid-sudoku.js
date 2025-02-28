/**
 * Problem: Valid Sudoku
 * Determine if a 9x9 Sudoku board is valid.
 * The board is considered valid if:
 * 1. Each row contains the digits 1-9 without repetition.
 * 2. Each column contains the digits 1-9 without repetition.
 * 3. Each of the nine 3x3 sub-boxes contains the digits 1-9 without repetition.
 * Note: The Sudoku board could be partially filled, where empty cells are filled with the character '.'.
 */

/**
 * Determines if a 9x9 Sudoku board is valid.
 * @param {character[][]} board - The 9x9 Sudoku board.
 * @return {boolean} - True if the board is valid, otherwise false.
 */

function isValidSudoku(board) {
    // Create arrays of sets to track seen numbers for rows, columns, and boxes
    const rows = Array.from({ length: 9 }, () => new Set());
    const cols = Array.from({ length: 9 }, () => new Set());
    const boxes = Array.from({ length: 9 }, () => new Set());

    // Iterate over each cell in the board
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const value = board[r][c];
            // Skip empty cells
            if (value === '.') continue;

            // Calculate box index
            const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

            // Check if the value is already seen in the current row, column, or box
            if (rows[r].has(value) || cols[c].has(value) || boxes[boxIndex].has(value)) {
                return false; // Invalid board
            }

            // Add the value to the respective sets
            rows[r].add(value);
            cols[c].add(value);
            boxes[boxIndex].add(value);
        }
    }

    // If no duplicates were found, the board is valid
    return true;
}

// Example usage:
// const board = [
//     ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
//     ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
//     ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
//     ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
//     ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
//     ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
//     ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
//     ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
//     ['.', '.', '.', '.', '8', '.', '.', '7', '9']
// ];

// Explanation:
// This solution uses three sets for each row, column, and 3x3 sub-box to track numbers.
// As we iterate through each cell, we check if the number is already in the respective set.
// If it is, the board is invalid. Otherwise, we add the number to the set.
// The box index is calculated using the formula Math.floor(r / 3) * 3 + Math.floor(c / 3).
// This ensures each number is unique in its row, column, and 3x3 box.
