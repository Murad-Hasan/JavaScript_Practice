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
console.log("res7", res7)
console.log("res5", res5);

//indexOf
const res8 = str.indexOf("World");
const res9 = str.indexOf("murad");
console.log("res9", res9) //noting found
console.log("res8", res8);


