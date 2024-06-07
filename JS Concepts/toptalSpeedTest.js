return parseFloat(x, 10)

return x.filter((el, ind) => ind%2===0)

const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']
for (let i = 0; i< x.length; i++) {
  if(vowels.indexOf(x[i]) === -1){
    return false
  }
}
return true

let newWord = []
for (let i=0; i<x.length; i++) {
    if (x[i] == x[i].toLowerCase()) {
        newWord[i] = x[i].toUpperCase();
    }
    else {
        newWord[i] = x[i].toLowerCase();
    }
}

return newWord;

