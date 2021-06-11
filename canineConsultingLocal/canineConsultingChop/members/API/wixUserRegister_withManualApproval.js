//Register a user as a site member with manual approval
import wixUsers from 'wix-users';

// ...

let email = '';// the user's email addresses
let password = '';// the user's password

wixUsers.register(email, password)
  .then( (result) => {
    let status = result.status; // "Pending"
    let approvalToken = result.approvalToken;
    let user = result.user;
  } );