/**
 * We are given an array of distinct integers, and our task is to find the closest (positive wise) greater element on left of every element. 
 * If there is no greater element on left, then we print -1. 
 * 
 * 
Examples: 

Input : arr[] = {10, 4, 2, 20, 40, 12, 30}
Output :         -1, 10, 4, -1, -1, 40, 40

Input : arr[] = {10, 20, 30, 40}
Output :        -1, -1, -1, -1

Input : arr[] = {40, 30, 20, 10}
Output :        -1, 40, 30, 20
Expected time complexity : O(n)

 */

const Stack = require("./stackClass");

function PreviousGreater(arr) {
    if(!arr.length) return arr;
    const resultArr = [-1];

    const stack = new Stack(arr.length)

    for(let i = 1; i<arr.length; i++) {
        while(!stack.isEmpty() && arr[i] >= stack.peek() ){
            stack.pop()
        }
        resultArr.push(stack.isEmpty()? -1 : stack.peek())
        stack.push(arr[i])
    }
    console.log(resultArr.join(", "))
}

PreviousGreater([20,30,10,5,15])
PreviousGreater([5,15,10,8,6,12,9,18])

function NextGreater(arr) {
    if(!arr.length) return arr;
    const resultArr = [-1];

    const stack = new Stack(arr.length)
    stack.push(arr[arr.length-1])
    for(let i = arr.length-2; i>=0; i--) {
        while(!stack.isEmpty() && arr[i] >= stack.peek() ){
            stack.pop()
        }
        resultArr.push(stack.isEmpty()? -1 : stack.peek())
        stack.push(arr[i])
    }
    console.log(resultArr.reverse().join(", "))
}

NextGreater([20,30,10,5,15])
NextGreater([5,15,10,8,6,12,9,18])