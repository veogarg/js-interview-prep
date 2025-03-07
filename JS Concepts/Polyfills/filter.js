const arr = [1,2,3,4,5]

const arrOdd = arr.filter((el) => el&1===1) // will give odd numbers

console.log(arrOdd);

console.log("====================");

Array.prototype.myFilter = function(cb) {
    const filteredArr = []
    for (let index = 0; index < this.length; index++) {
        if(cb(this[index])){ // if the callback function returns true, then the element is pushed to the filteredArr
            filteredArr.push(this[index])
        } 
    }
    return filteredArr
}

const arrEven = arr.myFilter((el) => el&1===0) // will give even numbers
console.log(arrEven);
