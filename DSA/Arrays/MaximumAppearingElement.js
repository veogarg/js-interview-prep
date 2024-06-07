const maxAppearingElement = (left, right) => {
    const freq = new Array(11).fill(0);
    for(let  i = 0; i<left.length; i++){
        freq[left[i]]++
        freq[right[i]+1]--;
    }
    let res = 0;
    
    for(let i=1; i<10;i++){
        freq[i] = freq[i] + freq[i-1];
        if(freq[i]>freq[res]) res = i;
    }

    return res
}

console.log(maxAppearingElement([1,2,4], [4,5,7]));