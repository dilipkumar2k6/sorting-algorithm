 
 const merge = (arr, start, mid, end) => {
     const newArray = [];
     let i = start;
     let j = mid+1;
     while(i <= mid && j <= end) {
        // check if arr1 first item is less than arr2
        if(arr[i] <= arr[j]) { // <= is required for stable sort if use < then it's no more stable
            newArray.push(arr[i])
            i++;
        }

        // check if arr2 first item is less than arr1
        else {
            newArray.push(arr[j])
            j++;
        }
     }

     // copy remaining arr1
     while(i <= mid) {
        newArray.push(arr[i])
        i++;
     }

     // copy remaining arr2
     while(j <= end) {
        newArray.push(arr[j])
        j++;
     }
     // modify arr
     for(let k= 0; k < newArray.length; k++) {
        arr[k+ start] = newArray[k];
     }
 }

const mergeSort = (arr, start, end) => {

    // if single element then simply return
    if(end <= start ) {
        return;
    }

    const mid = Math.floor((start + end)/2);

    // merge sort on left
    mergeSort(arr, start, mid);

    // merge sort on right
    mergeSort(arr, mid+1, end);

    // merge two sorted array
    merge(arr, start, mid, end);
}

const sort = arr => {
    mergeSort(arr, 0, arr.length - 1);
}

const arr = [92, 22, 1, 34, -5, 22, 92, 104, 9, 22, 11, 2, 8,500];
sort(arr);
console.log(arr);
