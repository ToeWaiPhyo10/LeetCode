// Problem: Set Matrix Zeroes
// Given an m x n matrix, if an element is 0, set its entire row and column to 0.
// You must do it in place without using extra space for another matrix.

/**
 * Modifies the matrix in place. If an element is 0, its entire row and column are set to 0.
 * @param {number[][]} matrix - The m x n matrix to modify.
 */
function setZeroes(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    let firstRowZero = false;
    let firstColZero = false;

    // Determine if the first row or first column needs to be zeroed
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) firstColZero = true;
    }
    for (let j = 0; j < n; j++) {
        if (matrix[0][j] === 0) firstRowZero = true;
    }

    // Use the first row and column as markers
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    // Set zeroes based on markers
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    // Zero the first row if needed
    if (firstRowZero) {
        for (let j = 0; j < n; j++) {
            matrix[0][j] = 0;
        }
    }

    // Zero the first column if needed
    if (firstColZero) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }
}

// Example usage:
// const matrix = [
//     [1, 1, 1],
//     [1, 0, 1],
//     [1, 1, 1]
// ];
// setZeroes(matrix);
// console.log(matrix); // Output: [[1, 0, 1], [0, 0, 0], [1, 0, 1]]

// Explanation:
// The solution uses the first row and column as markers to avoid using extra space.
// After marking, it sets the zeroes based on these markers.
// Finally, it handles the first row and column separately if they need to be zeroed.
