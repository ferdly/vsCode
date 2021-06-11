/**
 * Register a user using a 3rd party for approval
 * This example demonstrates a common 3rd party approval flow. The backend code
 * calls a 3rd party function that determines whether the user will be approved
 * or not. If approved, the register() function is called, the registration is
 * approved programmatically, and a session token is returned to the calling
 * client-side code. If rejected, the blockByEmail() function is called.
 */

/*******************************
 * Backend code - register.jsw *
 *******************************/
 import wixUsersBackend from 'wix-users-backend';
 import { approveBy3rdParty } from 'some-backend-module';
 
 export function doRegistration(email, password, firstName, lastName) {
   // call a 3rd party API to check if the user is approved
   return approveBy3rdParty(email, password)
     .then((isApproved) => {
       // if approved by 3rd party
       if (isApproved) {
         // register the user
         return wixUsersBackend.register(email, password, {
           "contactInfo": {
             "firstName": firstName,
             "lastName": lastName
           }
         })
           // user is now registered and pending approval
           // approve the user
           .then((result) => wixUsersBackend.approveByToken(result.approvalToken))
           // user is now active, but not logged in
           // return the session token to log in the user client-side
           .then((sessionToken) => {
             return { sessionToken, "approved": true };
           });
       }
       // if not approved by 3rd party
       else {
         return { "approved": false };
       }
     })
 }
 
 /********************
  * Client-side code *
  ********************/
 import wixUsersBackend from 'wix-users';
 import { doRegistration } from 'backend/register';
 
 // ...
 
 let email = '';// the user's email addresses
   let password = '';// the user's password
     let firstName = '';// the user's first name
     let lastName = '';// the user's last name
 
     doRegistration(email, password, firstName, lastName)
       .then((result) => {
         if (result.approved)
           // log the user in
           wixUsersBackend.applySessionToken(result.sessionToken);
         else {
           console.log("Not approved!");
         }
       });
 