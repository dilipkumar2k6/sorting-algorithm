const sort = (arr, range) => {
    const runningFrequency = new Array(range).fill(0); // know your range ahead

    // Phase 1: Initialize with frequency
    for(let i=0; i < arr.length; i++) {
        const num = arr[i];
        runningFrequency[num]++;
    }
    // Phase 2: Calculate running frequency
    for(let i=1; i < runningFrequency.length; i++) {
        runningFrequency[i] += runningFrequency[i-1]
    }
    // Phase 3: Print number as per position
    const result = [];
    for(let i=0; i < arr.length; i++) {
        const num = arr[i];
        const position = --runningFrequency[num];
        result[position] = num;
    } 
    // Phase 3: For inplace, otherwise return result
    for(let i=0; i < result.length; i++) {
        arr[i] = result[i];
    }       
}

const arr = [92, 22, 1, 34, 5, 22, 92, 104, 9, 22, 23, 24, 11, 2, 8,100];
const range = 200;
sort(arr, range);
console.log(arr);