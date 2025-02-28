// Problem: Rotate Image
// You are given an n x n 2D matrix representing an image.
// Rotate the image by 90 degrees (clockwise).
// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.
// DO NOT allocate another 2D matrix and do the rotation.

/**
 * Rotates the matrix by 90 degrees clockwise in place.
 * @param {number[][]} matrix - The n x n 2D matrix to rotate.
 */
function rotate(matrix) {
    const n = matrix.length;

    // Transpose the matrix
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    // Reverse each row
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
}

// Example usage:
// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// rotate(matrix);
// console.log(matrix); // Output: [[7, 4, 1], [8, 5, 2], [9, 6, 3]]

// Explanation:
// The solution involves two main steps:
// 1. Transpose the matrix by swapping elements across the diagonal.
// 2. Reverse each row to achieve a 90-degree clockwise rotation.
// This approach modifies the matrix in place without using extra space.
