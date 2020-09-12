const swap = (arr, i, j) => {
    const t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
}

const partition = (arr, start, end) => {

    // Choose random number between start and end
    const random = start + Math.floor(Math.random()*(end - start + 1));
    // swap start with random
    swap(arr, start, random);
    const pivot = arr[start];
    let left = start;
    let right = end;
    while( left <= right) {        
       if(arr[left] <= pivot) { // using = comparison helps to move pointer and also no need for i = start + 1
           left++;
       } 
       else if(arr[right] > pivot) {
           right--;
       } else {
           swap(arr, left, right);
       }
    }
    swap(arr, start, right);
    return right;
}

const quick = (arr, start, end) => {
    if(end <= start) {
        return;
    }
    const pIndex = partition(arr, start, end);
    quick(arr, start, pIndex - 1);
    quick(arr, pIndex + 1, end);
}
const sort = arr => {
    quick(arr, 0, arr.length - 1);
}

const arr = [92, 22, 1, 34, -5, 22, 92, 104, 9, 22, 11, 2, 8,500];
// const arr = ['K', 'C', 'A','I','E','E','L','P','U','T','M','Q','R','X','O','S'];
sort(arr);
console.log(arr);
