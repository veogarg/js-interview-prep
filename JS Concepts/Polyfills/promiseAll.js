const promise1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("Hello")
    }, 1000)
})

const promise2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("Hi")
    }, 100)
})

Promise.all([promise1, promise2]).then(console.log).catch(console.error)

Promise.customAll = function(promisesArr) {
    const results = [];
    let counter = 0
    return new Promise((resolve, reject) => {
        if(!Array.isArray(promisesArr)){
            reject(results)
        }
        promisesArr.forEach((promise, index) => {
            promise.then(res => {
                counter++;
                results[index] = res
                if(counter === promisesArr.length) resolve(results)
            }).catch (error => reject(error))
        })

    })
}

Promise.customAll([promise1, promise2]).then(console.log).catch(console.error)