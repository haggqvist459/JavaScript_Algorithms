/*
Quick sort

Given an array of integers, sort the array.

arr=[-6, 20, 8, -2, 4]
quickSort(arr) => should return [-6, -2, 4, 8, 20]

Identify the pivot element in the array
    - Pick first element as pivot
    - Pick last element as pivot
    - Pick random element as pivot
    - Pick median element as pivot 

Put everything that's smaller than the pivot into a 'left' array and everything that's greater than the pivot into a 'right' array.
Repeat the process for the individual 'left' and 'right' arrays until you have an array of length 1 which is sorted by definition. 
Repeatedly concatenate the left array, pivot and right array until one sorted array remains. 

*/


function quickSort(arr){

    if(arr.length < 2){
        return arr
    }

    let pivot = arr[arr.length -1]
    let left = [];
    let right = [];

    for(let i = 0; i < arr.length -1; i++){

        if(arr[i]< pivot){
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]

}
//Big-O worst case: O(n^2) - for arrays already sorted. 
//Big-O average case: O(nlogn)


const arr = [-6, 20, 8, -2, 4]
console.log(quickSort(arr)) // [-6, -2, 4, 8, 20]


/* 
Without creating extra arrays

function quickSort(arr, left = 0, right = arr.length -1){
    if(left < right){
        const pivot = partition(arr, left, right)
        quickSort(arr, left, pivot -1)
        quickSort(arr, pivot + 1, right)
    }
    return arr
}

function partition(arr, left right){
    const pivot = arr[right]
    let i = left
    for(let j = left; j < right; j++){
        if(arr[j] < pivot){
            swap(arr, i, j)
            i++
        }
    }
    swap(arr, i, right)
    return 1
}

function swap(arr, i, j){
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
*/