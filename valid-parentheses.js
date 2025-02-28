// Problem: Valid Parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

/**
 * Determines if a string of parentheses is valid.
 * @param {string} s - The string containing parentheses.
 * @return {boolean} - True if the string is valid, otherwise false.
 */
function isValid(s) {
    const stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (const char of s) {
        if (char in map) {
            if (stack.length > 0 && stack[stack.length - 1] === map[char]) {
                stack.pop();
            } else {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
}

// Example usage:
// console.log(isValid("()")); // Output: true
// console.log(isValid("()[]{}")); // Output: true
// console.log(isValid("(]")); // Output: false

// Explanation:
// The solution uses a stack to track opening brackets and checks them against closing brackets.
// It ensures that brackets are closed in the correct order and type.
