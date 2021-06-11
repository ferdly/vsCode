let typeOfObject = {
    "undefined": "undefined",
    "nullObject": "object",
    "emptyObject": "object",
    "boolean": "boolean",
    "number": "number",
    "bigInt": "bigint",
    "string": "string",
    "symbol": "symbol",
    "functionObject": "function",
    "anyOtherObject": "object",
};
//let undefinedVariable = "leave this commented so that it is undefined";
let typeOfUndefined_isUndefined = typeof undefinedVariable;
console.log(typeOfUndefined_isUndefined)

let nullObject = null;
let typeOfNullObject_isObject = typeof nullObject;
console.log(typeOfNullObject_isObject)

let emptyObject = {};
let typeOfEmptyObject_isObject = typeof emptyObject;
console.log(typeOfEmptyObject_isObject)

let booleanValue = 4 === 25 * 0.16;
let typeOfBoolean_isBoolean = typeof booleanValue;
console.log(typeOfBoolean_isBoolean)

let numberValue = 25 * 0.16;
let typeOfNumber_isNumber = typeof numberValue;
console.log(typeOfNumber_isNumber)

//<true for> previouslyMaxSafeInteger
// ø gets weird if you increment it
let bigIntValue = BigInt(9007199254740991);
//<true for>
//<true for> ANY number declared as a Big Int
//let bigIntValue = BigInt(49);
//</true for>
let typeOfBigInt_isBigint = typeof bigIntValue;
console.log(typeOfBigInt_isBigint)

let stringValue = "Chester and Marais";
stringValue += " are my beloved dogs.";
let typeOfString_isString = typeof stringValue;
console.log(typeOfString_isString)

let symbolValue = Symbol("Sym");
// !STILL: what is a symbol?
// console.log(symbolValue);
let typeOfSymbolValue_isSymbol = typeof symbolValue;
console.log(typeOfSymbolValue_isSymbol)

let functionAsVariable = function (int) { return int * int };
numberValueSquared = functionAsVariable(numberValue);
console.log(numberValueSquared);
let typeOfFunctionAsVariable = typeof functionAsVariable;
console.log(typeOfFunctionAsVariable);

let anyOtherObject = { "name": "Marais", "breed": ["German Shepart", "Border Collie"], "dob": "09/06/2010" }
let typeOfAnyOtherObject_isObject = typeof anyOtherObject;
console.log(typeOfAnyOtherObject_isObject)

let dogs = ['Feather', 'Marcy', 'Chester', 'Marais'];
let typeOfArray_isObject = typeof dogs;
console.log(typeOfArray_isObject)
/**
 * @source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
 */

// ø Type	Result
// ø Undefined	"undefined"
// <NOT on MDN Page Above> -- to snuff any confusion immediately
// ø Empty object	"object"
// </NOT on MDN Page Above>
// ø Null	"object" (see below)
// ø Boolean	"boolean"
// ø Number	"number"
// ø BigInt (new in ECMAScript 2020)	"bigint"
// ø String	"string"
// ø Symbol (new in ECMAScript 2015)	"symbol"
// ø Function object (implements [[Call]] in ECMA-262 terms)	"function"
// ø Any other object	"object"
// <NOT on MDN Page Above> -- to be explicit
// ø Array
// </NOT on MDN Page Above>
