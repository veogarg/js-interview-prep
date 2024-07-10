/**!SECTION
 * 
 * Given an integer array nums, move all 0’s to the end of the array while maintaining the relative order of non zero elements.
 * Input: nums = [0,12,0,1,3]
 * Output: [12,1,3,0,0]
 */

// [0,12,0,1,3]

// index = 0, i=0
// index=0, i=1 , 12

// arr[index] = arr[i] // [12, 0, 0, 1, 3]
// index = 1, i=1  // [12, 0, 0, 1, 3]
// index=1, i=2
// index = 1, i=3
// arr[index] = arr[i] // [12, 1, 0, 0, 3]

function moveZeroesToEnd(arr) {
    if(!Array.isArray(arr)) {
        return arr;
    }

    let index = 0;
    let count = 0
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== 0) {
            if(i!==index) {
                [arr[i], arr[index]] = [arr[index], arr[i]] // Swapping
                count++;
            }
            index++
        }
    }
    // return count; 
    return arr
}

console.log(moveZeroesToEnd([0,12,0,1,3]))
console.log(moveZeroesToEnd([0,12,0,1,3, 4, 5, 1]))
console.log(moveZeroesToEnd([0, 0, 0, 0,  2, 1]))
console.log(moveZeroesToEnd([4, 2, 4, 0, 0, 0, 1, 0]))





