// Count digits
let num = 4444
let count = 0
while(num != 0){
    num = Math.floor(num / 10)
    count++
}
console.log(count)