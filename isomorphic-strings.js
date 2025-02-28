// Problem: Isomorphic Strings
// Given two strings s and t, determine if they are isomorphic.
// Two strings are isomorphic if the characters in s can be replaced to get t.

/**
 * Determines if two strings are isomorphic.
 * @param {string} s - The first string.
 * @param {string} t - The second string.
 * @return {boolean} - True if the strings are isomorphic, otherwise false.
 */
function isIsomorphic(s, t) {
    if (s.length !== t.length) return false;

    const mapST = {};
    const mapTS = {};

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        if ((mapST[charS] && mapST[charS] !== charT) || (mapTS[charT] && mapTS[charT] !== charS)) {
            return false;
        }

        mapST[charS] = charT;
        mapTS[charT] = charS;
    }

    return true;
}

// Example usage:
// console.log(isIsomorphic("egg", "add")); // Output: true
// console.log(isIsomorphic("foo", "bar")); // Output: false
// console.log(isIsomorphic("paper", "title")); // Output: true

// Explanation:
// The solution uses two hash maps to track character mappings between the strings.
// It checks for consistency in mappings to determine if the strings are isomorphic.
