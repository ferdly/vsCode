/**
 * <Instantiate Examples by SWITCH>
 * ø default is Firt Example (way too complex for the first WTFMDN)
 * ø then 1, 2 and 3 are almost too easy
 * ø see ToDo for the rest which should happend, especially the array sort
 * ø ↪ but I doubt I will ever care about German or Swedish
 * ø separate SWITCH blocks for Instantiating, Calling and Returning the
 * ø ↪ documented Result String may seem overkill, but in truth, it is the best
 * ø ↪ mechanism to keep things clean
 */
let referenceStr = 'réservé'; // with accents, lowercase
let compareString = 'RESERVE'; // no accents, uppercase
let localesParam = 'en';
let optionsParam = { sensitivity: 'base' };
let whichTest = -777;
// whichTest = 1;
// whichTest = 2;
// whichTest = 3;
switch (whichTest) {
    case 1:
        referenceStr = 'a';
        compareString = 'c';
        localesParam = null;
        optionsParam = null;

        console.log('Testing: [MDN example 1] The letter "a" is before "c"' + "\n" +
            "referenceStr = 'a';" + "\n" +
            "compareString = 'c';" + "\n" +
            "localesParam = null" + "\n" +
            "optionsParam = null" + "\n" +
            "yielding a negative value")
        break;
    case 2:
        referenceStr = 'check';
        compareString = 'against';
        localesParam = null;
        optionsParam = null;

        console.log('Testing: [MDN example 2] Alphabetically the word "check" comes after "against"' + "\n" +
            "referenceStr = 'check';" + "\n" +
            "compareString = 'against';" + "\n" +
            "localesParam = null" + "\n" +
            "optionsParam = null" + "\n" +
            "yielding a positive value")
        break;
    case 3:
        referenceStr = 'a';
        compareString = 'a';
        localesParam = null;
        optionsParam = null;

        console.log('Testing: [MDN example 3] "a" and "a" are equivalent' + "\n" +
            "referenceStr = 'a';" + "\n" +
            "compareString = 'a';" + "\n" +
            "localesParam = null" + "\n" +
            "optionsParam = null" + "\n" +
            "yielding a neutral value of zero")
        break;

    default:
        console.log('Testing: [original MDN example]' + "\n" +
            "'referenceStr = réservé'; // with accents, lowercase" + "\n" +
            "compareString = 'RESERVE'; // no accents, uppercase" + "\n" +
            "localesParam = 'en'" + "\n" +
            "optionsParam = { sensitivity: 'base' }")
        break;
}
// </Instantiate Examples by SWITCH>

//<Call by Additional Parameters SWITCH>
let whichSwitch = '';
whichSwitch += localesParam === null ? 'F' : 'T';
whichSwitch += optionsParam === null ? 'F' : 'T';
let localeCompareResult = -999;
switch (whichSwitch) {
    case 'TT':
        localeCompareResult = referenceStr.localeCompare(compareString, localesParam, optionsParam);
        break;
    case 'TF':
        localeCompareResult = referenceStr.localeCompare(compareString, localesParam);
        break;
    case 'FT':
        localeCompareResult = -777;
        break;
    case 'FF':
        localeCompareResult = referenceStr.localeCompare(compareString);
        break;

    default:
        break;
}
console.log(localeCompareResult);
//</Call by Additional Parameters SWITCH>

//<Output SWITCH>
switch (true) {
    // localeCompareResultString = "A negative number if referenceStr occurs before compareString; positive if the referenceStr occurs after compareString; 0 if they are equivalent."
    case localeCompareResult < 0:
        localeCompareResultString = "A negative number if referenceStr[" + referenceStr + "] occurs before compareString[" + compareString + "]";
        break;
    case localeCompareResult > 0:
        localeCompareResultString = "A positive if the referenceStr[" + referenceStr + "] occurs after compareString[" + compareString + "]";
        break;
    case localeCompareResult === 0:
        localeCompareResultString = "Zero if the referenceStr[" + referenceStr + "] and the compareString[" + compareString + "] are equivalent";
        break;

    default:
        localeCompareResultString = "This should be impossible, but with 'NaN' and 'undefined' better have this as 'Cow-Catcher'";
        break;
}
console.log(localeCompareResultString);
//</Output SWITCH>