// function canVote(age){
//     return (age >= 18)
// }

// age = canVote(20)
// console.log(age)


// odd or even function
// function evenorodd(num){
//     if (num % 2 ==0){
//         return ('this is an even number')
//     }
//     else {
//         return ('this is an odd number')
//     }
// }

// banerjee = evenorodd(15)
// console.log(banerjee)

// loops

// Write a function called sum that finds the sum from 1 to a number
function sum (num){
    ans = (num * (num+1))/2
    return (ans)
}

a = sum(10)
console.log(a)
// 1+2+3+4+5+6+7+8+9+10 = 55 

// another way of doing this 
function sum2(num){
    counter = 0
    for (i = 0; i<=num; i++){
        counter += i
    }
    return counter
}

let sum23 = sum2(10)
console.log (sum23) // the other way of doing this

