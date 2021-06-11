/**
 * Register a user sending an email for confirmation
 * This example demonstrates a common email verification flow. 
 * A user is initially registered but not yet approved. At 
 * registration, a verification email is sent with a link to a 
 * verification page. When a user goes to the verification page, 
 * the approval is granted and the user is logged into the site.

 * The code is split between three locations:

 *  ø A backend web module named register.jsw.
 *  ø The page code for the page where users register.
 *  ø The page code for the page where users confirm their registration.
 */
/*******************************
 * Backend code - register.jsw *
 *******************************/
 import wixUsersBackend from 'wix-users-backend';

 export function doRegistration(email, password, firstName, lastName) {
   // register the user
   return wixUsersBackend.register(email, password, {
     "contactInfo": {
       "firstName": firstName,
       "lastName": lastName
     }
   })
     .then((results) => {
       // user is now registered and pending approval
       // send a registration verification email
       wixUsersBackend.emailUser('verifyRegistration', results.user.id, {
         "variables": {
           "name": firstName,
           "verifyLink": `http://yourdomain.com/post-register?token=${results.approvalToken}`
         }
       });
     });
 }
 
 export function doApproval(token) {
   // approve the user
   return wixUsersBackend.approveByToken(token)
     // user is now active, but not logged in
     // return the session token to log in the user client-side
     .then((sessionToken) => {
       return { sessionToken, "approved": true };
     })
     .catch((error) => {
       return { "approved": false, "reason": error };
     });
 }
 
 /*********************************
  * Client-side registration code *
  *********************************/
 import { doRegistration } from 'backend/register';
 
 export function button_click(event) {
   let email = '';// the user's email address
     let password = '';// the user's password
       let firstName = '';// the user's first name
       let lastName = '';// the user's last name
 
       doRegistration(email, password, firstName, lastName)
         .then(() => {
           console.log("Confirmation email sent.");
         });
 }
 
 /**************************************
  * Client-side post-registration code *
  **************************************/
 import wixLocation from 'wix-location';
 import wixUsersBackend from 'wix-users';
 import { doApproval } from 'backend/register';
 
 $w.onReady(() => {
   // get the token from the URL
   let token = wixLocation.query.token;
 
   doApproval(token)
     .then((result) => {
       if (result.approved) {
         // log the user in
         wixUsersBackend.applySessionToken(result.sessionToken);
         console.log("Approved");
       }
       else {
         console.log("Not approved!");
       }
     });
 });
 