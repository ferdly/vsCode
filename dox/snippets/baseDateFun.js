//dateFun.js

let now = new Date();
let then = new Date("Jan 1 1970 00:00:01 GMT");
// console.log(now);
let thenAgain = then[Symbol.toPrimitive]('number')
console.log(then);
console.log(thenAgain);