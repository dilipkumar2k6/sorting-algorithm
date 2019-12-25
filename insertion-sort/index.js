const swap = (arr, i, j) => {
    const t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
}
const sort = arr => {
    const n = arr.length;
    
    // skip for empty or one length array
    if(n <= 1) {
        return;
    }
    for (let i=1; i < n; i++) {
        let j = i;
        while(j >=1 &&  arr[j-1] > arr[j]) { // > is required for stable sort, if used >= then no more stable sort
           swap(arr, j-1, j);
           j--;  
        }
    }
}

const arr = [92, 22, 1, 34, -5, 22, 92, 104, 9, 22, 11, 2, 8,500];
sort(arr);
console.log(arr);
