const number = 1521.412

console.log(number);
console.log(number.toString()); // 152.412
console.log(number.toFixed()); // => 152
console.log(number.valueOf());
console.log(number.toLocaleString("en-IN"));
// console.log(number);
// console.log(number);
console.log(number.toPrecision(4));


// -----------------    Math functions ------------------------------

console.log(Math.abs(-55)); // => 55
console.log(Math.round(55.223)); // => 55
console.log(Math.sqrt(36)); // 6
console.log(Math.pow(5, 2)); // 25
console.log(Math.random());
console.log(Math.floor((Math.random()) * 10) +1);

const minValue = 10
const maxValue = 30

console.log((Math.round(Math.random()* (maxValue - minValue +1)  ) +minValue));





