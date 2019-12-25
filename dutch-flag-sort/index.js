const swap = (arr, i, j) => {
    const t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
}
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const n = nums.length;
    let left = 0;
    let i = 0;
    let right = n - 1;
    while(i <= right) {
        if(nums[i] === 0) {
            swap(nums, left, i);
            left++;
            i++;
        }
        else if (nums[i] === 2) {
            swap(nums, right, i);
            right--;
        } else if(nums[i] === 1){
            i++;
        } else {
            throw new Error('Not supported for num ', nums[i]);
        }
    }
    return nums;
};

const nums = [2,0,2,1,1,0];
sortColors(nums);
console.log(nums)