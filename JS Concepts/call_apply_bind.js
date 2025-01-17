let name = {
    firstName: "Vikas",
    lastname: "Garg",
    city: "New Delhi",
    printName: function(){
        console.log(`${this.firstName} ${this.lastname} from ${this.city}`)
    }
}
name.printName();

let name1 = {
    firstName: "Vikas",
    lastname: "Garg",
}

let name2 = {
    firstName: "Steve",
    lastname: "Jobs",
}

name.printName.call(name2) // this will be pointing to name2

function printName(hometown, country){
    console.log(`${this.firstName} ${this.lastname}, from ${hometown}, ${country}`)
}

// function borrowing
printName.call(name1, "Delhi", "India") // this will be pointing to name2
printName.call(name2, "California", "USA") // First parameter will always point to this and rest can be the parameters to the function

printName.apply(name1, ["Delhi", "INDIA"])

const printMyName = printName.bind(name1, "Delhi", "India"); // gives a copy of the function that can be invoke later, bind with the provided object
console.log(printMyName)
printMyName()

const printMyName2 = printName.bind(name1); // gives a copy of the function that can be invoke later, bind with the provided object
console.log(printMyName2)

printMyName2("Delhi", "India")