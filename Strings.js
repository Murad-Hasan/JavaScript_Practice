//string Methods
const str = "Hello World";
const res = str.charAt(10);
console.log("res", res);

//charCodeAt
const res1 = str.charCodeAt(10);
console.log("res1", res1);

//concat
const res2 = str.concat(" Hello ", "Hi ");
console.log("res2", res2);

const str3 = " murad";
console.log(str3.concat(" hello"));

const res3 = str.concat(str3);
console.log("res3", res3);

//endsWith
const res4 = str.endsWith("World");
console.log("res4", res4);

//includes

const res5 = str.includes("murad");
const res6 = str.includes("World", 6);
const res7 = str.includes("World", 7);
console.log(res6);
console.log("res7", res7);
console.log("res5", res5);

//indexOf
const res8 = str.indexOf("World");
const res9 = str.indexOf("murad");
console.log("res9", res9); //noting found
console.log("res8", res8);

//lastIndexOf
const res10 = str.lastIndexOf("World"); // it searches from the end but it's position count from the start
console.log("res10", res10);

//match
const string = "metaverse world";
const res11 = string.match("world");
console.log(res11);

const string1 = "the rain in spin stays mainly in the plain";
const res12 = string1.match(/ain/g);
console.log(res12);

//repeat
const res13 = str.repeat(3);
console.log("res13", res13);

// replace
