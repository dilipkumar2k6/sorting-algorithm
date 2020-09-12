const quickSortExtraSpace = (nums, start, end) => {
    // Base case: Single element is already sorted
    if(start >= end) {
        return;
    }
    const pivot = nums[start]; // choose start as pivot
    
    // create array of size 
    const size = end - start + 1;
    const arr = new Array(size).fill(0);
    let left = 0;
    let right = size - 1;
    for (let i=start+1; i <= end; i++) {
        if(nums[i] <= pivot) {
            arr[left] = nums[i];
            left++;
        } else {
            arr[right] = nums[i];
            right--;
        }
    }
    // finally place pivot
    arr[left] = pivot;
    // copy to original
    for (let i=0; i < arr.length; i++) {
        nums[start+i] = arr[i];
    }
    // recursive sort
    quickSortExtraSpace(nums, start, start + left - 1);
    quickSortExtraSpace(nums, start + left + 1, end);
}
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    quickSortExtraSpace(nums, 0, nums.length -1); 
    return nums;
};