// Problem: Is Subsequence
// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

function isSubsequence(s, t) {
    let i = 0, j = 0;
    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            i++;
        }
        j++;
    }
    return i === s.length;
}

// Example usage:
const s1 = "abc";
const t1 = "ahbgdc";
console.log(isSubsequence(s1, t1)); // Output: true

const s2 = "axc";
const t2 = "ahbgdc";
console.log(isSubsequence(s2, t2)); // Output: false

// Explanation:
// The solution uses two pointers to iterate through both strings.
// It checks if all characters of s appear in t in the same order.
