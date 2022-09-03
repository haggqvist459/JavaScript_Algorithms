/*
Objects

An object is an unordered collection of key-value types. 
The key must either be a string or symbol data type where the value can be of any data type. 

To retrieve a value, you can use the corresponding key. This can be achieved using the dot notaion or the bracket notation. 
An object is not an iterable. You cannot use it with a for of loop. 



NOTE: LOOK INTO SYMBOL MORE

*/

/*
Object Big-O time complexity 

Insert - O(1)
Remove - O(1)
Access - O(1)
Search - O(n)

Object.keys() - O(n)
Object.values() - O(n)
Object.entries() - O(n)

*/

const obj = {
    name: 'Bruce',
    age: 25,
    "key-three" : true,
    sayMyName: function(){
        console.log(this.name)
    }
}

console.log(obj)    // { name: 'Bruce, age: 25}
// dot notation
console.log(obj.name)   // Bruce
console.log(obj.age)    // 25

// bracket notation 
console.log(obj['name'])    // Bruce
console.log(obj['age'])     // 25
console.log(obj["key-three"])   //true - not possible with dot notation

obj.hobby = "football"
console.log(obj)
console.log(obj.hobby)


//deletion
delete obj.hobby
console.log(obj)

obj.sayMyName()

// Object.keys()
// Object.values()
// Object.entries()

let arr = Object.entries(obj)
console.log("Object.entries(obj)")
console.log(arr)
console.log("        ")

arr = Object.keys(obj)
console.log("Object.keys(obj)")
console.log(arr)
console.log("        ")

arr = Object.values(obj)
console.log("Object.values(obj)")
console.log(arr)
console.log("        ")