/**
 * @url: https://support.totallycodable.com/en/article/register-user-to-wix-crm-and-insert-to-custom-database
 * @more: additional code at site, didn't seem critical
 */
import wixUsers from 'wix-users';
import wixLocation from 'wix-location';
import wixWindow from 'wix-window';
import wixData from 'wix-data';
let registration;

$w.onReady(function () {

 $w("#termsBox").onChange((event) => {
  let isChecked = $w("#termsBox").checked; //This will return result of True or False
  if (isChecked) {
   $w("#registrationButton").enable();
  } else {
   $w("#registrationButton").disable();
  }
 });

 $w("#forgotPassword").onClick((event) => {

  wixUsers.promptForgotPassword()
   .then(() => {
    //
   })
   .catch((err) => {
    let errorMsg = err;
   });
 });

 if (wixUsers.currentUser.loggedIn) {
  wixLocation.to("/account/member-home"); //Change the URL ending to the page you want to redirect the user if they are already logged in
 }

 $w("#registrationButton").onClick((event) => {
  console.log("Button was clicked"); //You can change the text of this line or delete it
  $w('#errorMessage').hide(); //We want to hide all error messages when the person attempts to register again
  $w('#emailExists').hide(); //We want to hide all error messages when the person attempts to register again
  if ($w("#email").valid && $w("#password").valid && $w("#firstName").valid && $w("#lastName").valid) {
   let email = $w("#email").value;
   let password = $w("#password").value;
   let first = $w("#firstName").value;
   let last = $w("#lastName").value;

   wixUsers.register(email, password, {
     contactInfo: {
      "firstName": first,
      "lastName": last
     }
    })
    .then((result) => {
     $w("#dataset1").save()
      .then((item) => {
       wixLocation.to("/account/member-home"); //Change the URL ending to the page you want to redirect the user after they successfully register
      })
      .catch((err) => {
       let errMsg = err;
      });
    })
    .catch((err) => {
     let errorMsg = err;
     console.log(err);
     $w('#emailExists').show(); //This is were we prompt the message to show up again ONLY if there is an error
    });
   console.log("Trying to register"); //You can change the text of this line or delete it
  } else {
   $w('#errorMessage').show(); //This is were we prompt the message to show up again ONLY if there is an error
   console.log("Missing information"); //You can change the text of this line or delete it
  }

 });

});
