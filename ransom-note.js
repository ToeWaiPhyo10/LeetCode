// Problem: Ransom Note
// Given two strings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.

/**
 * Determines if ransomNote can be constructed from magazine.
 * @param {string} ransomNote - The ransom note string.
 * @param {string} magazine - The magazine string.
 * @return {boolean} - True if the ransom note can be constructed, otherwise false.
 */
function canConstruct(ransomNote, magazine) {
    const magazineCount = {};

    // Count the occurrences of each letter in the magazine
    for (const letter of magazine) {
        magazineCount[letter] = (magazineCount[letter] || 0) + 1;
    }

    // Check if the ransom note can be constructed
    for (const letter of ransomNote) {
        if (!magazineCount[letter]) {
            return false; // Letter not available or insufficient
        }
        magazineCount[letter]--;
    }

    return true; // All letters are available
}

// Example usage:
// console.log(canConstruct("a", "b")); // Output: false
// console.log(canConstruct("aa", "ab")); // Output: false
// console.log(canConstruct("aa", "aab")); // Output: true

// Explanation:
// The solution uses a hash map to count the letters in the magazine.
// It then checks if the ransom note can be constructed by decrementing the count for each letter.
// If any letter is missing or insufficient, it returns false.
