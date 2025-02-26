// Problem: Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";

    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }
    return prefix;
}

// Example usage:
const strs1 = ["flower","flow","flight"];
console.log(longestCommonPrefix(strs1)); // Output: "fl"

const strs2 = ["dog","racecar","car"];
console.log(longestCommonPrefix(strs2)); // Output: ""

// Explanation:
// The solution starts with the first string as the initial prefix and iteratively reduces it until it matches the start of all strings.
// If no common prefix is found, it returns an empty string.
