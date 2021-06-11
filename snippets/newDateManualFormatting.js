let now = new Date;

let nowStringIsoHuman = now.toISOString().substr(0,16);

let nowString = now.toString();
let nowStringDefualtHuman = nowString.substr(0,nowString.indexOf(":",nowString.indexOf(":") + 1));

console.log('nowStringIsoHuman: ' + nowStringIsoHuman);
console.log('nowStringDefualtHuman: ' + nowStringDefualtHuman);

