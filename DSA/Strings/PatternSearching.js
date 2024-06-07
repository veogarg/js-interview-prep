/**
 * Naive Solution but optimised
 */

function patternSearching(text, pattern){
    const n = text.length, m = pattern.length;
    for(let i=0; i<=n-m;){
        let j=0
        while(j<m){
            if(text[i+j]!==pattern[j]){
                break;
            }
            j++;
        }
        if(j===m) console.log(i);
        if(j===0) i++;
        else i = i+j;
    }
}

patternSearching("Vikas Garg", "as")
patternSearching("GeeksForGeeks", "eks")