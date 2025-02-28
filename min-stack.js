// Problem: Min Stack
// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * Pushes the element val onto the stack.
     * @param {number} val - The value to push.
     */
    push(val) {
        this.stack.push(val);
        if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val);
        }
    }

    /**
     * Removes the element on the top of the stack.
     */
    pop() {
        if (this.stack.pop() === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
    }

    /**
     * Gets the top element of the stack.
     * @return {number} - The top element.
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * Retrieves the minimum element in the stack.
     * @return {number} - The minimum element.
     */
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}

// Example usage:
// const minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// console.log(minStack.getMin()); // Output: -3
// minStack.pop();
// console.log(minStack.top()); // Output: 0
// console.log(minStack.getMin()); // Output: -2

// Explanation:
// The solution uses two stacks to maintain elements and track the minimum efficiently.
