kittyKatObject = {"name": "Test"};
function doSomethingWithDateDefaultNow (kittyKatObject, dateString = "") {
    // let afterArrayParam = kittyKatObject.timezone.afterArray;
    // console.log(afterArrayParam);
    let timestamp = Date.parse(dateString);
    console.log(timestamp)
    
    if (isNaN(timestamp) == false) {
      var dateParamFinal = new Date(timestamp);
    } else {
        var dateParamFinal = new Date();
    }
    kittyKatObject.date = dateParamFinal;
    return dateParamFinal;
}

// let dateValidStringMDYParam = "12/23/2017";
let dateValidStringMDYParam = "7/4/1776";
// let dateValidStringYrMonDyParam = "1960 Mar 11";
let dateValidStringYrMonDyParam = "1926 July 23";
let dateValidStringMonDyYrParam = "Apr 3 1952";
// let dateInvalidStringParam = "13/45/2017";//approx if good:2/14/2018
let dateInvalidStringParam = "Mar 34 1952";//approx if good:2/14/2018
let dateVeryInvalidStringParam = "mosquito";
let dateEmptyStringParam = "";

// let resultValidStringMDYParam = doSomethingWithDateDefaultNow (kittyKatObject, dateValidStringMDYParam);
// console.log(resultValidStringMDYParam);
let resultValidStringYrMonDyParam = doSomethingWithDateDefaultNow (kittyKatObject, dateValidStringYrMonDyParam);
console.log(resultValidStringYrMonDyParam);
// let resultValidStringMonDyYrParam = doSomethingWithDateDefaultNow (kittyKatObject, dateValidStringMonDyYrParam);
// console.log(resultValidStringMonDyYrParam);
// let resultInvalidStringParam = doSomethingWithDateDefaultNow (kittyKatObject, dateInvalidStringParam);
// console.log(resultInvalidStringParam);
// let resultVeryInvalidStringParam = doSomethingWithDateDefaultNow (kittyKatObject, dateVeryInvalidStringParam);
// console.log(resultVeryInvalidStringParam);
// let resultEmptyStringParam = doSomethingWithDateDefaultNow (kittyKatObject, dateEmptyStringParam);
// console.log(resultEmptyStringParam);
// let resultDefaultParam = doSomethingWithDateDefaultNow (kittyKatObject);
// console.log(resultDefaultParam);

console.log(kittyKatObject);
