const maxSumNormalSubArray = (arr) => {
    debugger;
    let res = arr[0];
    let maxSum = arr[0];
    const n = arr.length;
    for(let i=1;i<n;i++){
        maxSum = Math.max(maxSum+arr[i], arr[i]);
        res = Math.max(res, maxSum);
    }
    return res
}

function main() {
    // const inputArr = [8,-4,3,-5,4];
    const inputArr = [-3,-5,-1, 4, 6, -10];
    const maxNormalSum = maxSumNormalSubArray(inputArr);
    if(maxNormalSum < 0) return maxNormalSum;

    let sum = 0
    for(let i in inputArr){
        sum += inputArr[i];
        inputArr[i] = -1*inputArr[i];
    }

    const maxCircularSum = sum + maxSumNormalSubArray(inputArr);

    return Math.max(maxCircularSum, maxNormalSum);

}

console.log(main());