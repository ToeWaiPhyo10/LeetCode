// Problem: Game of Life
// Given an m x n grid of cells, each cell has an initial state: live (1) or dead (0).
// Compute the next state of the board using the following rules:
// 1. Any live cell with fewer than two live neighbors dies (underpopulation).
// 2. Any live cell with two or three live neighbors lives on to the next generation.
// 3. Any live cell with more than three live neighbors dies (overpopulation).
// 4. Any dead cell with exactly three live neighbors becomes a live cell (reproduction).

/**
 * Computes the next state of the board in place.
 * @param {number[][]} board - The m x n grid of cells.
 */
function gameOfLife(board) {
    const m = board.length;
    const n = board[0].length;

    const directions = [
        [0, 1], [1, 0], [0, -1], [-1, 0],
        [1, 1], [1, -1], [-1, 1], [-1, -1]
    ];

    const countLiveNeighbors = (x, y) => {
        let liveNeighbors = 0;
        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;
            if (nx >= 0 && nx < m && ny >= 0 && ny < n && Math.abs(board[nx][ny]) === 1) {
                liveNeighbors++;
            }
        }
        return liveNeighbors;
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const liveNeighbors = countLiveNeighbors(i, j);

            if (board[i][j] === 1 && (liveNeighbors < 2 || liveNeighbors > 3)) {
                board[i][j] = 2; // Live to dead
            }
            if (board[i][j] === 0 && liveNeighbors === 3) {
                board[i][j] = -1; // Dead to live
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 2) {
                board[i][j] = 0;
            }
            if (board[i][j] === -1) {
                board[i][j] = 1;
            }
        }
    }
}

// Example usage:
// const board = [
//     [0, 1, 0],
//     [0, 0, 1],
//     [1, 1, 1],
//     [0, 0, 0]
// ];
// gameOfLife(board);
// console.log(board); // Output: [[0, 0, 0], [1, 0, 1], [0, 1, 1], [0, 1, 0]]

// Explanation:
// The solution uses additional states to handle transitions in place.
// After computing the next state, it updates the board to reflect the changes.
