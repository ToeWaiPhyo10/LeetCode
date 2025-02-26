// Problem: Minimum Window Substring
// Given two strings s and t, return the minimum window in s which will contain all the characters in t.
// If there is no such window, return an empty string.

function minWindow(s, t) {
    if (t.length > s.length) return "";

    const tCount = new Map();
    for (const char of t) {
        tCount.set(char, (tCount.get(char) || 0) + 1);
    }

    let left = 0;
    let right = 0;
    let required = tCount.size;
    let formed = 0;
    const windowCounts = new Map();
    let minLength = Infinity;
    let minLeft = 0;

    while (right < s.length) {
        const char = s[right];
        windowCounts.set(char, (windowCounts.get(char) || 0) + 1);

        if (tCount.has(char) && windowCounts.get(char) === tCount.get(char)) {
            formed++;
        }

        while (left <= right && formed === required) {
            if (right - left + 1 < minLength) {
                minLength = right - left + 1;
                minLeft = left;
            }

            const leftChar = s[left];
            windowCounts.set(leftChar, windowCounts.get(leftChar) - 1);
            if (tCount.has(leftChar) && windowCounts.get(leftChar) < tCount.get(leftChar)) {
                formed--;
            }
            left++;
        }
        right++;
    }

    return minLength === Infinity ? "" : s.substring(minLeft, minLeft + minLength);
}

// Example usage:
const s1 = "ADOBECODEBANC";
const t1 = "ABC";
console.log(minWindow(s1, t1)); // Output: "BANC"

const s2 = "a";
const t2 = "a";
console.log(minWindow(s2, t2)); // Output: "a"

const s3 = "a";
const t3 = "aa";
console.log(minWindow(s3, t3)); // Output: ""

// Explanation:
// The solution uses a sliding window approach to find the minimum window containing all characters of t.
// It expands the window by moving the right pointer and shrinks it by moving the left pointer.
