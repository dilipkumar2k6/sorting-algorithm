const sort = (arr) => {
    const buckets = [];
    for(let i=0; i < arr.length; i++) {
        const num = arr[i];
        let index;
        if(-20 <= num && num < 0) {
            index = 0;
        }
        else if(0 <= num && num < 10) {
            index = 1;
        }
        else if(10 <= num && num < 20) {
            index = 2;
        }
        else if(20 <= num && num < 30) {
            index = 3;
        }
        else if(30 <= num && num < 40) {
            index = 4;
        }
        else if(40 <= num && num < 50) {
            index = 5;
        }
        else if(50 <= num && num < 60) {
            index = 6;
        }
        else if(60 <= num && num < 70) {
            index = 7;
        }
        else if(70 <= num && num < 80) {
            index = 8;
        }
        else if(80 <= num && num < 90) {
            index = 9;
        }
        else if(90 <= num && num < 100) {
            index = 10;
        } else {
            throw Error('Not supported');
        }
        const existingArray = buckets[index] || [];
        existingArray.push(num);   
        buckets[index] = existingArray;     
    }
    let k=0;
    for(let i=0; i < buckets.length; i++) {
        if(buckets[i]) {
            const existingArray = buckets[i];
            for(let j=0; j< existingArray.length; j++) {
                arr[k] = existingArray[j];
                k++;
            }
        }
    }
}
const arr = [56, 12, 84, 28, 0,-13, 47, 94, 31, 12];
sort(arr);
console.log(arr);