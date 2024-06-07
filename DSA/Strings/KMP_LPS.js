const fillLps = (str, lps=[]) => {
    let n = str.length, len = 0, i = 1;
    lps[0] = 0
    while(i < n) {
        if(str[i] === str[len]) {
            len++;
            lps[i] = len;
            i++;
        }else if(len === 0) {
            lps[i] = 0; i++;
        } else {
            len = lps[len-1]
        }
    }
    console.log(lps.toString());
}

fillLps("ababcabab", new Array(9).fill(0));