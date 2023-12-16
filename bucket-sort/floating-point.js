const getBucket = ()=> {
    // Create bucket of size 10
    return new Array(10).fill(0).map(a => []);
}
const getBucketIndex = num => {
    return Math.floor(num * 10);
}
const bucketSort = arr => {
    const n = arr.length;
    // Get bucket
    const bucket = getBucket();

    // Scatter nums i.e. insert elements into their respective buckets
    for (let i=0; i < n; i++) {
        const num = arr[i];
        const index = getBucketIndex(num);   
        bucket[index].push(num);     
    }
    // Sort each bucket
    for (let i=0; i < bucket.length; i++) {
        bucket[i].sort((a,b) => a - b); // or write custom sort algorithm eg, inserstion sort in above step
    }
    // Gather buckets
    let k=0;
    for (let i=0; i < bucket.length;i++) {
        for (let j=0; j < bucket[i].length; j++) {
            arr[k++] = bucket[i][j];
        }
    }

}
const arr = [0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434];
bucketSort(arr);
console.log(arr);