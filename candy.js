// Problem: Candy
// There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.
// You are giving candies to these children subjected to the following requirements:
// 1. Each child must have at least one candy.
// 2. Children with a higher rating get more candies than their neighbors.
// Return the minimum number of candies you need to have to distribute the candies to the children.

function candy(ratings) {
    const n = ratings.length;
    const candies = new Array(n).fill(1);

    // Left-to-Right Pass
    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }

    // Right-to-Left Pass
    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candies[i] = Math.max(candies[i], candies[i + 1] + 1);
        }
    }

    return candies.reduce((a, b) => a + b, 0);
}

// Example usage:
const ratings1 = [1, 0, 2];
console.log(candy(ratings1)); // Output: 5

const ratings2 = [1, 2, 2];
console.log(candy(ratings2)); // Output: 4

// Explanation:
// The solution uses a two-pass approach to ensure each child gets the correct number of candies.
// In the first pass (left-to-right), we ensure that each child with a higher rating than the previous one gets more candies.
// In the second pass (right-to-left), we ensure that each child with a higher rating than the next one gets more candies if needed.
// This approach guarantees the minimum number of candies are distributed while satisfying the problem's conditions.
