/**
 * Program to create a memoized function of summation of 2 numbers
 *  - for eg: sum(2,3) = 6 , and sum(3,2) = 6 should not recalculate this.
 */

const memoizedSum = () => {
  const cache = {};
  return function sum(numbers) {
    const key = [...numbers].sort().toString();
    if (cache[key]) {
      console.log("Using cached result for:", numbers.toString());
      return cache[key];
    }

    const result = numbers.reduce((acc, current) => acc + current, 0);
    cache[key] = result;

    return result;
  };
};

// Create a memoized sum function
const memoSum = memoizedSum();

// Example usage:
const numbersArray1 = [1, 2, 3, 4, 5];
const result1 = memoSum(numbersArray1);
console.log(result1); // Output: 15

// The second call with the same input will use the cached result
const numbersArray2 = [1, 2, 4, 3, 5];
const result2 = memoSum(numbersArray2);
console.log(result2); // Output: 15 (Using cached result for: 1, 2, 4, 3, 5)

// The third call with the same input will use the cached result
const numbersArray3 = [1, 3, 2, 5, 4];
const result3 = memoSum(numbersArray3);
console.log(result3);
