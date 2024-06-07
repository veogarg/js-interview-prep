(function main(){
    const inputArr = [2,3,10,6,5,4,8,1]
    const maxDiff = MaximumDifferenceProblemWithOrder(inputArr)
    console.log({maxDiff});
})()

// function MaximumDifferenceProblemWithOrder(arr) {
//     let minIndex= 0;
//     let maxIndex = 0;
//     for(let i =1;i<arr.length;i++) {
//         if(arr[i] < arr[minIndex] && arr[i] - arr[maxIndex] > 0){
//             minIndex = i;
//         }else if(arr[i]>arr[maxIndex]){
//             maxIndex = i;
//         }
        
//     }
//     return arr[maxIndex] - arr[minIndex];
// }

function MaximumDifferenceProblemWithOrder(arr) {
    let res = arr[1]-arr[0], minVal = arr[0];
    for(i=1;i<arr.length;i++) {
        res = Math.max(res, arr[i] - minVal);
        minVal = Math.min(arr[i], minVal)
    }
    return res;
}