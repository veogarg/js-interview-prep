const Stack = require("./stackClass")

const openingBrackets = ['[', '{', '(']
const closingBrackets = [']', '}', ')']

function isMatching(a, b){
    return (a===openingBrackets[0] && b===closingBrackets[0]) || (a===openingBrackets[1] && b===closingBrackets[1]) || (a===openingBrackets[2] && b===closingBrackets[2])
}

function BalancedParanthesis(string) {

    if(string === "") {
        throw new Error("Empty String")
    }
    
    if(string.length&1) { // checking if the length of string is even or odd. if odd return false
        return false
    }

    if(closingBrackets.includes(string[0])) return false // if string starting with closing bracket

    const stack  = new Stack(string.length)
    
    for(let i of string) {
        if(openingBrackets.includes(i)) stack.push(i);
        else if(!isMatching(stack.pop(), i)) return false
    }

    return stack.isEmpty()

}

console.log(BalancedParanthesis("{()}())"));