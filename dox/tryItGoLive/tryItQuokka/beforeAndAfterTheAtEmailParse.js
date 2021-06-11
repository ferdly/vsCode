var emailAddress = "bradlowry@gmail.com";

var atPosition = emailAddress.lastIndexOf("@");
// ø indexOf and lastIndexOf should be moot, validation should check for more than one @,but...

var atPositionFromTheEnd = atPosition - (emailAddress.length - 1);
// ø purposely negative
// ø length vs indexOf you always have to nudge by 1

var beforeTheAt = emailAddress.substr(0, atPosition);
console.log(beforeTheAt)

//ø as substr() evaluates 'a negative parameter' as 'from the end backwards':
var afterTheAt = emailAddress.substr(atPositionFromTheEnd);
console.log(afterTheAt)

//ø admittedly simpler
//ø as substr() evaluates 'no second parameter' as 'to the end of the string':
var afterTheAtSimpler = emailAddress.substr(atPosition + 1);
console.log(afterTheAtSimpler)

var codeEmailAddress = 'emailAddress = "bradlowry@gmail.com";';
var codeWorkingVariables = 'atPosition = emailAddress.lastIndexOf("@");<br>// ø indexOf and lastIndexOf should be moot, validation should check for more than one @,but...<br><br>atPositionFromTheEnd = atPosition - (emailAddress.length - 1);<br>// • purposely negative<br>// • length vs indexOf you always have to nudge by 1';
var codeBeforeTheAt = 'beforeTheAt = emailAddress.substr(0, atPosition);';
var codeAfterTheAt = 'afterTheAt = emailAddress.substr(atPositionFromTheEnd);';//