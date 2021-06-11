//Register a user as a site member with auto approval
import wixUsers from 'wix-users';

// ...

let email = '';// the user's email addresses
let password = '';// the user's password

wixUsers.register(email, password)
  .then( (result) => {
    let status = result.status; // "Active"
    let user = result.user;
  } );