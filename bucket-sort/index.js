const bucketSize = 10;
const getBucket = (arr)=> {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const divider = Math.ceil((max + 1)/bucketSize);
    const bucket =  new Array(bucketSize).fill(0).map(a => []);
    return [divider, bucket];
}

const getBucketIndex = (num, divider) => {
    return Math.floor( num / divider);
}
const bucketSort = arr => {
    const n = arr.length;
    // Get bucket
    const [divider, bucket] = getBucket(arr);

    // Scatter nums i.e. insert elements into their respective buckets
    for (let i=0; i < n; i++) {
        const num = arr[i];
        const index = getBucketIndex(num, divider);   
        bucket[index].push(num);     
    }
    // Sort each bucket
    for (let i=0; i < bucket.length; i++) {
        bucket[i].sort((a,b)=>a-b); // or write custom sort algorithm eg, inserstion sort in above step
    }
    console.log({bucket})
    // Gather buckets
    let k=0;
    for (let i=0; i < bucket.length;i++) {
        for (let j=0; j < bucket[i].length; j++) {
            arr[k++] = bucket[i][j];
        }
    }

}
const arr = [98,2,44,4,354,9,45,8,5,567,23,67,68,1,1,2,9];
bucketSort(arr);
console.log(arr);