// Create async function that return user data

const userData = {
    id: 1034,
    name: "Bilal Hassan Koreja",
    email: "bilal@gmail.com",
    city: "DG Khan"
}
async function getUserData(){
    return userData
}

getUserData().then((user) => {
    console.log(user)
})