//using two pointer approach
function moveZeroes(nums) {
  let nonZeroIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[nonZeroIndex]] = [nums[nonZeroIndex], nums[i]];
      nonZeroIndex++;
    }
  }
}
let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums);
