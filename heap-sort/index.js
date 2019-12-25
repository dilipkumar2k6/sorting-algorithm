const MaxPriorityQueue = require('./MaxPriorityQueue');

const sort = arr => {
 const queue = new MaxPriorityQueue(arr);
 queue.buildHeap();
 queue.sort();
}

const arr = [92, 22, 1, 34, -5, 22, 92, 104, 9, 22, 11, 2, 8,500];
sort(arr);
console.log(arr);
