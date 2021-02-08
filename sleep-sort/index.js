const sleep = (num) => {
    return new Promise((resolve, reject) => {
        // wait for given num
        setTimeout(()=> {
            resolve(); 
        } , num)
    });
}
const handleSleep = async (num, result) =>{
    // wait for given num
    await sleep(num);

    // After that add into result
    result.push(num);
}
const sleepSort = async nums => {
    const result = [];
    const promises = nums.map(num => handleSleep(num, result));
    // Resolve promies in parallel
    await Promise.all(promises);
    return result;
}
const test = async () => {
    const nums = [10,4,9,1,3,5,1,233,1,33,24,155,144];
    const result = await sleepSort(nums);
    console.log({result, nums});
}
test();
