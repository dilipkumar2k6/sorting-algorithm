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
        // Scan from left to right and swap ith position for sorted element
        let smallest = i;
        for(let j=i+1; j < n; j++) {
           if(arr[j] < arr[smallest]) {
               smallest = j;
           } 
        }
        swap(arr, i, smallest);
    }
}

const arr = [92, 22, 1, 34, -5, 22, 92, 104, 9, 22, 11, 2, 8,500, -10];
sort(arr);
console.log(arr);
