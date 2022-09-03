/* 
Arrays 

An array is a data structure that can hold a collection of values
Arrays can contain a mix of different data types. 
Strings, booleans, numbers and objects can be stored in the same array. 

Arrays are resizeasble. 
JavaScript arrays are zero-indexed and the insertion order is maintained. 

Arrays are iterables. 

*/

const arr = [1, 2, 3, 'string'];
console.log(arr[0]) // 1

// add at the end 
arr.push(4)

// iterate the array through each 'item'
for(const item of arr){
    console.log(item) 
}

// add at beginning
arr.unshift(0)

// remove at the end 
arr.pop()

//remove at the beginning
arr.shift()


/*
Big-O time complexity for Arrays

    Insert/remove from the end - O(1)
    Insert/remove from the beginning O(n)
    Accessing - O(1)
    Search - O(n)

    push / pop - O(1)
    shift / unshift / concat / slice / splice - O(n)
    forEach / map / filter / reduce - O(n) 

*/



/*
arr.map()

creates a new array from calling a function for each element in the array
calls the function once for each element in the array
does not execute the function for empty elements
does not change the original array

e.g:

function change(n){
   return n * 2
}

const newArr = arr.map(change)
newArr will contain an array with each previous element multiplied by two

*/

/*
arr.filter()

creates a new array filled with elements that pass a test provided by a function
does not execute the function for empty elements.
does not change the original array.

e.g:

function check(n) {
    return >= 5
}

const newArr = arr.filter(check)
newArr will create a new array containing all numbers from arr that are higher or equal to 5. 


*/

/*
arr.reduce()

executes a reducer function for array element.
returns a single value: the function's accumulated result.
does not execute the function for empty array elements.
method does not change the original array.

e.g:
function total(total, num){
    return total + num
}

const total = arr.reduce(total, 0)
total contains the sum of all numbers in the array


*/

/*
concat 
concatenates (joins) two or more arrays.
method returns a new array, containing the joined arrays.
does not change the existing arrays.


*/

/*
slice
returns selected elements in an array, as a new array.
selects from a given start, up to a (not inclusive) given end.
does not change the original array.

const newArr = arr.slice(0, 2)
newArr contains the first two values in the array. 

const newArr = arr.slice(-2, -1)
newArr contains the second to last value in the array

*/

/*
splice 
adds and/or removes array elements.
overwrites the original array.

arr.splice(2, 2)
removes two items starting that the second element. 


*/