var regEx = /[^0-9]/g;

var phoneStringOne = "(218) 595-0499";
var phoneStringStrippedResultOne = getPhoneOnlyDigits(regEx, phoneStringOne);
console.log(phoneStringStrippedResultOne);

var phoneStringTwo = "#3!1%5@2*8&7^6(90)$4";
var phoneStringStrippedResultTwo = getPhoneOnlyDigits(regEx, phoneStringTwo);
console.log(phoneStringStrippedResultTwo);

console.log(getPhoneOnlyDigits(regEx, "+218-310.5153"));

function getPhoneOnlyDigits(regEx, phoneString) {
  return phoneString.replace(regEx,'');
}