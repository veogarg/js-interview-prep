const obj1 = { a: 1, b: { c: 2, d: { e: 3, f: [2, 1] } } };
const obj2 = { a: 1, b: { c: 2, d: { e: 3, f: [1, 2] } } };

function compareObject(obj1, obj2) {
  // Check if inputs are null or undefined
  if (obj1 === null || obj2 === null || 
      obj1 === undefined || obj2 === undefined) {
    return obj1 === obj2;
  }
  
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  
  // Check if number of keys is different
  if (keys1.length !== keys2.length) return false;
  
  // Ensure all keys from obj1 exist in obj2
  if (!keys1.every(key => key in obj2)) return false;
  
  // Compare each key-value pair
  for (let key of keys1) {
    // Handle arrays specially
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      // Check if arrays have different lengths
      if (obj1[key].length !== obj2[key].length) return false;
      
      // Sort and compare arrays
      const sorted1 = [...obj1[key]].sort((a, b) => a - b);
      const sorted2 = [...obj2[key]].sort((a, b) => a - b);
      
      // Compare each element
      for (let i = 0; i < sorted1.length; i++) {
        if (sorted1[i] !== sorted2[i]) return false;
      }
    } 
    // Handle nested objects
    else if (typeof obj1[key] === "object" && typeof obj2[key] === "object") {
      if (!compareObject(obj1[key], obj2[key])) return false;
    } 
    // Handle primitive values
    else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  
  return true;
}

console.log(compareObject(obj1, obj2)); // Should output true