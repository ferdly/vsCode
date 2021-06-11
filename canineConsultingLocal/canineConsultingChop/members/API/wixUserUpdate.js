import wixUsersBackend from 'wix-users-backend';

export function updateUserFields(userId, firstName, lastName, email, phone) {
  wixUsersBackend.updateUserFields(userId, {
      "firstName": firstName,
      "lastName": lastName,
      "emails": [email],
      "phones": [phone]
  } )
    .then( () => {
      // contact has been updated
    } )
    .catch( (err) => {
      // there was an error updating the contact
    } );
}