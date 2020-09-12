const leftChild = i => i * 2 + 1;
const rightChild = i => i * 2 + 2;
const parentNode = i => Math.floor((i-1)/2);
const heapifyDown = (nums, n, i) => {
    const left = leftChild(i);
    const right = rightChild(i);
    let largest = i;
    if(left < n && nums[left] > nums[largest]) {
        largest = left;
    }
    if(right < n && nums[right] > nums[largest]) {
        largest = right;
    }
    // if changed
    if(largest !== i) {
        swap(nums, i, largest);
        heapifyDown(nums, n, largest);
    }
}
const removeTop = (nums, n) => {
    const top = nums[0];
    // swap with first and last
    swap(nums, 0, n-1);
    // heapify down the new top
    heapifyDown(nums, n - 1, 0);
    return top;
}
const buidHeap = nums => {
    const n = nums.length;
    for(let i= Math.floor((n-1)/2); i >=0; i--) {
        // apply heapify down
        heapifyDown(nums, n, i);
    }
}
const heapSort = nums => {
    // build heap
    buidHeap(nums);

    // remove max iteratively
    for(let i=nums.length-1; i >= 0; i--) {
        removeTop(nums, i + 1);
    }
}