const arr = [1,2,3,4,5]

const add = arr.reduce((total, elem) => total + elem, 0);
console.log({ add });
console.log("================");

//Method 1
Array.prototype.reduceNew = function (callback, initialVal) {
  let total = initialVal;
  for (let i = 0; i < this.length; i++) {
    // total = total!==undefined ? callback.call(this, total, this[i]) : this[index];
    total = total!==undefined ? callback.call(undefined, total, this[i]) : this[index]; //  Both will work
  }
  return total;
};
console.log("================");
//Method 2
Array.prototype.myReduce = function (cb, initialVal) {
  let acc = initialVal;
  for (let index = 0; index < this.length; index++) {
    acc = acc!==undefined ? cb(acc, this[index]) : this[index];
  }
  return acc
};

console.log(arr.myReduce((total, elem) => total + elem, 0));


