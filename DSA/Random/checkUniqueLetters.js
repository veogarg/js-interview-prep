/**
 * 
 * @param {Number of Words} N 
 * @param {Array of words for marking} words 
 */

/**
 * NOTE: This solution is incomplete. 
 */

function wordRating(N, words) {
    let res = words[0]
    let maxRating = 0
    const rating = Array(words.length).fill(0)
    for(let i = 0; i< words.length; i++){
        const obj = {};
        const wordArr = words[i].split("");
        for(let j = 0; j<wordArr.length;j++) {
            if(!obj[wordArr[j]]) {
                obj[wordArr[j]] = j;
                rating[i] += 1
            }else{
                rating[i] -= 1
            }
        }

        if(maxRating < rating[i]) {
            maxRating = rating[i]
            res = words[i]
        }
    }
    console.log(rating);
    return res;
}

console.log(wordRating(5, ["bird", "sorry", "hello", "board", "close"])) // Correct Answer
console.log(wordRating(5, ["elephant", "rhinoceros", "qualalumpur", "ostocalcium", "MacbookAir"])) // Incorrect Answer

