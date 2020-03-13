const sort = (arr, range) => {
    const count = new Array(range).fill(0); // know your range ahead

    // Phase 1: Build count array
    for(let i=0; i < arr.length; i++) {
        const num = arr[i];
        count[num] = count[num] ? count[num] + 1 : 1;
    }
    // Phase 2: Update count array for number position
    for(let i=1; i < count.length; i++) {
        count[i] += count[i-1]
    }
    // Phase 3: Print number as per position
    const result = [];
    for(let i=0; i < arr.length; i++) {
        const num = arr[i];
        const position = --count[num];
        result[position] = num;
    } 
    for(let i=0; i < result.length; i++) {
        arr[i] = result[i];
    }       
}

const arr = [92, 22, 1, 34, 5, 22, 92, 104, 9, 22, 23, 24, 11, 2, 8,100];
const range = 200;
sort(arr, range);
console.log(arr);