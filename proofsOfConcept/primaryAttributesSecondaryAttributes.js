console.warn('Mechanism for determining whether the process includes any \'Primary Attribute\': ')
console.warn('• total the binary of selected attributes')
console.warn('• if total % Math.pow(2,​​​lastPrimaryIndex + 1) > 0 THEN includes \'Primary Attribute\'')
console.warn('• extrapolate process for  \'Primary Attributes\' or \'Secondary Attribute\' after appending \'Ternary Attributes\'')
let primaryAttributes = ['name','email','phone'];
let secondaryAttributes = ['address','fax','website'];
let index = 0;
let binary = 0;
let combinedAttribute2dArray = [];

for (index = 0; index < primaryAttributes.length; index++) {
    const element = primaryAttributes[index];
    let element2d = [];
    binary = Math.pow(2,index);
    element2d.push(binary);
    element2d.push(element);
    combinedAttribute2dArray.push(element2d);
    
}
index--;
let lastPrimaryIndex = index;
let lastPrimaryBinary = binary;

for (index = 0; index < secondaryAttributes.length; index++) {
    const element = secondaryAttributes[index];
    let element2d = [];
    binary = Math.pow(2,index + lastPrimaryIndex + 1);
    element2d.push(binary);
    element2d.push(element);
    combinedAttribute2dArray.push(element2d);
    
}

// index++;
let lastSecondaryIndex = index + lastPrimaryIndex;
let lastSecondaryBinary = binary;


console.warn('combinedAttribute2dArray: ');
console.warn(combinedAttribute2dArray);
console.warn('lastPrimaryIndex: ' + lastPrimaryIndex + ' || ' + 'lastPrimaryBinary: ' + lastPrimaryBinary);
console.warn('lastSecondaryIndex: ' + lastSecondaryIndex + ' || ' + 'lastSecondaryBinary: ' + lastSecondaryBinary);
