// const arrValue = ['My', 'name', 'is', 'Jack'];

// console.log(arrValue);   // ["My", "name", "is", "Jack"]
// console.log(...arrValue); // My name is Jack

// const arr1 = ['one', 'two'];
// const arr2 = [...arr1, 'three', 'four', 'five'];

// console.log(arr2); 
// console.log(...arr2); 


// let myFunction = function(...args) {
//     console.log(args);
// }

// myFunction(3); // [3]
// myFunction(4, 5, 6, 7); // [4, 5, 6]

function sum(x, y ,z, w) {
    console.log(x + y + z + w);
}

const num1 = [1, 3, 4, 5, 6, 7];

sum(...num1); // 8
