// Create a promise that resolves after 2 seconds
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolve after 2 seconds")
    }, 3000)
})

myPromise.then((message) => {
    console.log(message)
})