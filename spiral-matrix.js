// Problem: Spiral Matrix
// Given an m x n matrix, return all elements of the matrix in spiral order.

/**
 * Returns all elements of the matrix in spiral order.
 * @param {number[][]} matrix - The input matrix.
 * @return {number[]} - The elements in spiral order.
 */
function spiralOrder(matrix) {
    if (matrix.length === 0) return [];

    const result = [];
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        // Traverse from left to right along the top boundary
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++;

        // Traverse from top to bottom along the right boundary
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;

        // Check if there are still rows and columns to traverse
        if (top <= bottom) {
            // Traverse from right to left along the bottom boundary
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--;
        }

        if (left <= right) {
            // Traverse from bottom to top along the left boundary
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }
    }

    return result;
}

// Example usage:
// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// console.log(spiralOrder(matrix)); // Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]

// Explanation:
// The solution uses four pointers to represent the boundaries of the matrix: top, bottom, left, and right.
// We traverse the matrix in a spiral order by adjusting these boundaries after visiting each row or column.
// The traversal continues until all elements are visited, ensuring a spiral order is maintained.
