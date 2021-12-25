// array filter

let cities = [
  { name: "Los Angeles", temperature: 60.0, population: 100 },
  { name: "Atlanta", temperature: 52.0, population: 120 },
  { name: "Detroit", temperature: 48.0, population: 60 },
  { name: "New York", temperature: 80.0, population: 50 },
  { name: "Miami", temperature: 73.0, population: 150 },
  { name: "Boston", temperature: 59.0, population: 35 },
  { name: "Chicago", temperature: 59.0, population: 20 },
];

//By for loop

let bigCities = [];
let lowTamper = [];
let smallCities = [];

for (let i = 0; i < cities.length; i++) {
  if (cities[i].population >= 100 && cities[i].temperature >= 60) {
    bigCities.push(cities[i]);
  }
  if (cities[i].population >= 100 && !(cities[i].temperature >= 60)) {
    lowTamper.push(cities[i]);
  } else {
    smallCities.push(cities[i]);
  }
}

// console.log(bigCities);
// console.log(lowTamper);
// console.log(smallCities);

//by filter method

// let bigCities = cities.filter(function (e) {
//     return e.population > 3000000;
// });

//short hand ==>

let biggerCities = cities.filter(
  (city) => city.population >= 100 && city.temperature >= 60
);

// console.log(biggerCities)

cities
  .filter((city) => city.population < 100)
  .sort((a, b) => a.population - b.population)
  .map((city) => console.log(city.name + ":" + city.population));

console.log("hello world");

let fruits = [];
fruits[9999] = 5;
fruits.age = 9;

console.log(fruits);

//spread operator

let a1 = [1, 2, 3];
let b1 = [0, ...a1, 4];
console.log(b1); // [0, 1, 2, 3, 4]

let digits = [..."123456789ABCDEFGH"];
console.log(digits); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G']

// creat a new array from an array without reapted values
let letters = [..."Hello World"]; // ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]
let notRepeatLetters = [...new Set(letters)]; // ["H", "e", "l", "o", "W", "r", "d"]

console.log(letters); // ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']
console.log(notRepeatLetters); // ['H', 'e', 'l', 'o', 'W', 'r', 'd']

let numbers = [1, 2, 3, 4, 5, 6, 6, 7, 7, 8, 9, 10];
let notRepeatedNumbers = [...new Set(numbers)];
console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(notRepeatedNumbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//array of
Array.of(1, 2, 3); // [1, 2, 3]
Array.of(1); // [1]
Array.of(); // []

//array from
let array = Array.from("Hello World");
console.log(array); // ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]

// Reading and writing of a array

let a = ["world"];
let value = a[0]; // "world"
a[1] = 3.14;
let i = 2;
a[i] = 3;
a[i + 1] = "hellol";
a[a[i]] = a[0]; // --> bujhi nai asole ki hoise akhane
console.log(a[a[i]]);
console.log(a); // ["world", 3.14, 3, "hellol", "world"]

//Iterating over an array

let letters1 = [..."Hello World"];
let string = "";
for (let letter of letters1) {
  string = string + letter; //string += letter;
}
console.log(letters1, string); // "Hello World"

//if we want to use a for/of loop for an array and need to know the index of each array element

// let everyother = "";
// for (let [index, letter] of letters1.entries()){
//   if(index % 2 === 0) everyother += letter;
// }
// console.log(everyother);

//vowels finder
let vowels = "";
// for (let i = 0; i < letters1.length; i++){
//   let letter = letters1[i]
//   if(/[aeiou]/.test(letter)) vowels += letter;
// }

//or

for (const letter of letters1) {
  if (/[aeiou]/.test(letter)) vowels += letter;
}
console.log(vowels);

//array methods

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
data.forEach((value) => (sum += value));

console.log("sum", sum, "Array", data);

data.forEach((value, index, array) => {
  array[index] = value * 2;
});

console.log(data) // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

data.forEach(function (v , i , a) {
  a[i] = v * 3; 
})

console.log(data); // [6, 12, 18, 24, 30, 36, 42, 48, 54, 60]

//Find & FindIndex

// let data1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let found = data1.find((value) => value % 3 === 0);
// console.log(found); // 6
// let found = data1.find((value) => value % 12 === 0);
// console.log(found); // undefined (not found)
// let fountIndex = data1.findIndex((value) => value % 3 === 0);
// console.log(fountIndex); // 2
// let foundIndex = data1.findIndex((value) => value % 11 === 0);
// console.log(foundIndex);   // -1 (not found)

//reduce
const arrayReducerText = [15, 16, 17, 18, 19];

function reducer(previous, current, index, array) {
  const returns = previous + current;
  console.log(`previous: ${previous}, current: ${current}, index: ${index}, returns: ${returns}`);
  return returns;
}

arrayReducerText.reduce(reducer);

// arrayReducerText.reduce((x,y) => x + y);    

console.log(arrayReducerText.reduce((x,y) => x + y, 0)); //85

[1,[2,3]].flat(); // [1,2,3] 

const flatTest = [1, [2,[3,4, [9]],5]]
console.log(flatTest.flat(Infinity));   // [1, 2, 3, 4, 5, 9]

//flatMap
let phrases = ["hello world", "goodbye world"];
let phrasesWords = phrases.flatMap((phrase) => phrase.split(" "));  
console.log(phrasesWords); // ["hello", "world", "goodbye", "world"]