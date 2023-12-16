const getDigit = (num, radix) => {
    // Here number system base is 10      
    return Math.floor(num/Math.pow(10, radix))%10;
}

const sort = (arr, radix = 0) => {  
    const n = arr.length; 
    // Initialize buckets bucket of size 10 for base 10 number
    const buckets = new Array(10).fill(0);    
    // Calculate the count of elements
   for (let i=0; i < n; i++) {
        const index = getDigit(arr[i], radix);
        buckets[index]++;
   }
   // Calculate cumulative count to support stable sorting
   for (let i=1; i < buckets.length; i++) {
        buckets[i] += buckets[i-1];
   }
   // Place the element in sorted order 
   const output = new Array(n).fill(0);
   for(let i=n -1; i >= 0; i--) {
        const index = getDigit(arr[i], radix);
        output[--buckets[index]] = arr[i];
   } 

   // Copy sorted output to original array
   for (let i=0; i < n; i++) {
        arr[i] = output[i];
   }
}
const numberOfDigits = (num) => {
    return Math.floor(Math.log10(num)) + 1;
}
const radixSort = (arr)=> {
    // Find max number to determine the number of digits
    const max = Math.max(...arr);
    const digits = numberOfDigits(max);
    for(let i=0; i< digits; i++) {
        sort(arr, i);
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

const arr = [21, 0, -345, 13, 12, 101, -1, 2, 101, 99, -50, 234, 1];
radixSortWrapper(arr);
console.log(arr);