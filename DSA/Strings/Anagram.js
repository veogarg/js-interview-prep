function Anagram(str1, str2) {
    if(str1.length !== str2.length) return false
    const freqArr = new Array(256).fill(0);
    for(let i = 0; i < str1.length; i++){
        ++freqArr[str1[i].charCodeAt(0)]
        --freqArr[str2[i].charCodeAt(0)]
    }
    for(let i  of freqArr){
        if(i !== 0) return false
    }
    return true
}

console.log(Anagram('silent', 'listen'))
console.log(Anagram('dam', 'mad'))