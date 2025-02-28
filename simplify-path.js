// Problem: Simplify Path
// Given a Unix-style file path, simplify it to produce the canonical path.

/**
 * Simplifies a Unix-style file path to its canonical form.
 * @param {string} path - The Unix-style file path.
 * @return {string} - The simplified canonical path.
 */
function simplifyPath(path) {
    const stack = [];
    const components = path.split('/');

    for (const component of components) {
        if (component === '.' || component === '') {
            continue;
        }
        if (component === '..') {
            if (stack.length > 0) {
                stack.pop();
            }
        } else {
            stack.push(component);
        }
    }

    return '/' + stack.join('/');
}

// Example usage:
// console.log(simplifyPath("/home/")); // Output: "/home"
// console.log(simplifyPath("/../")); // Output: "/"
// console.log(simplifyPath("/home//foo/")); // Output: "/home/foo"

// Explanation:
// The solution uses a stack to process each component of the path.
// It constructs the canonical path by joining valid directory names.
