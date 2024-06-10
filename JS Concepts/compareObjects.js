// To compare 2 objects
const obj1 = { a: 1, b: { c: 2, d: { e: 3, f: [2, 1] } } };

const obj2 = { a: 1, b: { c: 2, d: { e: 3, f: [1, 2] } } };

function compareObject(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      // Need to check before checking typeof object as typeof array is object only
      return (
        obj1[key].sort((a, b) => a - b).toString() ===
        obj2[key].sort((a, b) => a - b).toString()
      );
    } else if (typeof obj1[key] === "object" && typeof obj2[key] === "object") {
      return compareObject(obj1[key], obj2[key]);
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

console.log(compareObject(obj1, obj2));
