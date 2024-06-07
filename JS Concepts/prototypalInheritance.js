let arr = ["Vikas", "Nishan"]
let obj = {
    name: "Vikas Garg",
    city: "Panipat",
    getIntro: function() {
        console.log(`${this.name} from ${this.city}`);
    }
}

let obj2 = {
    name: "Nishan Kapoor"
}

// Everything down the prototype chain is an object

console.log(arr.__proto__); 
/*  ||
    ||
    ||  */
console.log(Array.prototype);

console.log()


console.log(obj.__proto__);
/*  ||
    ||
    ||  */
console.log(Object.prototype)

//<<< NEVER DO THIS >>>
obj2.__proto__ = obj // obj2 inheriting properties from obj

console.log(obj2.name); // Nishan Kapoor
console.log(obj2.city); // Panipat => as obj is its prototype now
console.log(obj2.getIntro()); // Nishan Kapoor from Panipat


const details = {
    firstName: "Vikas",
    lastName: "Garg"
}

for(let key in details){
    console.log(key);
}