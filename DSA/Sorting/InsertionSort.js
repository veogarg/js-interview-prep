function InsertionSort(arr) { // unoptimised implementation
    let n = arr.length
    for(let i = 1; i<n; i++) {
        let k = i;
        for(let j = i-1; j >= 0; j--) {
            if(arr[k] < arr[j]) {
                let temp = arr[k];
                arr[k] = arr[j];
                arr[j] = temp
                k = j;
            }
            console.log(arr);
        }
        console.log("==============");
    }
    return arr;
}

console.log(InsertionSort([10,5,2,8,20,18]))

console.log("**************************");

function InsertionSortOp(arr) { // optimised to some extent
    let n = arr.length
    for(let i = 1; i<n;i++) {
        let k = arr[i]
        let j = i-1
        while(j>=0 && k < arr[j]) {
            arr[j+1] = arr[j]
            j--;
            console.log("::",arr);
        }
        arr[j+1] = k
        console.log(arr);

        console.log("=============");
    }

    return arr
}

console.log(InsertionSortOp([10,5,2,8,20,18]))

