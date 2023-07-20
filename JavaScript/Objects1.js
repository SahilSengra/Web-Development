// const fruits = ["Banana", "Orange", "Apple", 12];
// console.log(fruits);

// const person1 = {firstName:"Atulya", lastName:"Kaushik", age:28, sunSign:"Gemini"};
// const person2 = {firstName:"Manish", lastName:"Agarwal", age:29, sunSign:"Leo"};

// const dummy_array = [person1, person2];
// console.log(dummy_array);

// const person = {firstName:"Atulya", lastName:"Kaushik", age:28, sunSign:"Gemini"};
// console.log(person.firstName);
// console.log(person["age"]);



const person =
{
    firstName: "Atulya",
    lastName: "Kaushik",
    age: 28,
    sunSign: "Gemini",

    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

var name = person.fullName();
console.log(name);

for (const item in person) {
    // console.log(`${item}: ${person[item]}`);

    console.log(item + " : " + person[item]);
}