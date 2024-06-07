// function charFrequency(str) {
//     const freqObj = {};
//     for(let i = 0; i<str.length;i++){
//         if(freqObj[str[i]]){
//             freqObj[str[i]]++
//         }else {
//             freqObj[str[i]] = 1;
//         }
//     }
//     Object.entries(freqObj).map(([key, value], index) => {
//         console.log(`${key}: ${value}`); // prints in unsorted manner
//     })
// }

function charFrequency(str) {
    const countArr = new Array(256).fill(0);
    for(let i = 0; i<str.length;i++){
        countArr[str.charCodeAt(i)-'a'.charCodeAt(0)]++;
    }
    countArr.forEach((val, key) => {
        if(val) console.log(`${String.fromCharCode('a'.charCodeAt(0)+key)}: ${val}`); // prints in sorted manner
    })
    
}

charFrequency('geeksforgeeks')
