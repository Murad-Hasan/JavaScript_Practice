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
  if (cities[i].population >= 100  && !(cities[i].temperature >= 60)) {
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

let biggerCities = cities.filter(city => city.population >= 100 && city.temperature >= 60);

// console.log(biggerCities)


cities.filter(city => city.population < 100).sort((a, b) => a.population - b.population).map(city => console.log(city.name + ":" + city.population));

console.log("hello world");

let fruits = []
fruits[9999] = 5;
fruits.age = 9;

console.log(fruits);

//spread operator

let a = [1, 2, 3];
let b = [0, ...a, 4];
console.log(b); // [0, 1, 2, 3, 4]

let digits = [..."123456789ABCDEFGH"]
console.log(digits); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G']

// creat a new array from an array without reapted values
let letters = [..."Hello World"]
let notRepeatLetters = [...new Set(letters)]

console.log(letters); // ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']
console.log(notRepeatLetters); // ['H', 'e', 'l', 'o', 'W', 'r', 'd']

let numbers = [1, 2, 3, 4, 5, 6,6, 7, 7, 8, 9, 10];
let notRepeadNumbers = [...new Set(numbers)];
console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(notRepeadNumbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//array of 
Array.of(1, 2, 3); // [1, 2, 3]
Array.of(1); // [1]
Array.of(); // []

