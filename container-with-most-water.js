// Problem: Container With Most Water
// Given an integer array height of length n, find two lines that together with the x-axis form a container,
// such that the container contains the most water.

function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        const width = right - left;
        const currentArea = Math.min(height[left], height[right]) * width;
        maxArea = Math.max(maxArea, currentArea);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}

// Example usage:
const height1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height1)); // Output: 49

const height2 = [1, 1];
console.log(maxArea(height2)); // Output: 1

// Explanation:
// The solution uses a two-pointer approach to calculate the maximum area of water that can be contained.
// By moving the pointer of the shorter line inward, it attempts to find a larger area.
