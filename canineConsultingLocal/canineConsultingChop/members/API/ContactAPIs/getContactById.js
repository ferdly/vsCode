// Updated example using contacts.getContact()

import { contacts } from 'wix-crm-backend';

export function myGetContactFunction() {
  const contactId = "bc0ae72b-3285-485b-b0ad-c32c769a4daf";
  const options = {
    suppressAuth: false
  };

  return contacts.getContact(contactId, options)
    .then((contact) => {
      return contact;
    })
    .catch((error) => {
      console.error(error);
    });
}



// Deprecated example

import wixCrmBackend from 'wix-crm-backend';

export function myBackendFunction(contactId) {
  return wixCrmBackend.getContactById(contactId);
}