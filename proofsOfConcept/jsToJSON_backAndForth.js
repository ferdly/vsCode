// ø <Build JSON variable in JavaScript from vsCode JSON doc>
// ø <both of these maintain line breaks (or lack thereof)>
let jsonBuiltAsNonMinifiedWithTicks = `{
    "name":"Ferdly",
    "age": 61,
    "graduated":false,
    "dogs":[
        "Feather",
        "Marcy",
        "Cheter",
        "Marais"
    ]
}`;
// console.warn('jsonBuiltAsNonMinifiedWithTicks: it is JSON and formatting persists: ');
// console.warn(jsonBuiltAsNonMinifiedWithTicks);

let minifiedWithTicks_spaceSaver = `{"name":"Ferdly","age":61,"graduated":false,"dogs":["Feather","Marcy","Cheter","Marais"]}`;
// console.warn('minifiedWithTicks_spaceSaver: it is JSON and minification persists:');
// console.warn(minifiedWithTicks_spaceSaver);
// ø </both of these maintain line breaks (or lack thereof)>
// ø </Build JSON variable in JavaScript from vsCode JSON doc>

// ø <JSON.parse() the two working options>
let nonMinifiedParsed = JSON.parse(jsonBuiltAsNonMinifiedWithTicks);
// console.warn('nonMinifiedParsed: it is a JS Object and console.log() (redundantly) prettifies it:');
// console.warn(nonMinifiedParsed);
let minifiedParsed = JSON.parse(minifiedWithTicks_spaceSaver);
// console.warn('minifiedParsed: it is a JS Object and console.log() prettifies it:');
// console.warn(minifiedParsed);
// ø </JSON.parse() the two working options>



// ø <if this wasn't a MESS it would've been included under 'Build JSON...'>
// ø <this is a MESS: do NOT do this>
// ø     \_ didn't even attempt it with nonMinified
let jsonStrinfied_minifiedJsonAbove = JSON.stringify(minifiedWithTicks_spaceSaver,undefined,4);
// console.warn('jsonStrinfied_minifiedJsonAbove: ');
// console.warn(jsonStrinfied_minifiedJsonAbove);
// ø <this is a MESS: do NOT do this>
// ø </if this wasn't a MESS it would've been included under 'Build JSON...'>
