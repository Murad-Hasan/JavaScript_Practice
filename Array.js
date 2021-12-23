// array filter

let cities = [
    {name: 'Los Angeles', temperature: 60.0, population: 100},
    {name: 'Atlanta', temperature: 52.0, population: 120},
    {name: 'Detroit', temperature: 48.0, population: 60},
    {name: 'New York', temperature: 80.0, population: 50},
    {name: 'Miami', temperature: 73.0, population: 150},
    {name: 'Boston', temperature: 59.0, population: 35},
    {name: 'Chicago', temperature: 59.0, population: 20}
]

let bigCities = [];
let smallCities = [];

for (let i = 0; i < cities.length; i++) {
    if (cities[i].population >= 100) {
        bigCities.push(cities[i]);
    }else{
        smallCities.push(cities[i]);
    }
}

console.log(bigCities);
console.log(smallCities);
