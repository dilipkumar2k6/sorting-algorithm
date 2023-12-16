const bucketSort = (arr)=> {
// Implement your choice of bucket sort
}

const wrapper = nums => {
    const plus = nums.filter(a => a >=0);
    const minus = nums.filter(a => a < 0).map(a => a * -1);
    bucketSort(plus);
    bucketSort(minus);
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

const arr = [21, 0, -345, 13, 12, 101, -1, 2, 101, 99, -50, 234, 1];
wrapper(arr);
console.log(arr);