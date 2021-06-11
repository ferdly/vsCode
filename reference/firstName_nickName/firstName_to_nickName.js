let sourceArray = [
    [["Aaron", "Aron"], ["Ron", "Ronnie", "Ronny"]]
];

let fullFirstNameArrayArray = [];
let nickFirstNameArrayArray = [];
sourceArray.forEach(element => {
    // console.log(element);
    fullFirstNameArrayArray.push(element[0]);
    nickFirstNameArrayArray.push(element[1]);
});

// console.warn('fullFirstNameArrayArray: ');
// console.warn(fullFirstNameArrayArray);
// console.warn('nickFirstNameArrayArray: ');
// console.warn(nickFirstNameArrayArray);

let nickToFullArrayObject = {};
let fullToNickArrayObject = {};
let nickObjectIndex = 0;
let fullObjectIndex = 0;
for (let nickArrayIndex = 0; nickArrayIndex < nickFirstNameArrayArray.length; nickArrayIndex++) {
    const nickToFullArray = nickFirstNameArrayArray[nickArrayIndex];
    const fullToNickArray = fullFirstNameArrayArray[nickArrayIndex];
    for (let nickIndex = 0; nickIndex < nickToFullArray.length; nickIndex++) {
        const nick = nickToFullArray[nickIndex];
        if (!Array.isArray(nickToFullArrayObject.nick)) {
            nickToFullArrayObject[nick] = [];
        }
        fullToNickArray.forEach(element => {
            // console.log(element);
            nickToFullArrayObject[nick].push(element);
        });

    }

}

console.warn('nickToFullArrayObject: ');
console.warn(nickToFullArrayObject);




