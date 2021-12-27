const arr = [22, 45, 67, 89, 90, 12, 34, 56, 78];

//show arr elements
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
}

//sum of all elements
let sum = 0;

for (let i = 0; i < arr.length; i++) {
     sum += arr[i];
}
console.log("sum" , sum);

//avarage of all elements

console.log('avarage',  Math.round(sum / arr.length));

//largest Number

let largestNumber = arr[0];

for (let i = 1; i < arr.length; i++) {
     if (largestNumber < arr[i]) {
        largestNumber = arr[i]
     }
}

console.log("largestNumber" , largestNumber)

//Smallest Number

let smallestNumber = arr [0];

for (let i = 0; i < arr.length; i++) {
    if (smallestNumber > arr[i]) {
        smallestNumber = arr[i]
    }
}

console.log('smallestNumber' , smallestNumber)

//2nd largest Number
const secondLargest= arr.sort(function(a, b){return b - a})[1];
console.log('secondLargest' , secondLargest);

//2nd smallest Number
const secondSmallest= arr.sort(function(a, b){return a - b})[1];
console.log('secondSmallest' , secondSmallest);