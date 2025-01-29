function SortBinaryArray(arr = [1,0,1,1,0]) {
    let i = 0;
    let n = arr.length
    for(let j = 1; j<n; j++) {
        if(arr[j] === 0 && arr[j-1] === 1 && arr[i] === 1) {
            [arr[j], arr[i]] = [arr[i], arr[j]]
            i++;
        }
    }
    return arr;
}
// console.log(SortBinaryArray());
// console.log(SortBinaryArray([1,1,1,0,0, 1, 0, 1, 1, 0]));


function seggregateEvenOdd(arr = [1,2,3,4,5,6]) {
    let i = 0;
    let n = arr.length
    for(let j = 0; j<n; j++) {
        if(arr[j]%2===0 && arr[i]%2!==0) {
            i=j;
        }
        else if(arr[j]%2===1) {
            [arr[j], arr[i]] = [arr[i], arr[j]]
            i=j
        }
    }
    return arr;
}

console.log(seggregateEvenOdd());

/**
 * Efficient approach
 */

function segPosNeg(arr) {
    let i = -1, j = arr.length
    while(true) {
        do{i++} while(arr[i]<0);
        do{j--} while(arr[j]>=0);
        if(i<=j) return;
        [arr[j], arr[i]] = [arr[i], arr[j]]

    }
}

console.log(segPosNeg([1,2,3,4,5,6]));