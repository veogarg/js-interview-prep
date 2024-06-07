/* function LeftmostNonRepeatingElement(str) {
    let res = -1;
    let freqArr = new Array(256).fill(false);
    for(let i= str.length - 1; i >= 0; i--) {
        const ascii = str[i].charCodeAt(0)
        if(freqArr[ascii]===true) freqArr[ascii] = i
        else freqArr[ascii] = true
    }

    for(let i=0;i<256;i++){
        if(freqArr[i]===true){
            res = String.fromCharCode(i);
            break;
        }
    }
    return res;
} */

function LeftmostNonRepeatingElement(str) {
    let nonRepeating = -1;
    let repeating = -1;
    let freqArr = new Array(256).fill(false);

    for(let i= str.length - 1; i >= 0; i--) {
        const ascii = str[i].charCodeAt(0)
        if(freqArr[ascii]===true) {repeating=`${str[i]} at index ${i}`}
        else {
            freqArr[ascii] = true
            nonRepeating = `${str[i]} at index ${i}`
        }
    }
    return {nonRepeating, repeating};
}

console.log(LeftmostNonRepeatingElement('abbcbd')); // { nonRepeating: 'a at index 0', repeating: 'b at index 1' }
console.log(LeftmostNonRepeatingElement('abbcbda')); // { nonRepeating: 'c at index 3', repeating: 'a at index 0' }
console.log(LeftmostNonRepeatingElement('geeksforgeeks')); // { nonRepeating: 'f at index 5', repeating: 'g at index 0' }
console.log(LeftmostNonRepeatingElement('vikasgarg')); // { nonRepeating: 'v at index 0', repeating: 'a at index 3' }
console.log(LeftmostNonRepeatingElement('vikas gargvikas')); // { nonRepeating: '  at index 5', repeating: 'v at index 0' }
console.log(LeftmostNonRepeatingElement('')); // { nonRepeating: -1, repeating: -1 }
