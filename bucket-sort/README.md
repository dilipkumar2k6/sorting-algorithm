https://www.geeksforgeeks.org/bucket-sort-2/
https://www.programiz.com/dsa/bucket-sort
- useful when input is uniformly distributed over a range
- Example
    - Sort a large set of floating point numbers which are in range from 0.0 to 1.0 and are uniformly distributed across the range. 
    - Counting sort can not be applied here as we use keys as index in counting sort.
- Algo
```
![](assets/https://media.geeksforgeeks.org/wp-content/uploads/BucketSort.png)

1) Create n empty buckets (Or lists).
2) Do following for every array element arr[i].
    a) Insert arr[i] into bucket[n*array[i]]
3) Sort individual buckets using insertion sort.
4) Concatenate all sorted buckets.
```