// // Create a student object with name, age, skills and email and add city property to the student object and also use destructing to extract the name and email from the student object.
const student = {
    name: "Bilal",
    age: 25, 
    email: "bilal@example.com",
    skills: ["Full Stack Development", "AI Automation", "Software Development"],
    city: "Karachi"
}
const { name, email } = student
console.log(name, email)

// Create an array of 5 employee objects and filter employees with salary above 50000.
const employees = [
    { name: "Ali", salary: 40000},
    { name: "Bilal", salary: 60000},
    { name: "Hassan", salary: 70000},
    { name: "Aleena", salary: 90000},
    { name: "Hamza", salary: 100000},
]
const filteredEmployees = employees.filter((employee) => employee.salary > 50000)
console.log(filteredEmployees)

// Use spread opertor to update a user's age without modifying the original object
const student = {
    name: "Bilal Hassan",
    age: 23,
    email: "bilal@gmail.com",
    city: "DG Khan"
}
const updateUser = { ...student, age: 25 }
console.log(updateUser)