// Problem: Word Pattern
// Given a pattern and a string s, find if s follows the same pattern.
// Each character in pattern must map to a word in s, and no two characters may map to the same word.

/**
 * Determines if a pattern matches a string.
 * @param {string} pattern - The pattern string.
 * @param {string} s - The string to match against the pattern.
 * @return {boolean} - True if the pattern matches the string, otherwise false.
 */
function wordPattern(pattern, s) {
    const words = s.split(' ');
    if (pattern.length !== words.length) return false;

    const charToWord = {};
    const wordToChar = {};

    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = words[i];

        if ((charToWord[char] && charToWord[char] !== word) || (wordToChar[word] && wordToChar[word] !== char)) {
            return false;
        }

        charToWord[char] = word;
        wordToChar[word] = char;
    }

    return true;
}

// Example usage:
// console.log(wordPattern("abba", "dog cat cat dog")); // Output: true
// console.log(wordPattern("abba", "dog cat cat fish")); // Output: false
// console.log(wordPattern("aaaa", "dog cat cat dog")); // Output: false

// Explanation:
// The solution uses two hash maps to track character-to-word and word-to-character mappings.
// It checks for consistency in mappings to determine if the pattern matches the string.
