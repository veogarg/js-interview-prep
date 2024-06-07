function deepCopy(val) {
  if (["string", "number", "boolean"].includes(typeof val)) return val;

  if (Array.isArray(val)) return val.map((el) => deepCopy(el));

  return Object.keys(val).reduce((acc, key) => {
    acc[key] = deepCopy(val[key]);
    return acc;
  }, {})
}

const arr1 = [1,2,[3,4]]
const arr2 = deepCopy(arr1);
arr2.push(5)
console.log(arr1);
console.log(arr2)

const obj1 = {
    a:1,
    b: {
        c:2,
        d: {
            e: 3,
            f: 4
        }
    }
}

obj2 = deepCopy(obj1)
obj2.f = {g:4}
console.log(obj1);
console.log(obj2)