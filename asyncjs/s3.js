// Handle te promise using .then and .catch 
const myPromise = new Promise((resolve, reject) => {

    let success = true

    setTimeout(() => {
        if(success){
            resolve("Promised resolved after 2 seconds!")
        } else {
            reject("Something went wrong")
        }
    }, 2000)
})

myPromise
    .then((message) => {
        console.log("Success", message)
    })
    .catch((error) => {
        console.log("Error", error)
    })
