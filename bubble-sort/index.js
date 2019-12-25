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
    for (let i=0; i < n; i++) {
        // iterate from right to left and find out smallest element to bubble out
        for(let j=n-1; j >i; j--) {
            if(arr[j] < arr[j-1]) {
                swap(arr, j, j-1);
            }
        } 
    }
}

const arr = [92, 22, 1, 34, -5, 22, 92, 104, 9, 22, 11, 2, 8,500];
sort(arr);
console.log(arr);
