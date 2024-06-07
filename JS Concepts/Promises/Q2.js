/**
 * Implement traffic signal which starts with red, then after 30 seconds, it should turn to yellow and after 1 min to green. After 2 mins, it'll turn it red again. The process should keep on repeating indefinitely.
 */

// Approach 1
const trafficLights = (counter = 0) => {
    if(counter === 0) {
        console.log("Red");
        trafficLights(counter+1)
    }else if(counter === 1) {
        setTimeout(() => {
            console.log("yellow");
            trafficLights(counter+1)
        }, 3000);
    }if(counter === 2) {
        setTimeout(() => {
            console.log("green");
            setTimeout(() => {
                trafficLights(0)
            }, 12000)
        }, 6000);
    }
}

// Approach 2

let first=0
const trafficSignals = (light = "red") => {
    setTimeout(() => {
        console.log(light);
        trafficSignals(getLight(light))
    }, first++ === 0 ? 0 :getInterval(light))
}

const getLight = (light) => {
    if(light === "red") return "yellow";
    if(light === "yellow") return "green";
    if(light === "green") return "red";
    return "red"
}
const getInterval = (light) => {
    if(light === "red") return 3000;
    if(light === "yellow") return 6000;
    if(light === "green") return 12000;
    return 3000;
}



trafficLights();