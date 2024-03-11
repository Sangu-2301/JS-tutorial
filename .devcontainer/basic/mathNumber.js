let MyNumber =123.8976
// console.log(MyNumber.toFixed(3));
console.log(MyNumber.toPrecision(3));

let otherNumber = new Number(10000000)
console.log(otherNumber.toLocaleString('en-IN'));
console.log(otherNumber.toString().length);
console.log(otherNumber.toLocaleString());


// ***********operation*****88
// console.log(Math.ceil(2.5));
// console.log(Math.min(2,6,3));
// console.log(Math.max(5,3,8));
// console.log(Math.abs(-5));
// console.log(Math.floor(2.9));
// console.log(Math.round(2.2));
let min = 10
let max= 20
// console.log(Math.floor(Math.random()*10+1))
// important
console.log(Math.floor(Math.random()*(max-min+1)+min))


