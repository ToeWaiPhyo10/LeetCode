function removeDuplicates(nums) {
    if (nums.length === 0) return 0;
    let k = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k]) {
            k++;
            nums[k] = nums[i];
        }
    }
    return k + 1;
}

// Example usage:
let nums1 = [1, 1, 2];
let k1 = removeDuplicates(nums1);
console.log(k1, nums1.slice(0, k1)); // Output: 2, [1, 2]

let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let k2 = removeDuplicates(nums2);
console.log(k2, nums2.slice(0, k2)); // Output: 5, [0, 1, 2, 3, 4]
