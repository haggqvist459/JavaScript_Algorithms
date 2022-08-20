/*
Fibonacci sequence 
In mathematics, the Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones


*/

// Given a integer 'n', find the first 'n' elements of the Fibonacci sequence
function fibonacci(n){
    const fib = [0, 1]
    for (i = 2; i<n; i++){
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib;
}
// Big-O = O(n)

console.log(fibonacci(2)) // [0,1]
console.log(fibonacci(3)) // [0,1,1]
console.log(fibonacci(7)) // [0,1,1,2,3,5,8]