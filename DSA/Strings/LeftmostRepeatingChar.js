function LeftmostRepeatingChar(str) {
    let res = -1;
    let freqArr = new Array(256).fill(false);
    for(let i= str.length - 1; i >= 0; i--) {
        if(freqArr[str[i].charCodeAt(0)]) res = i
        else freqArr[str[i].charCodeAt(0)] = true
    }
    return res === -1 ? res : {index: res, element: str[res]};
}

console.log(LeftmostRepeatingChar("abcdefg"))