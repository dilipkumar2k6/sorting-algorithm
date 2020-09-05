const sort = (arr) => {
    // Get min
    const min = Math.min(...arr);

    // Get max 
    const max = Math.max(...arr);

    const runningFrequencyMinus = new Array(min*-1+1).fill(0); 
    const runningFrequencyPlus = new Array(max).fill(0);

    // Phase 1: Initialize with frequency
    for(let i=0; i < arr.length; i++) {
        const num = arr[i];
        if(num >=0) {
            runningFrequencyPlus[num]++;
        } else {
            runningFrequencyMinus[num*-1]++;
        }
    }
    // Phase 2-a: Calculate running frequency for plus
    for(let i=1; i < runningFrequencyPlus.length; i++) {
        runningFrequencyPlus[i] += runningFrequencyPlus[i-1]
    }
    
    // Phase 2-b: Calculate running frequency for minus in reverse order
    for(let i=runningFrequencyMinus.length-2; i >=0; i--) {
        runningFrequencyMinus[i] += runningFrequencyMinus[i+1]
    }

    // Phase 2-c: increment runningFrequencyPlus with 0th of minus
    for(let i=0; i < runningFrequencyPlus.length; i++) {
        runningFrequencyPlus[i] += runningFrequencyMinus[1];
    }    
    // Phase 3: Print number as per position
    const result = [];
    for(let i=0; i < arr.length; i++) {
        const num = arr[i];
        if(num >= 0) {
            const position = --runningFrequencyPlus[num];
            result[position] = num;
        } else {
            const position = --runningFrequencyMinus[num*-1];
            result[position] = num;            
        }
    } 
    // Phase 3: For inplace, otherwise return result
    for(let i=0; i < result.length; i++) {
        arr[i] = result[i];
    }       
}

const arr = [-92, 22, 1, 34, 5, -22, -92, 104, -1, -1,-1,-1,0,0,0,9, 22, 23, -24, 11, -2, 8,100];
sort(arr);
console.log(arr);