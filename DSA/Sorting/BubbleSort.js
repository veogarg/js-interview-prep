function BubbleSort(arr) {
    let n = arr.length
    for(let i = 0; i<n;i++) {
        let swapped = false
        for(let j = 0; j<n-i-1;j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp
                swapped = true
            }
        }

        if(!swapped) {
            return arr;
        }
    }
    return arr;
}

console.log(BubbleSort([10,5,2,8,20,18]))