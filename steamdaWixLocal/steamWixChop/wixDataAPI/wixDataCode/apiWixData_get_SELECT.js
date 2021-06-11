//! function get(collectionId: string, itemId: string, [options: WixDataOptions]): Promise<Object>

import wixData from 'wix-data';

// ...

let options = {
  "suppressAuth": true,
  "suppressHooks": true
};

wixData.get("myCollection", "00001", options)
  .then( (results) => {
    let item = results; //see item below
  } )
  .catch( (err) => {
    let errorMsg = err;
  } );

/*  item is:
 *
 *  {
 *    "_id":          "00001",
 *    "_owner":       "ffdkj9c2-df8g-f9ke-lk98-4kjhfr89keedb",
 *    "_createdDate": "2017-05-24T12:33:18.938Z",
 *    "_updatedDate": "2017-05-24T12:33:18.938Z",
 *    "title":        "Mr.",
 *    "first_name":   "John",
 *    "last_name":    "Doe"
 *  }
 */