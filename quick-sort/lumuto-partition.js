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

    // choose start as middle partition
    let pIndex = start;
    let i = start+1;
    for (let j= start + 1; j <= end; j++) {
        // check if scanned element is in orange range i.e. left range
        if(arr[j] <= arr[pIndex]) {
            swap(arr, i, j);
            i++;
        }
    }
    // At the end i will be the beginning of right range i.e. green
    swap(arr, pIndex, i-1)
    return i - 1;
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

const arr = [1,1,0,0];
sort(arr);
console.log(arr);
