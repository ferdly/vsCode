//ErrorChecking

let errorArray = [false, true, true , true];
let overloadedErrorArray =[true,true,false, true];
let anyErrorWhatsoever = false;
for (let index = 0; index < errorArray.length; index++) {
    let errorThis = errorArray[index];
    console.log(errorThis);
    let overloadedThis = overloadedErrorArray[index];
    console.log(overloadedThis)
    let finalErrorThis = errorThis && !overloadedThis ? true : false;
    console.log(finalErrorThis)
    anyErrorWhatsoever = finalErrorThis ? true : anyErrorWhatsoever;
    console.log(anyErrorWhatsoever)
}
console.log(anyErrorWhatsoever);