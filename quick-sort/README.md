It is based on partitioning array into following three parts 
1. First part with all elements less than second part
2. Second part has all equal elements greater than first part
3. Third part has all elements greater than second part

Following are few important points
- This algorithm pick random element and place it to its correct position
- There are three partitions algo
a. Lomuto partition - proceed from left to right in single direction
b. Tony Hore - Proceed from both direction until both pointers crossed each other.
c. Three way partitioning
https://algs4.cs.princeton.edu/lectures/demo/23DemoPartitioning.pdf