const swap = (arr, i, j) => {
    const t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
}
const partition = (arr, start, end) => {
    const pivot = arr[start];
    let left = start;
    let right = end;
    let i = start;
    while(i <= right) {
        // if in left range then move left
        if(arr[i] < pivot) {
            swap(arr, left, i);
            left++;
            i++;
        }
        // if in right range then move right
        else if(arr[i] > pivot) {
            swap(arr, i, right);
            right--;
        }
        else {
            // if in blue range then do nothing
            i++;
        }
    }
    return [left,right]
}
const quickSort = (arr, start, end) => {
    if(start >= end) {
        return;
    }
    const [left, right] = partition(arr, start, end);
    quickSort(arr, start, left - 1);
    quickSort(arr, right+1, end);
}
const sort = arr => quickSort(arr, 0, arr.length - 1);

const arr = [92, 22, 1, 34, -5, 22, 92, 104, 9, 22, 11, 2, 8,500];
sort(arr);
console.log(arr);