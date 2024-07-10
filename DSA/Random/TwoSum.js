/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const n  =nums.length
    let i=  0;
    let j = n-1;
    const arr =  nums.sort((a,b) => a-b)
    while(i<=j) {
        const sum = arr[i] + arr[j]
        console.log(sum, i, j);
        if(sum === target){
            const index_i = nums.indexOf(nums[i])
            const index_j = nums.indexOf(nums[j])
             return [index_i, index_j]
        };

        if(sum > target) j--;
        if(sum < target) i++;

    }
        return [] 

};

console.log(twoSum([3,2,4], 6))