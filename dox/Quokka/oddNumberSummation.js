let taskFunction = function oddSummation(number) {
    number = Math.floor(Math.abs(number)) * 2 - 1;
    let summation = 0;
    while (number > 0) {
        summation += number;
        number = number - 2;
    }
    return summation;
}
let sevenSquared = taskFunction(7.95);
console.log(sevenSquared)
// let examplePromise = new Promise( taskFunction );
// examplePromise.then(callbackSuccess, callbackFailure);

/**
 * ø Example Notes:
 * ø using function naming 'as if' a variable (the cool kids are doing it...)
 * ø oddSummation(number): aka, square the number (as integer)
 * ø ø doesn't validate for number
 */