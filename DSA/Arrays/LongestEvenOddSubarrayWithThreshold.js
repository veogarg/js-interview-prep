var longestAlternatingSubarray = function(nums, threshold) {
    let res = 0;
    let curr = 0
    for(let num of nums){
        const numRem = num%2
        if(num>threshold || (numRem === 1 && curr === 0)) {
            curr = 0
            continue;
        };
        if(curr%2  ===  numRem){
            curr += 1;
            res = Math.max(res, curr);
            continue
        }else if(numRem===0) {
            curr = 1;
            res = Math.max(res, curr);
        }else {
            curr = 0;
        }

    }
    return res;
};

// console.log(longestAlternatingSubarray([2,7,5,5,2,9,9], 20));
// console.log(longestAlternatingSubarray([4,10,3], 10));
// console.log(longestAlternatingSubarray([2,3,4,5], 4));


const maxEvenOddSubarray = (arr) => {
    let res = 1;
    let curr = 1;
    for(let i= 1; i<arr.length; i++) {
        if((arr[i]%2===0 && arr[i-1]%2===1) || (arr[i]%2===1 && arr[i-1]%2===0)) {
            curr += 1
            res = Math.max(res, curr)
        }else {
            curr = 1
        }
    }
    return res
}

console.log(maxEvenOddSubarray([5,10,20,6,3,8]))