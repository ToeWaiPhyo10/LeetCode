// Problem: Insert Interval
// Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

/**
 * Inserts a new interval into a list of non-overlapping intervals and merges if necessary.
 * @param {number[][]} intervals - The list of non-overlapping intervals.
 * @param {number[]} newInterval - The new interval to insert.
 * @return {number[][]} - The list of merged intervals.
 */
function insert(intervals, newInterval) {
    const result = [];
    let i = 0;

    // Add all intervals that end before the new interval starts
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i]);
        i++;
    }

    // Merge overlapping intervals with the new interval
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    result.push(newInterval);

    // Add all intervals that start after the new interval ends
    while (i < intervals.length) {
        result.push(intervals[i]);
        i++;
    }

    return result;
}

// Example usage:
// console.log(insert([[1,3],[6,9]], [2,5])); // Output: [[1,5],[6,9]]
// console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8])); // Output: [[1,2],[3,10],[12,16]]

// Explanation:
// The solution iterates through the intervals and handles non-overlapping and overlapping parts separately.
// It merges overlapping intervals with the new interval and adds them to the result list.
