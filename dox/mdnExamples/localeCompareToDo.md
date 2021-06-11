Using locales
The results provided by localeCompare() vary between languages. In order to get the sort order of the language used in the user interface of your application, make sure to specify that language (and possibly some fallback languages) using the locales argument:

console.log('ä'.localeCompare('z', 'de')); // a negative value: in German, ä sorts before z
console.log('ä'.localeCompare('z', 'sv')); // a positive value: in Swedish, ä sorts after z
Using options
The results provided by localeCompare() can be customized using the options argument:

// in German, ä has a as the base letter
console.log('ä'.localeCompare('a', 'de', { sensitivity: 'base' })); // 0

// in Swedish, ä and a are separate base letters
console.log('ä'.localeCompare('a', 'sv', { sensitivity: 'base' })); // a positive value
Numeric sorting
// by default, "2" > "10"
console.log("2".localeCompare("10")); // 1

// numeric using options:
console.log("2".localeCompare("10", undefined, {numeric: true})); // -1

// numeric using locales tag:
console.log("2".localeCompare("10", "en-u-kn-true")); // -1

Specifications
Specification
ECMAScript (ECMA-262)
The definition of 'String.prototype.localeCompare' in that specification.
https://tc39.es/ecma262/#sec-string.prototype.localecompare

ECMAScript Internationalization API (ECMA-402)
The definition of 'String.prototype.localeCompare' in that specification.
https://tc39.es/ecma402/#sup-String.prototype.localeCompare