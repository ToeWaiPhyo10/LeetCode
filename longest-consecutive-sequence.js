// Problem: Longest Consecutive Sequence
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

/**
 * Finds the length of the longest consecutive sequence.
 * @param {number[]} nums - The array of integers.
 * @return {number} - The length of the longest consecutive sequence.
 */
function longestConsecutive(nums) {
    const numSet = new Set(nums);
    let longestStreak = 0;

    for (const num of numSet) {
        if (!numSet.has(num - 1)) { // Check if it's the start of a sequence
            let currentNum = num;
            let currentStreak = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }

            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
}

// Example usage:
// console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // Output: 4
// console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // Output: 9

// Explanation:
// The solution uses a set to store elements and checks for the start of a sequence.
// It counts the length of each sequence and updates the longest streak found.
