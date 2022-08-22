/*
Fibonacci sequence using recursion

Problem: 
Give a number 'n', find the Nth element of the Fibonacci sequence. 
In mathematics, the fibonacci sequence is a sequence in which each number is the sum of the two preceding ones. 
The first two numbers in the sequence are 0 and 1. (0, 1, 1, 2, 3, 5, 8 ...)


recursiveFibonacci(0) = 0
recursiveFibonacci(1) = 1
recursiveFibonacci(6) = 8

if F represents a function to calculate the Fibonacci number, then
Fn = Fn-1 + Fn-2

F0 = 0
F1 = 1


Note: 
For finding the Nth element in Fibonacci, iterative is far more optimal than recursive.
    - So looking for an element in an array, iterative is more optimal than recursive. 

*/


function recursiveFibonacci(n) {

    if(n<2){
        return n
    }
    console.log("recursiveFibonacci n: " + n)
    console.log("recursiveFibonacci math operation, n-1: " + (n-1) + ' and n-2: ' + (n-2))
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)

}
// Big-O = O(2^n) - recursive

console.log(recursiveFibonacci(0)) // 0
console.log(recursiveFibonacci(1)) // 1
console.log(recursiveFibonacci(5)) // 8