let tail = new ListNode();
let nextSubList = new ListNode();

const merge = (list1, list2) => {
    const dummyHead = new ListNode();
    let newTail = dummyHead;
    while(list1 && list2) {
        if(list1.val <= list2.val) {
            newTail.next = list1;
            list1 = list1.next;
            newTail = newTail.next;
        } else {
            newTail.next = list2;
            list2 = list2.next;
            newTail = newTail.next;
        }
    }
    // copy rest
    newTail.next = list1 ? list1 : list2;
    
    // Traverse till the end of merged list to get the newTail
    while(newTail.next) {
        newTail = newTail.next;
    }
    // Link the old tail (managed globally) with the head of merged list
    tail.next = dummyHead.next;
    // update the old taol to new tail of merged list
    tail = newTail;
    
}
const split = (start, size) => {
    let midPrev = start;
    let end = start.next; 
    // use fast and slow approach to find middle and end of the seocnd linked list
    for (let i=0; i < size - 1 && (midPrev || end.next); i++) {
        if(end.next) {
            end = end.next.next ? end.next.next : end.next;
        }
        if(midPrev.next) {
            midPrev = midPrev.next;
        }        
    }
    mid = midPrev.next;
    midPrev.next = null;
    nextSubList = end.next;
    end.next = null;
    // return start of the second linked list
    
    return mid;
}
const getCount = head => {
    let count = 0;
    let node = head;
    while(node) {
        node = node.next;
        count++;
    }
    return count;
}


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    /**
    - Merge sort
    - Recursion will take O(log n) space to execute call stck
    - Use iterative approach for merge sort
        - Split problem into the smallest subproblem 
        - iteratively merge the result to solve the original problem
            - First, the list is split into sublist of size 1 
            - and then merged iterately in sorted order 
            - The merged list is solved similary
            - The proces continues until we sort the entire list
    - Algorithm:
        - Assume n is the number of nodes in the linked list
        - Start with splitting the list into sublise of size 1
        - Each adjacent parit of subslist of size 1 is merged in sorted order
        - After the first iteration, we getthe sorted list of size 2
        - To split the list into sublist of given size beginning from start, we use two pointers, mid and end there refere to the start and end of second linked list
        - The split proces finds the middle of linked list for the given size
        - As we iteratively split the list and merge, we have to keep trac of the previous merged list using pointer tail and the next sublist to be sorted using pointer nextSubList
        - In summary, maintain following pointers
            - size
            - start
            - mid
            - end 
            - nextSubList
            - tail
            
    */
    
   if(!head || !head.next) {
        return head;
    }
    const n = getCount(head);
    let start = head;
    let dummyHead = new ListNode();
    
    for (let size = 1; size < n; size = size * 2) {
        tail = dummyHead;
        while(start) {
            if(!start.next) {
                tail.next = start;
                break;
            }
            const mid = split(start, size);
            merge(start, mid);
            start = nextSubList;
        }
        start = dummyHead.next;
    }
    return dummyHead.next;
    
};