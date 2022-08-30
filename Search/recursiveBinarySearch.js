/*
Recursive binary search: 


Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array. 
Return -1 if the target element is not found. 


arr = [-5, 2, 4, 6, 10]
t = 10 should return 4. 
t = 6 should return 3. 
t = 20 should return -1. 


*/

/*

Pseudocode 
If the array is empty, return -1 as the element cannot be found. - base case 

If the array has elements, find the middle element in the array. 
If the target is equal to the middle element, return the middle element index. 

If the target is less than the middle element, binary search the first half of the array. 
If the target is higher than the middle element, binary search the second half of the array. 

Continue until element is found. 

*/

function recursiveBinarySearch(arr, target){

    return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftIndex, rightIndex){
    
    if(leftIndex > rightIndex){
        return -1
    }

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2 )
    if(target === arr[middleIndex]){
        return arr[middleIndex]
    }

    if(target < arr[middleIndex]){
        //search left half of array
        return search(arr, target, leftIndex, middleIndex - 1);
    } else {
        //search right half of array
        return search(arr, target, middleIndex + 1, rightIndex)
    }
}
//Big-O = O(logn)

console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10)) // 4
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6)) // 3
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20)) // -1