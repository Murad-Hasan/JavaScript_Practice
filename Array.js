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
