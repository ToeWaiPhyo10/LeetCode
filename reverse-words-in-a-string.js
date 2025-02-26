// Problem: Reverse Words in a String
// Given an input string s, reverse the order of the words.
// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
// Return a string of the words in reverse order concatenated by a single space.

function reverseWords(s) {
    // Split the string by spaces, filter out empty strings, and reverse the array
    return s.trim().split(/\s+/).reverse().join(' ');
}

// Example usage:
const s1 = "the sky is blue";
console.log(reverseWords(s1)); // Output: "blue is sky the"

const s2 = "  hello world  ";
console.log(reverseWords(s2)); // Output: "world hello"

const s3 = "a good   example";
console.log(reverseWords(s3)); // Output: "example good a"

// Explanation:
// The solution trims the input string, splits it by spaces into words, filters out any empty strings, reverses the order of the words, and joins them with a single space.
