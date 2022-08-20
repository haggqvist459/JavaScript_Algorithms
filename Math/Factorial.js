/*
Factorial of a number
In mathematics, the factorial of a non-negative integer 'n', denoted n!, is the product of all positive integers less than or equal to 'n'
Factorial of 0 is 1. 


*/

// Given an integer 'n', find the factorial of that number
function factorial(n){
    let result = 1;
    
    for(i = 2; i<=n; i++){
        result = result * i;
    }
    return result;
}
// Big-O = O(n)


console.log(factorial(0)) // 1
console.log(factorial(1)) // 1
console.log(factorial(5)) // 120
