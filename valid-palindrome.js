// Problem: Valid Palindrome
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.

function isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        while (left < right && !isAlphanumeric(s[left])) {
            left++;
        }
        while (left < right && !isAlphanumeric(s[right])) {
            right--;
        }
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

function isAlphanumeric(char) {
    return /^[a-z0-9]$/i.test(char);
}

// Example usage:
const s1 = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s1)); // Output: true

const s2 = "race a car";
console.log(isPalindrome(s2)); // Output: false

const s3 = " ";
console.log(isPalindrome(s3)); // Output: true

// Explanation:
// The solution uses two pointers to compare characters from both ends, skipping non-alphanumeric characters.
// It ensures case insensitivity by converting characters to lowercase before comparison.
