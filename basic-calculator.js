// Problem: Basic Calculator
// Implement a basic calculator to evaluate a simple expression string.

/**
 * Evaluates a simple expression string containing non-negative integers, +, -, (, ), and spaces.
 * @param {string} s - The expression string.
 * @return {number} - The result of the expression.
 */
function calculate(s) {
    const stack = [];
    let currentNumber = 0;
    let result = 0;
    let sign = 1; // 1 for positive, -1 for negative

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (isDigit(char)) {
            currentNumber = currentNumber * 10 + parseInt(char, 10);
        } else if (char === '+') {
            result += sign * currentNumber;
            currentNumber = 0;
            sign = 1;
        } else if (char === '-') {
            result += sign * currentNumber;
            currentNumber = 0;
            sign = -1;
        } else if (char === '(') {
            stack.push(result);
            stack.push(sign);
            result = 0;
            sign = 1;
        } else if (char === ')') {
            result += sign * currentNumber;
            currentNumber = 0;
            result *= stack.pop(); // sign
            result += stack.pop(); // previous result
        }
    }

    return result + (sign * currentNumber);
}

/**
 * Checks if a character is a digit.
 * @param {char} char - The character to check.
 * @return {boolean} - True if the character is a digit, otherwise false.
 */
function isDigit(char) {
    return char >= '0' && char <= '9';
}

// Example usage:
// console.log(calculate("1 + 1")); // Output: 2
// console.log(calculate(" 2-1 + 2 ")); // Output: 3
// console.log(calculate("(1+(4+5+2)-3)+(6+8)")); // Output: 23

// Explanation:
// The solution uses a stack to handle parentheses and evaluate the expression.
// It processes each character to update the result based on the current number and sign.
