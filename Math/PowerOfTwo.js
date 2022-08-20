/* 
Power of Two
An integer is a power of two if there exists an integer 'x' such that 'n' === 2x

isPowerOfTwo(1) = true (2^0)
isPowerOfTwo(2) = true (2^1)
isPowerOfTwo(5) = false


*/

/*
Pseudocode for power of two
n=8
8/2 = 4 (remainder 0)
4/2 = 2 (remainder 0)
2/2 = 1 (remainder 0)

if the remainder != 0 in any step
    return false (as n is not a power of two)

if the remainder = 0 and n = 1 eventually, n is a power of two. 

*/

// Give a positive integer 'n', determine if the number is a power of 2 or not
function isPowerOfTwo(n){

    if (n < 1) {
        return false
    }
    while(n>1){
        if(n % 2 != 0){
            return false
        }
        n = n/2
    }

    return true
}
// Big-O = O(log(n))

console.log(isPowerOfTwo(1)) // true
console.log(isPowerOfTwo(2)) // true
console.log(isPowerOfTwo(5)) // false




function isPowerOfTwoBitWise(n){
    if (n < 1){
        return false
    }
    return (n & (n-1)) === 0
}
// Big-O = O(1)

/*
Bitwise Power of Two
In binary, a number that is a power of two, except for 1, ends with zero. 
1 -> 1
2 -> 10
3 -> 100
4 -> 1000

1 - 0001    2 - 0010    3 - 0100    4 - 1000
0 - 0000    1 - 0001    2 - 0010    3 - 0100
--------    --------    --------    --------
0 - 0000    0 - 0000    0 - 0000    0 - 0000

*/