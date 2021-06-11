//<sequence being attempted>

// let now = new Date;
// nowString = now.toString();
// let footer = nowString.substr(0,nowString.indexOf(":",nowString.indexOf(":") +1));
// console.log(nowString);
// console.log(footer);

//</sequence being attempted>

//<same sequence via an Array of Strings to be evaluated>

evalObject = {};
evalKVParray = [
    ["now","new Date"],
    ["nowString","evalObject.now.toString()"],
    ["footer","evalObject.nowString.substr(0,evalObject.nowString.indexOf(':',evalObject.nowString.indexOf(':') +1))"],
];

//</same sequence via an Array of Strings to be evaluated>

//</evalKVP Loop>
let evalKey = '';
let evalValueCode = '';
evalKVParray.forEach(evalKVPelement => {
    evalKey = evalKVPelement[0]
    evalValueCode = evalKVPelement[1]
    evalObject[evalKey] = eval(evalValueCode);
});

//</evalKVP Loop>

console.log(evalObject);