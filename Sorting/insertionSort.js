/*
Insertion sort

Given an array of integers, sort the array.

arr=[-6, 20, 8, -2, 4]
insertionSort(arr) => should return [-6, -2, 4, 8, 20]

Split the array into a sorted and an unsorted part.
Assume that the first element is already sorted and remaining elements are unsorted. 
Select an unsorted element and compare with all elements in the sorted part. 
If the elements in the sorted part is smaller than the selected element, proceed to the next element in the unsorted part. 
Else, shift larger elements in the sorted part towards the right. 

Insert the selected element at the right index. 

Repeat until all the unsorted elements are placed in the right order. 

*/

function insertionSort(arr){

    for(let i = 1; i < arr.length; i++){
        let numberToInsert = arr[i];
        // let j = index one step to the left of the numberToInsert in the array that is being sorted 
        let j = i-1
        // to sort descending, arr[j] < numberToInsert
        while(j >= 0 && arr[j] > numberToInsert){
            arr[j+1] = arr[j]
            j = j-1
        }
        arr[j+1] = numberToInsert;
    }
}
// Big-O = O(n^2)

const arr = [-6, 20, 8, -2, 4]
insertionSort(arr)
console.log(arr) // [-6, -2, 4, 8, 20]