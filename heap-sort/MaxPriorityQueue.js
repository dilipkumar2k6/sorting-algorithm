class MaxPriorityQueue {
    constructor(heap){
        this.heap = heap || [];
        this.size = heap ? heap.length : 0;
    }
    parent(i) {
        return Math.floor((i-1)/2);
    }
    left(i) {
        return i*2 + 1;
    }
    right(i) {
        return i*2+2;
    }
    swap(i,j){
        const t = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = t;
    }
    add(x) {
        this.heap.push(x);
        this.size++;
        // balance last element
        this.heapifyUp(this.heap.length - 1);
    }
    heapifyDown(i) {
        let maxIndex = i;
        let lIndex = this.left(i);
        let rIndex = this.right(i);

        // check if root is less than left
        if(lIndex < this.size && this.heap[lIndex] > this.heap[maxIndex]) {
            maxIndex = lIndex;
        }
        // check if root is less than right
        if(rIndex < this.size && this.heap[rIndex] > this.heap[maxIndex]) {
            maxIndex = rIndex;
        }
        // if r is changed that means need to do recursive heapify
        if(maxIndex !== i) {
            this.swap(maxIndex, i);
            this.heapifyDown(maxIndex);
        }
    }
    heapifyUp(i){
        // get parent
        const pIndex = this.parent(i);
        if( this.heap[i] > this.heap[pIndex]) {
            // swap both
            this.swap(pIndex, i);
            this.heapifyUp(pIndex); // call recursively
        }
    }
    update(i, value) {
        const t = this.heap[i];
        this.heap[i] = value;
        if(value > t) {
            this.heapifyUp(i)
        } else {
            this.heapifyDown(i);
        }
    }
    buildHeap(){
        const start = Math.floor((this.size-1)/2);
        for(let i=start; i >=0; i--) {
            // heapify heap
            this.heapifyDown(i);
        }
    }
    remove(){
        const top = this.heap[0];
        // swap first and last
        this.swap(0, this.size - 1);
        this.size--;
        // heapify top element
        this.heapifyDown(0);
        return top;
    }
    sort(){
        const n = this.size;
        // remove top element
        for(let i=0; i < n; i++) {
            this.remove();
        }
    }

}

module.exports = MaxPriorityQueue;