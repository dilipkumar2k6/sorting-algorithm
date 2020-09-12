
const sort = (arr, redix = 1) => {
   const counts = [];
   for (let i=0; i < arr.length; i++) {
       const index = arr[i]%Math.pow(10, redix);
       const existingArray = counts[index] || [];
       existingArray.push(arr[i]);
       counts[index] = existingArray;
   }
   let k=0;
   for(let i=0; i < counts.length; i++) {
       const existingArray = counts[i];
       if(existingArray) {
           for(let j=0; j < existingArray.length; j++) {
               arr[k] = existingArray[j];
               k++;
           }
       }
   } 
}

const redix = (arr, digits)=> {
    for(let i=1; i<= digits; i++) {
        sort(arr, i);
    }
}

const arr = [21, 345, 13, 12, 101, 101, 99, 50, 234, 1];
const digits = 3;
redix(arr, digits);
console.log(arr);
