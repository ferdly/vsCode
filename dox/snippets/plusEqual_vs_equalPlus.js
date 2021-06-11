let showhideIdArray = ["info.emailThis.email", "info.emailThis.tag", "info.emailThis.primary", "info.phoneThis.phone", "info.phoneThis.tag", "info.phoneThis.primary", "info.addressThis.tag", "info.addressThis.address.streetAddress.name", "info.addressThis.address.streetAddress.number", "info.addressThis.address.streetAddress.apt", "info.addressThis.address.addressLine2", "info.addressThis.address.city", "info.addressThis.address.subdivision", "info.addressThis.address.postalCode", "info.addressThis.address.country", "info.addressThis.address.location.latitude", "info.addressThis.address.location.longitude", "info.addressThis.address.formatted"];

let firstString = "11";
let firstNumber = 11;
let secondString = "7";
let secondNumber = 7;
let thirdString = "49";
let thirdNumber = 49;
let typeofFirst = typeof firstString;
let caseIfEquals = 8;
switch (caseIfEquals) {

    case 1:
        firstNumber += secondNumber;
        firstNumber += thirdNumber;
        console.log('firstNumber += secondNumber: ');
        console.log(firstNumber);
        typeofFirst = typeof firstNumber;
        console.log(typeofFirst);
        break;

    case 2:
        firstNumber += secondString;
        firstNumber += thirdString;
        console.log('firstNumber += secondString: ');
        console.log(firstNumber);
        typeofFirst = typeof firstNumber;
        console.log(typeofFirst);
        break;

    case 3:
        firstString += secondNumber;
        firstString += thirdNumber;
        console.log('firstString += secondNumber: ');
        console.log(firstString);
        typeofFirst = typeof firstString;
        console.log(typeofFirst);
        break;

    case 4:
        firstString += secondString;
        firstString += thirdString;
        console.log('firstString += secondString: ');
        console.log(firstString);
        typeofFirst = typeof firstString;
        console.log(typeofFirst);
        break;

    case 5:
        firstNumber = + secondNumber;
        firstNumber = + thirdNumber;
        console.log('firstNumber =+ secondNumber: ');
        console.log(firstNumber);
        typeofFirst = typeof firstNumber;
        console.log(typeofFirst);
        break;

    case 6:
        firstNumber = + secondString;
        firstNumber = + thirdString;
        console.log('firstNumber =+ secondString: ');
        typeofFirst = typeof firstNumber;
        console.log(typeofFirst);
        console.log(firstNumber);
        break;

    case 7:
        firstString = + secondNumber;
        firstString = + thirdNumber;
        console.log('firstString =+ secondNumber: ');
        console.log(firstString);
        typeofFirst = typeof firstString;
        console.log(typeofFirst);
        break;

    case 8:
        firstString = + secondString;
        firstString = + thirdString;
        console.log('firstString =+ secondString: ');
        console.log(typeofFirst);
        break;

    default:
        console.log('No Output');
        break;
}

