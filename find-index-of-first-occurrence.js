// Problem: Find the Index of the First Occurrence in a String
// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack,
// or -1 if needle is not part of haystack.

function strStr(haystack, needle) {
    return haystack.indexOf(needle);
}

// Example usage:
const haystack1 = "sadbutsad";
const needle1 = "sad";
console.log(strStr(haystack1, needle1)); // Output: 0

const haystack2 = "leetcode";
const needle2 = "leeto";
console.log(strStr(haystack2, needle2)); // Output: -1

// Explanation:
// The solution uses the built-in indexOf method to find the first occurrence of needle in haystack.
// If the needle is not found, indexOf returns -1.
