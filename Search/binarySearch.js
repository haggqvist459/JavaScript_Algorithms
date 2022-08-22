/*
Binary search:

*note*
A binary search will only work for a sorted array. 
If the array is not sorted, either perform a linear search or sort the array. 

Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array. 
Return -1 if the target element is not found. 

arr = [-5, 2, 4, 6, 10]
t = 10 should return 4. 
t = 6 should return 3. 
t = 20 should return -1. 


*/

/* 
Pseudocode 
If the array is empty, return -1 as the element cannot be found. 
If the array has elements, find the middle element in the array. 
If the target is equal to the middle element, return the middle element index. 

If the target is less than the middle element, binary search the first half of the array. 
If the target is higher than the middle element, binary search the second half of the array. 

Continue until element is found. 

*/


function binarySearch(arr, target){

    let leftIndex = 0;
    let rightIndex = arr.length -1; 

    while(leftIndex <= rightIndex){
        // find the middle of the array. Math.Floor to round down in case the array is an odd number
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        // target will eventually be in the middle of the array. 
        if (target === arr[middleIndex]){
            return middleIndex;
        }
        // since the array is sorted, we know that the values to the left will be lower than the values to the right
        // if the target is less than the middle index, move the right index to the middle
        if(target < arr[middleIndex]){
            rightIndex = middleIndex -1;
        // otherwise the target has to be higher than the middle index, 
        // which means we can move the left index to the middle of the array
        } else {
            leftIndex = middleIndex + 1;
        }
    }
    // can not find the array or array has no values
    // element not found
    return -1;
}
//Big-O = O(logn)

console.log(binarySearch([-5, 2, 4, 6, 10], 10)) // 4
console.log(binarySearch([-5, 2, 4, 6, 10], 6)) // 3
console.log(binarySearch([-5, 2, 4, 6, 10], 20)) // -1
