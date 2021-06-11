/**
 * javascript equivalent of arrayMerge
 * extremely robust by examples below
 */
let arrayOne = ['Feather'];
let arrayTwo = ['Marcy'];
let descr = 'just two simple string elements';
arrayOne = ['Feather','Marcy'];
arrayTwo = [];
arrayOne = [];
arrayTwo = ['Feather','Marcy'];
arrayOne = [];
arrayTwo = [];
arrayOne = ['Feather', 8];
arrayTwo = ['Marcy',29];
arrayOne = ['Feather', {"myAge":[8,19],"dogAge":11}];
arrayTwo = [['Marcy',29]];
// arrayOne = ['Feather','Marcy'];
// arrayTwo = [['Algonquin','cat'],'Chester'];

console.warn('arrayOne: ');
console.warn(arrayOne);
console.warn('arrayTwo: ');
console.warn(arrayTwo);
Array.prototype.push.apply(arrayOne,arrayTwo);


console.warn('<---------- RESULT: ---------->');
console.warn('finalMergedArray (as arrayOne): ');
console.warn(arrayOne);
console.warn(descr);
