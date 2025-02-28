// Problem: Evaluate Reverse Polish Notation
// Evaluate the value of an arithmetic expression in Reverse Polish Notation.

/**
 * Evaluates the value of an arithmetic expression in Reverse Polish Notation.
 * @param {string[]} tokens - The list of tokens in RPN.
 * @return {number} - The result of the expression.
 */
function evalRPN(tokens) {
    const stack = [];

    for (const token of tokens) {
        if (!isNaN(token)) {
            stack.push(Number(token));
        } else {
            const b = stack.pop();
            const a = stack.pop();
            let result;

            switch (token) {
                case '+':
                    result = a + b;
                    break;
                case '-':
                    result = a - b;
                    break;
                case '*':
                    result = a * b;
                    break;
                case '/':
                    result = Math.trunc(a / b); // Truncate towards zero
                    break;
            }

            stack.push(result);
        }
    }

    return stack.pop();
}

// Example usage:
// console.log(evalRPN(["2", "1", "+", "3", "*"])); // Output: 9
// console.log(evalRPN(["4", "13", "5", "/", "+"])); // Output: 6
// console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])); // Output: 22

// Explanation:
// The solution uses a stack to evaluate the RPN expression by processing tokens.
// It applies operations on the top two numbers and pushes results onto the stack.
