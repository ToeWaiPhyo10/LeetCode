// Problem: Length of Last Word
// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.

function lengthOfLastWord(s) {
    let length = 0;
    let i = s.length - 1;

    // Skip trailing spaces
    while (i >= 0 && s[i] === ' ') {
        i--;
    }

    // Count the length of the last word
    while (i >= 0 && s[i] !== ' ') {
        length++;
        i--;
    }

    return length;
}

// Example usage:
const s1 = "Hello World";
console.log(lengthOfLastWord(s1)); // Output: 5

const s2 = "   fly me   to   the moon  ";
console.log(lengthOfLastWord(s2)); // Output: 4

const s3 = "luffy is still joyboy";
console.log(lengthOfLastWord(s3)); // Output: 6

// Explanation:
// The solution iterates from the end of the string, skipping trailing spaces, and then counts the characters of the last word until a space is encountered.
