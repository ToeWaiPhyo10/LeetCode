function removeDuplicates(nums) {
    if (nums.length <= 2) return nums.length;
    let k = 2;
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] !== nums[k - 2]) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
}

// Example usage:
let nums1 = [1, 1, 1, 2, 2, 3];
let k1 = removeDuplicates(nums1);
console.log(k1, nums1.slice(0, k1)); // Output: 5, [1, 1, 2, 2, 3]

let nums2 = [0, 0, 1, 1, 1, 1, 2, 3, 3];
let k2 = removeDuplicates(nums2);
console.log(k2, nums2.slice(0, k2)); // Output: 7, [0, 0, 1, 1, 2, 3, 3]
