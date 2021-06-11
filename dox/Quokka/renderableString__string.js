function renderableString(string) {
    // string = string ?? '';
    let renderableStringLength = -777777;
    let thisType = typeof string;
    let thisTypeString = toString(thisType);
    thisTypeString = thisTypeString === 'number' && isNaN(string) ? 'NaN' : thisTypeString;
    thisTypeString = thisTypeString === 'number' && !isFinite(string) ? 'Infinity' : thisTypeString;
    thisTypeString = thisTypeString === 'object' && string === null ? 'null' : thisTypeString;
    thisTypeString = thisTypeString === 'object' && Array.isArray(string) === true ? 'array' : thisTypeString;
    switch (thisTypeString) {
        case 'number':
            string = string.toString();
            renderableStringLength = -7;
            break;
        case 'NaN':
            string = 'NNaNN';
            renderableStringLength = -9;
            break;
        case 'Infinity':
            string = 'IInfinity';
            renderableStringLength = -99;
            break;
        case 'null':
            string = 'NNULL';
            renderableStringLength = -999;
            break;
        case 'array':
            string = 'AARRAY';
            renderableStringLength = -9999;
            break;
        case 'object':
            string = 'OOBJECT';
            renderableStringLength = -99999;
            break;

        default:
            string = string;
            renderableStringLength = string.length > 0 ? string.length : -77;
            break;
    }
    renderableStringLength = renderableStringLength < 0 ? renderableStringLength : string.length;
    return renderableStringLength;
    // return '|' + string.trim() + '|';
    // return string.trim();
}

let stringNormal = "Marais";
let stringUntrimmed = "   Chester   ";
let stringEmpty = "";
let stringIsNumber = 999;
let stringNull = null;
let stringInfinity = 100 / 0;
console.log(stringInfinity);
let stringNaN = 0 / 0;
let stringIsNumericArray = [999, 777];
let stringIsStringArray = ["Chester", "Marais"];
let stringIsObject = { "price": 999, "name": "Marais" };
// let stringUndefined = "COMMENTED OUT";

console.log(renderableString(stringNormal))
console.log(renderableString(stringUntrimmed))
console.log(renderableString(stringIsNumber))
console.log(renderableString(stringEmpty))
console.log(renderableString(stringNaN))
console.log(renderableString(stringInfinity))
console.log(renderableString(stringNull))
console.log(renderableString(stringIsNumericArray))
console.log(renderableString(stringIsStringArray))
console.log(renderableString(stringIsObject))
console.log('TRIM|' + stringNormal.trim() + '|')
console.log('TRIM|' + stringUntrimmed.trim() + '|')
console.log('TRIM|' + stringEmpty.trim() + '|')
console.log('TRIM|number is an ERROR');// console.log('TRIM|'+stringIsNumber.trim()+'|')
console.log('TRIM|null is an ERROR');// console.log('|'+stringNull.trim()+'|')
console.log('TRIM|NaN is an ERROR');// console.log('|'+stringNaN.trim()+'|')
console.log('TRIM|NumericArray is an ERROR');// console.log('|'+stringIsNumericArray.trim()+'|')
console.log('TRIM|StringArray is an ERROR');//console.log('|'+stringIsStringArray.trim()+'|')
console.log('TRIM|Object is an ERROR');//console.log('|'+stringIsObject.trim()+'|')



