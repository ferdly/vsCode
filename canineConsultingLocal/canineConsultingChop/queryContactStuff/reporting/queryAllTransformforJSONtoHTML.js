let fs = require('fs')
let data = fs.readFileSync('queryContactsAll.json');
let allContacts = JSON.parse(data);

console.warn('allContacts: ');
console.warn(allContacts);