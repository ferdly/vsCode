//<sequence being attempted>

// let now = new Date;
// nowString = now.toString();
// let footer = nowString.substr(0,nowString.indexOf(":",nowString.indexOf(":") +1));
// console.log(nowString);
// console.log(footer);

//</sequence being attempted>

evalKVParray = [
    ["now","new Date"],
    ["nowString","evalObject.now.toString()"],
    ["footer","evalObject.nowString.substr(0,evalObject.nowString.indexOf(':',evalObject.nowString.indexOf(':') +1))"],
];
evalObject = {};
//<manual Loop>

//<manual Loop iteration>
index = 0;
evalKVPelement = evalKVParray[index];
evalKey = evalKVPelement[0]
evalValueCode = evalKVPelement[1]
evalObject[evalKey] = eval(evalValueCode);
//</manual Loop iteration>

//<manual Loop iteration>
index = 1;
evalKVPelement = evalKVParray[index];
evalKey = evalKVPelement[0]
evalValueCode = evalKVPelement[1]
evalObject[evalKey] = eval(evalValueCode);
//</manual Loop iteration>

//<manual Loop iteration>
index = 2;
evalKVPelement = evalKVParray[index];
evalKey = evalKVPelement[0]
evalValueCode = evalKVPelement[1]
evalObject[evalKey] = eval(evalValueCode);
//</manual Loop iteration>

//</manual Loop>

console.log(evalKey);
console.log(evalObject);