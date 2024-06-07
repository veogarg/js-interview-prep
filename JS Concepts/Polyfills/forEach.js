const arr = [1,2,3,4,5]

arr.forEach((el) => console.log(el) )
console.log("===============");
Array.prototype.myForEach = function(cb){
     for(let i = 0; i< this.length; i++) {
        cb(this[i], i, this);
     }
}

arr.myForEach((el) => console.log(el))