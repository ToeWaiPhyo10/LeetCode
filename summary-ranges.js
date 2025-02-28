// Problem: Summary Ranges
// Given a sorted unique integer array nums, return the smallest sorted list of ranges that cover all the numbers in the array.

/**
 * Summarizes the ranges in a sorted unique integer array.
 * @param {number[]} nums - The sorted unique integer array.
 * @return {string[]} - The list of summarized ranges.
 */
function summaryRanges(nums) {
    const ranges = [];
    let i = 0;

    while (i < nums.length) {
        const start = nums[i];

        while (i + 1 < nums.length && nums[i + 1] === nums[i] + 1) {
            i++;
        }

        const end = nums[i];
        if (start === end) {
            ranges.push(`${start}`);
        } else {
            ranges.push(`${start}->${end}`);
        }

        i++;
    }

    return ranges;
}

// Example usage:
// console.log(summaryRanges([0, 1, 2, 4, 5, 7])); // Output: ["0->2", "4->5", "7"]
// console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9])); // Output: ["0", "2->4", "6", "8->9"]

// Explanation:
// The solution iterates through the array to find consecutive ranges.
// It adds each range to the result list in the appropriate format.
