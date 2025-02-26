// Problem: Substring with Concatenation of All Words
// Given a string s and an array of strings words, find all starting indices of substring(s) in s
// that is a concatenation of each word in words exactly once, without any intervening characters.

function findSubstring(s, words) {
    if (words.length === 0 || s.length === 0) return [];

    const wordLength = words[0].length;
    const totalWordsLength = wordLength * words.length;
    const wordCount = new Map();

    for (const word of words) {
        wordCount.set(word, (wordCount.get(word) || 0) + 1);
    }

    const result = [];

    for (let i = 0; i <= s.length - totalWordsLength; i++) {
        const seen = new Map();
        let j = 0;

        while (j < words.length) {
            const word = s.substr(i + j * wordLength, wordLength);
            if (!wordCount.has(word)) break;
            seen.set(word, (seen.get(word) || 0) + 1);
            if (seen.get(word) > wordCount.get(word)) break;
            j++;
        }

        if (j === words.length) result.push(i);
    }

    return result;
}

// Example usage:
const s1 = "barfoothefoobarman";
const words1 = ["foo","bar"];
console.log(findSubstring(s1, words1)); // Output: [0, 9]

const s2 = "wordgoodgoodgoodbestword";
const words2 = ["word","good","best","word"];
console.log(findSubstring(s2, words2)); // Output: []

// Explanation:
// The solution uses a sliding window approach with a hash map to count occurrences of words.
// It checks for valid substrings that match the word count map.
