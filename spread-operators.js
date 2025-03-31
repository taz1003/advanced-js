// No spread operator
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4); // This will also change arr1
console.log("second array:", arr2); // [1, 2, 3, 4]
console.log("first array", arr1);   // [1, 2, 3, 4]

// Copying an array
let arr3 = [4, 5, 6];
let arr4 = [...arr3]; // This will not change arr3
arr4.push(7); // This will not change arr3
console.log("third array:", arr3);  // [4, 5, 6]
console.log("fourth array", arr4);  // [4, 5, 6, 7]

// Copying an object
let obj1 = { a: 1, b: 2, c: 3 };
let obj2 = { ...obj1, d: 4 }; // This will not change obj1
let obj3 = { ...obj1, b: 5 }; // This will not change obj1

obj1.b = 6; //This will change obj1

console.log("first object:", obj1);
console.log("second obbject:", obj2);   // { a: 1, b: 2, c: 3, d: 4 }
console.log("third object:", obj3);  // { a: 1, b: 5, c: 3 }

// Copying only part of an array/object
let arr5 = [...arr1, { ...obj1 }, ...arr3.slice(5, 6), 'x', 'y', 'z']; // This will not change arr1 or obj1
console.log("fifth array:", arr5); // [1, 2, 3, { a: 1, b: 6, c: 3 }, 5, 6, 'x', 'y', 'z']
