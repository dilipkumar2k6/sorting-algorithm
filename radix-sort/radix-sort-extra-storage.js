
const getDigit = (num, radix) => {
    // Here number system base is 10      
    return Math.floor(num/Math.pow(10, radix))%10;
}
const sort = (arr, radix = 0) => {   
    // Initialize bucket of size 10 for base 10 number
    const bucket = new Array(10).fill(0).map(a => []); 
    
    // Update bucket
   for (let i=0; i < arr.length; i++) {
        const num = arr[i];
        const index = getDigit(num, radix);
        bucket[index].push(num);
   }
   // sort number 
   let k=0;
   for(let i=0; i < bucket.length; i++) {
        for(let j=0; j < bucket[i].length; j++) {
            arr[k++] = bucket[i][j];
        }
   } 
}
const numberOfDigits = (num) => {
    return Math.floor(Math.log10(num)) + 1;
}
const radix = (arr)=> {
    // Find max number to determine the number of digits
    const max = Math.max(...arr);
    const digits = numberOfDigits(max);
    for(let i=0; i< digits; i++) {
        sort(arr, i);
    }
}

const arr = [21, 0, 345, 13, 12, 101, 1, 2, 101, 99, 50, 234, 1];
radix(arr);
console.log(arr);
