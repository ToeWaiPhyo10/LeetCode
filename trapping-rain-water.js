// Problem: Trapping Rain Water
// Given n non-negative integers representing an elevation map where the width of each bar is 1,
// compute how much water it can trap after raining.

function trap(height) {
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let water = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                water += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                water += rightMax - height[right];
            }
            right--;
        }
    }

    return water;
}

// Example usage:
const height1 = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log(trap(height1)); // Output: 6

const height2 = [4,2,0,3,2,5];
console.log(trap(height2)); // Output: 9

// Explanation:
// The solution uses a two-pointer approach to calculate the trapped water.
// By maintaining leftMax and rightMax, it efficiently calculates the water trapped at each position.
// This approach ensures that the total trapped water is calculated in O(n) time complexity.
