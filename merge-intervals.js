// Problem: Merge Intervals
// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

/**
 * Merges all overlapping intervals in a list.
 * @param {number[][]} intervals - The list of intervals.
 * @return {number[][]} - The merged list of intervals.
 */
function merge(intervals) {
    if (intervals.length <= 1) return intervals;

    // Sort intervals by their start time
    intervals.sort((a, b) => a[0] - b[0]);

    const merged = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const lastMerged = merged[merged.length - 1];
        const current = intervals[i];

        // If the current interval overlaps with the last merged interval, merge them
        if (current[0] <= lastMerged[1]) {
            lastMerged[1] = Math.max(lastMerged[1], current[1]);
        } else {
            merged.push(current);
        }
    }

    return merged;
}

// Example usage:
// console.log(merge([[1,3],[2,6],[8,10],[15,18]])); // Output: [[1,6],[8,10],[15,18]]
// console.log(merge([[1,4],[4,5]])); // Output: [[1,5]]

// Explanation:
// The solution sorts the intervals and iterates through them to merge overlapping intervals.
// It adds non-overlapping intervals directly to the result list.
