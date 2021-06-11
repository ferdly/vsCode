var txt = "";
var txtForSquaredumbersArray = ["is the loneliest number", "also 2 + 2", "'no' in German", "hex 10 as dec", "a baker's two dozen", "inches in a yeard"];
txtForSquaredumbersArray.forEach(myFunction);
// document.getElementById("demo").innerHTML = txt;

function myFunction(value, index, array) {
  txt = txt + (index + 1) + ' squared is '+ Math.pow(index + 1,2) + ' [' + value + ']\n'; 
}
console.log(txt)
