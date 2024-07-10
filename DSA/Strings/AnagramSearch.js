/**
 * Given a text and a pattern, the task is to find if there is anagram of pattern present in text. The video talks about two solutions to solve the problem.
 * 
 * Example 1:
 * I/p: txt: "geeksforgeeks"
 *      pat: "frog"
 * 
 * O/p: true 
 * 
 * Explaination: as frog and forg from the txt are permutations of each other hence true
 * 
 * 
 * Example 2:
 * I/p: txt: "geeksforgeeks"
 *      pat: "rseek"
 * 
 * O/p: false 
 * 
 * Explaination: although all the chars of pat are present in txt but those are not continuous hence false
 */
const CHAR = 256

const areSame = (arr1, arr2) => {
    for(let i = 0 ; i<CHAR; i++) {
        if(arr1[i]!==arr2[i]) return false
    }
    return true
}

const AnagramSearch = (txt, pat) => {
    if(txt.length < pat.length) return false;

    let Ctxt = Array(CHAR).fill(0);
    let Cpat = Array(CHAR).fill(0);

    for(let i = 0 ; i<pat.length; i++) {
        Ctxt[txt.charCodeAt(i)]++;
        Cpat[pat.charCodeAt(i)]++;
    }

    for(let i=pat.length; i<txt.length;i++){
        if(areSame(Ctxt, Cpat)) return true;

        Ctxt[txt.charCodeAt(i)]++
        Ctxt[txt.charCodeAt(i-pat.length)]--

    }

    return false

}

console.log(AnagramSearch("geeksforgeeks", "frog"))
console.log(AnagramSearch("geeksforgeeks", "rseek"))