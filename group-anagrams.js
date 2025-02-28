// Problem: Group Anagrams
// Given an array of strings, group the anagrams together.

/**
 * Groups anagrams from a list of strings.
 * @param {string[]} strs - The list of strings.
 * @return {string[][]} - The grouped anagrams.
 */
function groupAnagrams(strs) {
    const map = {};

    for (const str of strs) {
        // Sort the string to use as a key
        const key = str.split('').sort().join('');
        
        // Add the string to the corresponding anagram group
        if (!map[key]) {
            map[key] = [];
        }
        map[key].push(str);
    }

    // Return the grouped anagrams
    return Object.values(map);
}

// Example usage:
// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

// Explanation:
// The solution uses a hash map where the key is the sorted version of the string.
// It groups strings by their sorted key to collect anagrams together.
