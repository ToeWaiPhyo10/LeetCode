// Problem: Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

/**
 * Determines if two strings are anagrams.
 * @param {string} s - The first string.
 * @param {string} t - The second string.
 * @return {boolean} - True if the strings are anagrams, otherwise false.
 */
function isAnagram(s, t) {
    if (s.length !== t.length) return false;

    const count = {};

    // Count the occurrences of each character in s
    for (const char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    // Check if t has the same character counts
    for (const char of t) {
        if (!count[char]) {
            return false; // Character not found or insufficient
        }
        count[char]--;
    }

    return true; // All character counts match
}

// Example usage:
// console.log(isAnagram("anagram", "nagaram")); // Output: true
// console.log(isAnagram("rat", "car")); // Output: false

// Explanation:
// The solution uses a hash map to count the characters in the first string.
// It then checks if the second string has the same character counts.
