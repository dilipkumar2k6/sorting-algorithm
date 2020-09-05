
const sort = (arr, range) => {
    const counts = new Array(range).fill(null).map(a => []);
    for(let i=0; i < arr.length; i++) {
        const num = arr[i];
        counts[num].push(num);
    }
    let k=0;
    for(let i=0; i < counts.length; i++) {
      for(let j=0; j < counts[i].length; j++) {
        arr[k] = counts[i][j];
        k++;
      }
    }
}

const arr = [92, 22, 1, 34, 5, 22, 92, 104, 9, 22, 23, 24, 11, 2, 8,100];
const range = 200;
sort(arr, range);
console.log(arr);
