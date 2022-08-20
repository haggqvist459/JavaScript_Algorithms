/*

Worst case complexity of an algorithm is represented using Big-O notation
Big-O describes the complexity of an algorithm using algebraic terms

The two important characteristics: 

    - expressed in terms of input 
    - focuses on bigger picture without getting caught up in the minute details 

*/

// Time complexity
// O(n) - linear
function summation(n) {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum
}
/******************/

// Time complexity
// O(1) - constant 
function summation(n) {
    return (n * (n + 1)) / 2;
}
/******************/

// Time complexity
// O(n^2) - quadratic
function summation(n) {
    for (i = 1; i = n; i++){
        for(j = 1; j = n; j++){
            //some code 
        }
    }
}
/******************/


// Time complexity
// O(n^3) - cubic
function summation(n) {
    for (i = 1; i = n; i++){
        for(j = 1; j = n; j++){
            for(k = 1; k = n; k++){
                //some code 
            }
        }
    }
}
/******************/


/* 

If input size reduces by half every iteration 
Time complexity
O(logn) - logarithmic

*/


/*

Space complexity 
O(1) - Constant
If algorithm does not need extra memory or if memory needed does not depend on input size
For example a sorting algorithm which sort within the array without utilising additional arrays

O(n) - Linear 
Extra space needed grows as input size grows 

O(log(n)) - Logarithmic
The extra space needed grows but not at the same rate as input 

*/

/******************/
/******************/
/******************/


/*
Objects 
Big-O

Insert - O(1)
Remove - O(1)
Access - O(1)
Search - O(n)

Object.keys() - O()n
Object.values() - O(n)
Object.entries() - O(n)

*/

const person = {
    firstName: 'Bruce',
    lastName: 'Wayne'
}


/*
Arrays
Big-O

Insert & remove at end - O(1)
Insert & remove at beginning - O(n) (index has to be reset for all the remaining elements in the array)
Access element - O(1)
Search element - O(n)

push / pop - O(1)
shift / unshift / concat / splice / splice - O(n)
forEach / map / filter / reduce - O(n) (if callback function also contains forEach then O(n^2))

*/

const odd = [1, 3, 5, 7, 9]