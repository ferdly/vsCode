//Register a user as a site member with registration options
import wixUsers from 'wix-users';

// ...

let email = '';// the user's email addresses
let password = '';// the user's password
let firstName = '';// the user's first name
let lastName = '';// the user's last name
let phone =  '';// the user's phone number

wixUsers.register(email, password, {
    contactInfo: {
        "firstName": firstName,
        "lastName": lastName,
        "phones": [phone]
    }
  } )
  .then( (result) => {
    let resultStatus = result.status;
  } );