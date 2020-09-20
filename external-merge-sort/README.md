# External Merge Sort
https://www.youtube.com/watch?v=Bp7fGofslng
https://www.youtube.com/watch?v=ATK74YSzwxg&t=130s

Q. 5GB of data in file on disk with 1GB RAM, how you can sort it?
- Can't load whole 5GB data into RAM therefore can't apply standard algorithm. 
![](assets/big-file-sort.png)
    - You can load 1GB data and sort it
    - But you can't load next 1GB data and perform comparison to sort 2GB data
    - If you keep loading sorted data from disk for comparison then it will take forever time using insertion sort
    ![](assets/bigfile-sort-partial.png)
How can we leverage merge sort to solve this problem?
1. Step1:
    - Break 5GB data into 1GB data of separate file
      ![](assets/break-file-into-smaller.png)
    - Load each file in RAM, sort it using any of the standard algorithm and then write into separate file on disk
        ![](assets/sort-each-file.png)
2. Step2:
    - Take 150MB data from each file and load into RAM
    - It will consume total of 750MB of RAM
    - It will have 250MB left on RAM
    ![](assets/load-150MB-for-each-file.png)
    - Different type of merge sort
        - Standard 2 way merge sort
        ![](assets/2-way-merge-sort.png)
        - 3 way merge sort
        ![](assets/3-way-merge-sort.png)
    - Perform `5` way merge on 5 array and keep writing into remaining `250MB` left RAM
    ![](assets/5-way-merge-sort.png)
    - Once `250GB` RAM is full write into disk and free up spaces
    ![](assets/write-output.png)
    - Once any of `5` merge pointer `i` reached to end then load next batch of `150MB` of data from that file and reset pointer variable
    ![](assets/write-output.png)
    - Keep doing it until file data is exhausted 
    - Every time `250GB` RAM get full and data is written on disk with separate file name.
    ![](assets/sorted-files.png)

External merged sort is used when data can't be fit in memory. 



