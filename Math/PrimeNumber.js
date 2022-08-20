/*
Prime Number
A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers

isPrime(5) = true (1*5 or 5*1)
isPrime(4) = false (1*4, 4*1 but also 2*2)


*/

// Give a natural number 'n', determine if the number is prime or not
function isPrime(n){

    if(n<2){
        return false
    }
    // i<n and not i<=n because n is always divisible by n
    for(let i = 2; i<n; i++){
        if (n%i === 0){
            return false 
        }
    }
    return true
}
// Big-O = O(n)

console.log(isPrime(1)) // false
console.log(isPrime(5)) // true
console.log(isPrime(4)) // false

/*

Overkill: 
    Optimised primality test:
    Integers larger than the square root do not need to be checked, because whenever n=a*b,
    one of the two factors 'a' or 'b' is less than or equal to the square root of 'n'

    n=24, a=4 and b=6
    The square root of 24 is 4.89
    4 is less than 4.89
    a is less than or equal to the square root of n
    (same applies for a=2 and b=12, and a=3 and b=8)

    n=35, a=5 and b=7
    Square root of 35 is 5.91
    5 is less than 5.91
    a is less than or equal to the square root of n


    This means we can optimise the loop like this:
    for (let i = 2; i<= Math.sqrt(n); i++)
            Big-O = O(sqrt(n))

*/