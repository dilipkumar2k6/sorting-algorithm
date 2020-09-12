const countSortRadixSort = (nums, place) => {
    // Range will be in 0 to 9
    const frequency = new Array(10).fill(0);
    for(let i=0; i < nums.length; i++) {
        const index = Math.floor(nums[i]/place) % 10;
        frequency[index]++;
    }
    // get running frequency
    for (let i=1; i < 10; i++) {
        frequency[i]+= frequency[i-1];
    }
    const output = new Array(nums.length).fill(0);
    for (let i=nums.length - 1; i >=0 ; i--) {
        const index = Math.floor(nums[i]/place) % 10;
        const position = --frequency[index];
        output[position] = nums[i];
    }
    // copy for inpace
    for (let i=0; i < nums.length; i++) {
        nums[i] = output[i];
    }
    
}
const radixSort = nums => {
    if(nums.length < 2) {
        return;
    }
    let max = Math.max(...nums);
    let place = 1;
    while(max) {
        countSortRadixSort(nums, place);
        place *= 10;
        max  = Math.floor(max/10);
    }
}
const radixSortWrapper = nums => {
    const plus = nums.filter(a => a >=0);
    const minus = nums.filter(a => a < 0).map(a => a * -1);
    radixSort(plus);
    radixSort(minus);
    let index = 0;
    for(let i=minus.length - 1; i >=0 ; i--) {
        nums[index] = minus[i] * -1;
        index++;
    }
    for(let i=0; i < plus.length; i++) {
        nums[index] = plus[i];
        index++;
    }
}