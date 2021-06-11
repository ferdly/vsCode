import wixData from 'wix-data';

// ...

let countryItem = // get country item from somewhere

let toSave = {
  "title":        "Mr.",
  "first_name":   "John",
  "last_name":    "Doe",
  "country":      countryItem
};

let options = {
  "suppressAuth": true,
  "suppressHooks": true
};

wixData.save("myCollection", toSave, options)
  .then( (results) => {
    let item = results; //see item below
  } )
  .catch( (err) => {
    let errorMsg = err;
  } );

/*  item is:
 *
 *  {
 *    "_id":          "rifk4nrk-dj4o-djhe-oidk-fnoqw4oiglk4i",
 *    "_owner":       "ffdkj9c2-df8g-f9ke-lk98-4kjhfr89keedb",
 *    "_createdDate": "2017-05-24T12:33:18.938Z",
 *    "_updatedDate": "2017-05-24T12:33:18.938Z",
 *    "title":        "Mr.",
 *    "first_name":   "John",
 *    "last_name":    "Doe",
 *    "country":      "id-of-usa-item"
 *  }
 */