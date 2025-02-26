// Problem: Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without repeating characters.

function lengthOfLongestSubstring(s) {
    const charSet = new Set();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }
        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Example usage:
const s1 = "abcabcbb";
console.log(lengthOfLongestSubstring(s1)); // Output: 3

const s2 = "bbbbb";
console.log(lengthOfLongestSubstring(s2)); // Output: 1

const s3 = "pwwkew";
console.log(lengthOfLongestSubstring(s3)); // Output: 3

// Explanation:
// The solution uses a sliding window approach with a set to track characters in the current window.
// It expands the window by moving the right pointer and shrinks it by moving the left pointer when a duplicate is found.
