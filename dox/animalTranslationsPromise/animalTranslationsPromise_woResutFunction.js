//<the Function containing a Promise>
animalTranslations = function (animal) {
    return new Promise(function (resolve, reject) {
        animal = animal.toLowerCase();
        //! resolve() the single word sound
        switch (animal) {
            case "dog":
                resolve("Woof")
                break;
            case "cat":
                resolve("Meow")
                break;
            case "cow":
                resolve("Moo")
                break;
            case "pig":
                resolve("Oink")
                break;

            default:
                reject("animal not supported")
                break;
        }
    });
};
//</the Function containing a Promise>

//<this object exists outside of the function/promise call>
// ø however, accessing it outside the Promise will be the original declaration
// ø because the 'async magic' does NOT happen in the main block of code since
// ø 'outside' happens first, that is why it will show the declaration state
// ø uncomment the last line [~83] to see this
let returnResultObjectParameter = { 
    "returnResultNumber": -7, 
    "returnResultString": "NNULL", 
    "returnObject": {}, 
    "errorString": "EERROR NNULL" 
};
//</this object exists outside of the function/promise call>

function gatherResult(result, resultObject) {
    // if(typeof result === 'string'){function gatherResult(result, resultObject) {
    if (typeof result === 'string') {
        resultObject.returnResultString = result;
    }
};
function gatherErrorString(error, resultObject) {
    resultObject.errorString = error;
};

let animalArray = ['Dog', 'Cat', 'Cow', 'Pig', 'Sheep'];
let myAnimal = animalArray[Math.floor(Math.random() * animalArray.length)];

let speak = animalTranslations(myAnimal)
    .then(result => {
        returnResultObjectParameter.returnObject.animal = myAnimal;
        returnResultObjectParameter.returnObject.sound = result;
        returnResultObjectParameter.returnObject.sentemce = 'The ' + myAnimal + ' says,"' + result + '."';
        let vowels = ['A', 'E', 'I', 'O', 'U'];
        let soundFirstLetter = result.substr(0, 1);
        console.log(soundFirstLetter)
        let article = vowels.includes(soundFirstLetter) ? 'an' : 'a';
        returnResultObjectParameter.returnObject.article = article;
        returnResultObjectParameter.returnObject.oldMacDonald = [
            'Old MacDonald had a farm',
            'E-I-E-I-O',
            'And on that farm he had a ' + myAnimal,
            'E-I-E-I-O'
            , 'With ' + article + ' ' + result + '-' + result + ' here'
            , 'And ' + article + ' ' + result + '-' + result + ' there'
            , 'Here ' + article + ' ' + result,
            'There ' + article + ' ' + result,
            'Everywhere ' + article + ' ' + result + '-' + result,
            'Old MacDonald had a farm',
            'E-I-E-I-O'
        ];
        console.log(returnResultObjectParameter)
    })
    .catch(error => {
        errorString = '[' + myAnimal + ": " + error + ']';
        gatherErrorString(errorString, returnResultObjectParameter)
        console.log(returnResultObjectParameter);
    });
    // console.log(returnResultObjectParameter)