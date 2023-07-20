// const fruits = ["Banana", "Orange", "Apple", 12];
// console.log(fruits);

const person1 = {firstName:"Atulya", lastName:"Kaushik", age:28, sunSign:"Gemini"};
const person2 = {firstName:"Manish", lastName:"Agarwal", age:29, sunSign:"Leo"};

const dummy_array = [person1, person2];
// console.log(dummy_array);


for (let x in dummy_array) {
  // console.log(dummy_array[x]);

    for (const item in dummy_array[x]) {
        console.log(item + " : " + dummy_array[x][item]);
    }  
}


// const numbers = [45, 4, 9, 16, 25];
// let txt = "";
// let sum = 0;
// for (let x in numbers) {
//   sum += numbers[x];
// }
// console.log(sum);


// for (const item in person) {
//   // console.log(`${item}: ${person[item]}`);
    
//   console.log(item + " : " + person[item]);
// }