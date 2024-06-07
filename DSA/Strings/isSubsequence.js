const isSubsequence = (str1, str2) => {
    if(!str2) return true
    let i=0, j=0;
    for(; i<str1.length && j<str2.length; i++){
        if(str1[i] === str2[j]){
            j++;
        }
    }
    if(j === str2.length) return true;

    return false;
}

console.log(isSubsequence('ABCDEF', 'ABE'));