/*
Cartesian product

In mathematics, specifically set theory, the Cartesian product of two sets A and B, denoted AxB,
is the set if all ordered pairs (a, b) where a is in A and b is in B

const A = [1, 2]
const B = [3, 4]
AxB = [[1,3], [1,4], [2, 3], [2, 4]]

const C = [1, 2]
const D = [3, 4, 5]
CxD = [[1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5]]


Pseudocode 
Traverse each array and pair each element in the first array with each element in the second array.

*/

function cartesianProduct(arrA, arrB){
   
    // for each element in arrA, create a new array with each element being an array, containing the elements of arrA and ArrB

    let cartesianArr = [];

    for (let i = 0; i < arrA.length; i++){
        for(let j = 0; j < arrB.length; j++){
            cartesianArr.push([arrA[i], arrB[j]])
        }
    }

    return cartesianArr;

}
//Big-O = O(mn)

const A = [1, 2]
const B = [3, 4, 5]

console.log('AxB = ' + cartesianProduct(A, B)) // AxB = [[1,3], [1,4], [2, 3], [2, 4]]

