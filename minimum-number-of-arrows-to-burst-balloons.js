// Problem: Minimum Number of Arrows to Burst Balloons
// Given a list of balloons represented as intervals, find the minimum number of arrows needed to burst all balloons.

/**
 * Finds the minimum number of arrows needed to burst all balloons.
 * @param {number[][]} points - The list of balloon intervals.
 * @return {number} - The minimum number of arrows needed.
 */
function findMinArrowShots(points) {
    if (points.length === 0) return 0;

    // Sort balloons by their end coordinates
    points.sort((a, b) => a[1] - b[1]);

    let arrows = 1;
    let currentEnd = points[0][1];

    for (let i = 1; i < points.length; i++) {
        if (points[i][0] > currentEnd) {
            arrows++;
            currentEnd = points[i][1];
        }
    }

    return arrows;
}

// Example usage:
// console.log(findMinArrowShots([[10,16],[2,8],[1,6],[7,12]])); // Output: 2
// console.log(findMinArrowShots([[1,2],[3,4],[5,6],[7,8]])); // Output: 4

// Explanation:
// The solution sorts the intervals by their end points and uses a greedy approach to minimize arrows.
// It shoots an arrow at the end of the current interval and continues until all balloons are burst.
