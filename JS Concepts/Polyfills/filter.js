const arr = [1,2,3,4,5]

const arrOdd = arr.filter((el) => el&1===1)

console.log(arrOdd);

console.log("====================");

Array.prototype.myFilter = function(cb) {
    const filteredArr = []
    for (let index = 0; index < this.length; index++) {
        if(cb(this[index])){
            filteredArr.push(this[index])
        } 
    }
    return filteredArr
}

const arrEven = arr.myFilter((el) => el&1===1)
console.log(arrEven);
