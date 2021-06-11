let simpleString = "Marais";
// console.log(simpleString);
let simpleArray = simpleString.split("");
// console.log(simpleArray);
let reversedArray = simpleArray.reverse();
// console.log(reversedArray);
reversedString = reversedArray.toString().replace(/,/g,'');
console.log(reversedString)
anotherSimpleString = "Chester";
anotherReversedString = anotherSimpleString.split("").reverse().toString().replace(/,/g,'');
console.log(anotherReversedString);

//<written as a Function>
function reverseThisString(aStringParameter){
    return aStringParameter.split("").reverse().toString().replace(/,/g,'');
}
//</written as a Function>
let algonquin = reverseThisString("Was named after the mountain in the Adirondacks");
console.log(algonquin);