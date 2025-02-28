// Problem: Happy Number
// Determine if a number is a "happy" number.

/**
 * Determines if a number is a happy number.
 * @param {number} n - The number to check.
 * @return {boolean} - True if the number is happy, otherwise false.
 */
function isHappy(n) {
    const seen = new Set();

    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = sumOfSquares(n);
    }

    return n === 1;
}

/**
 * Calculates the sum of the squares of the digits of a number.
 * @param {number} num - The number to process.
 * @return {number} - The sum of the squares of its digits.
 */
function sumOfSquares(num) {
    let sum = 0;
    while (num > 0) {
        const digit = num % 10;
        sum += digit * digit;
        num = Math.floor(num / 10);
    }
    return sum;
}

// Example usage:
// console.log(isHappy(19)); // Output: true
// console.log(isHappy(2)); // Output: false

// Explanation:
// The solution uses a set to track numbers seen during the process to detect cycles.
// It calculates the sum of the squares of digits and checks if the number becomes 1.
