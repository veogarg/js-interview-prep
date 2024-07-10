/**
 *  Find the majority element in the array. 
 * A majority element in an array A[] of size n is an element that appears more than n/2 times 
 * (and hence there is at most one such element). 
 */

/**

Input : {3, 3, 4, 2, 4, 4, 2, 4, 4}
Output : 4
Explanation: The frequency of 4 is 5 which is greater than the half of the size of the array size. 

Input : {3, 3, 4, 2, 4, 4, 2, 4}
Output : No Majority Element
Explanation: There is no element whose frequency is greater than the half of the size of the array size.
 
*/

/*NOTE - Majority Element Using Moore’s Voting Algorithm:
This is a two-step process:
    - The first step gives the element that may be the majority element in the array. If there is a majority element in an array, then this step will definitely return majority element, otherwise, it will return candidate for majority element.
    - Check if the element obtained from the above step is the majority element. This step is necessary as there might be no majority element.  
 */

function majorityElement(arr) {
    let indexOfMajorityElement = 0, count=1
    // Finding the candidate
    for(let i=1; i<arr.length; i++) {
        if(arr[indexOfMajorityElement] === arr[i]) {
            count++;
        }else {
            count--;
        }

        if(count === 0) {
            indexOfMajorityElement = i;
            count = 1;  
        }
    }

    count = 0;
    // Checking whether candidate is actually a majority element
    for(let i = 0; i< arr.length; i++){
        if(arr[indexOfMajorityElement] === arr[i]) count++;
    }

    if(count <= arr.length/2) return -1;
    
    console.log(`Majority Element is ${arr[indexOfMajorityElement]}`)
    return indexOfMajorityElement

}

console.log(`Index of Majority element is ${majorityElement([3, 3, 3, 2, 4, 4, 3, 3, 4])}`)