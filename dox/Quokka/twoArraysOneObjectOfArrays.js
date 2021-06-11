var firstArrayByValue = [
    -999,
    1,
    2,
    3,
    5,
    7,
    9,
    0,
    0,
    0
];
var secondArrayByValue = [
    -999,
    1,
    1,
    1,
    0,
    1,
    0,
    1,
    0,
    1
];
var firstArray = ['Marcy', 'Chester', 'Marais'];
var secondArray = ['Evanston','Cloquet','Bemidji'];
// To combine two arrays into an array of objects, use map() from JavaScript.

// Example
// var firstArray = ['John', 'David', 'Bob'];
// var secondArray = ['Mike','Sam','Carol'];
var arrayOfObjectDirect = firstArray.map(function (value, index){
   return [value, secondArray[index]]
});
var arrayOfObjectByValue = firstArrayByValue.map(function (value, index){
   return [value, secondArrayByValue[value]]
});
console.log("First Array Direct=");
console.log(firstArray);
console.log("Second Array Direct=");
console.log(secondArray);
console.log("Mix Of array object Direct=");
console.log(arrayOfObjectDirect);

console.log("First Array byValue=");
console.log(firstArrayByValue);
console.log("Second Array byValue=");
console.log(secondArrayByValue);
console.log("Mix Of array object byValue=");
console.log(arrayOfObjectByValue);