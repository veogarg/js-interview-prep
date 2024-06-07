/* var reverseWords = function(s) {
    const str = s.split(" ").reverse();
    let low = 0, high = str.length;
    while(low<high){
        if(!str[low]){
            low++
            continue;
        }
        if(!str[high]){
            high--
            continue;
        }
        const temp = str[low];
        str[low++] = str[high]
        str[high--]= temp
    }
    return str.join(" ")
}; */


var reverseWords = function(s) {
    return s.split(" ").reverse().filter(Boolean).join(" ");
    return s.split(/[ ]+/).reverse().join(' ').trim();
};

console.log(reverseWords("the sky is blue"))