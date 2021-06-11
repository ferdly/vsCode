let email = "qiqgroup+wendy@gmail.com";
let password = "test";
let firstName = "Wendy";
let lastName = "Whiskey";
let emails = ["qiqgroup+wendy584@gmail.com","qiqgroup+wendy978@gmail.com","qiqgroup+wendy664@gmail.com"];
let phones = ["(509) 551-3299","(307) 252-7542"];
wixUsers.register(email, password, {
    contactInfo: {
        "firstName": firstName,
        "lastName": lastName,
        "emails": emails,
        "phones": phones,
    }
} )
.then( (result) => {
console.log(result.status);
console.log(result.approvalToken);
console.log(result.user);
let resultStatus = result.status;
$w("#memberInsertResult").value = JSON.stringify(result,undefined, 4);
} );