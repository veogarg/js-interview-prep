function SelectionSort(arr) {
    let n = arr.length
    for(let i = 0; i<n;i++) {
        let min_ind = i
        for(let j = i+1; j<n;j++) {
            if(arr[min_ind] > arr[j]) min_ind = j
        }

        if(i!==min_ind) {
            let temp = arr[min_ind];
            arr[min_ind] = arr[i];
            arr[i] = temp
        }
    }
    return arr;
}

console.log(SelectionSort([10,5,2,8,20,18]))