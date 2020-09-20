# Selection Sort vs Bubble sort
Due to the similar nature of implementation, these two sorting algorithm sounds the same which cause confusion.

Following are similarities
1. Both sorting algorithm place ith sorted element on ith iteration.
2. Both are the brute force algorithm
3. Technically both algorithm selects ith sorted element on ith iteration, the only difference is how they discover it.
4. Both are in place algorithm.

Following are differences
1. Selection sort selects ith sorted element iterating from left to right.
2. Bubble sort bubble out ith sorted element iterating from right to left by comparing two elements.
3. Selection sort finds out ith sorted element and swap with the current ith element.
4. Bubble sort simply bubbles out the smallest element in each iteration. It has no relation to the current ith element.
5. Since bubble sort maintains the order of an element, therefore, it is stable sort compare to Selection sort which is an unstable sort.