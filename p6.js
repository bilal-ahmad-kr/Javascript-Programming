// Reverse a integer
let num = 4567
let reversed = 0
while(num != 0){
    let digit = num % 10
    reversed = reversed * 10 + digit
    num = Math.floor(num / 10)
}
console.log(reversed)

// compare original number to reverse number
let originalNum = 4567
if(originalNum === reversed){
    console.log(originalNum + " is a palindrome number")
} else if(originalNum !== reversed){
    console.log(originalNum + " is not a palindrome number")
} else{
    console.log(originalNum + " is neither a palindrome number")
}
console.log("The reversed number is: " + reversed)
