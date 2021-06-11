wixContact = {};
let string = 'wixuser.infor.name';
let afterLastDot = '';
let beforeLastDot = '';

let instantiatePaths = ['info','info.name'];
comma = '';
instantiatePaths.forEach(path => {
    
    
    
    
    // path = instantiatePaths[0];
    let attributeChain = 'wixContact';
    splitPath = path.split('.');
    splitPath.forEach((chunk) => {
        attributeChain += "['" + chunk + "']";
        comma = ',';
    });
    attributeChain += ' = {}';
    console.log(attributeChain);
    eval(attributeChain);
});
console.warn(wixContact)