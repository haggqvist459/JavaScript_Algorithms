/*
Factorial of a number using recursion

Problem: 
Give an integer 'n', find the factorial of that integer. 

In mathematics, the factorial of a non-negative integer 'n', denoted n!, is the product of all positive integers less than or equal to 'n'
Factorial of 0 is 1. 

factorial(4) = 4*3*2*1 = 24
factorial(5) = 5*4*3*2*1 = 120

*/



function recursiveFactorial(n){

    if(n === 0){
        return 1
    }

    return n * recursiveFactorial(n-1)

}
// Big-O = O(n)

console.log(recursiveFactorial(0)) // = 1
console.log(recursiveFactorial(1)) // = 1
console.log(recursiveFactorial(9999)) // = 120