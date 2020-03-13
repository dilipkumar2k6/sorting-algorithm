
const sort = (arr) => {
    const counts = [];
    for(let i=0; i < arr.length; i++) {
        const index = arr[i];
        const existingArray = counts[index] || [];
        existingArray.push(arr[i])
        counts[index] = existingArray
    }
    let k=0;
    for(let i=0; i < counts.length; i++) {
      if(counts[i]) {
        const existingArray = counts[i];
          for(let j=0; j < existingArray.length; j++) {
            arr[k] = existingArray[j];
            k++;
          }
      }  
    }
}

const arr = [92, 22, 1, 34, 5, 22, 92, 104, 9, 22, 11, 2, 8,100];
sort(arr);
console.log(arr);
