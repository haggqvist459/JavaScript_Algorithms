/*
Set

A set is a data structure that can hold a collection of values. The values however must be unique 
A set can contain a mix of different data types. You can store strings, booleans, numbers, and even objects in the same set. 
Sets are dynamically sized. You don't have to declare the size of a set before creating it. 
Sets do not maintain an insertion order. 
Sets are iterables. They can be used with a for-of loop


Set vs Array 
Arrays can contain duplicate values whereas sets can not. 
Insertion order is maintain in arrays but it is not the case with sets. 
Searching and deleting an element in the set is faster compared to arrays.

*/

const set = new Set([1, 2, 3])

for (const item of set){
    console.log(item)
}


set.add(4)
set.add(4) // will be ignored

for (const item of set){
    console.log(item)
}

set.delete(3)

for (const item of set){
    console.log(item)
}

console.log(set.has(4)) // true
console.log("size: " + set.size) // 3
set.clear()