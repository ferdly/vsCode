//BESTGmanyAddressesObjectArray.js
//<Constructors>
const AddressObjectNonSteam = function(streetNumber, streetName, city, state, zip){
    this.streetAddress = {};
    this.streetAddress.number = streetNumber.trim() ?? '';
    this.streetAddress.name = streetName.trim() ?? '';
    this.city = city.trim() ?? '';
    this.state = state.trim() ?? '';
    this.postalCode = zip.trim() ?? '';
    this.country = 'US';
    this.subdivision = this.state;
    this.location = {};
    this.location.latitude = null;
    this.location.longitue = null;
    //<formatted>
    this.formatted = this.streetAddress.number;
    this.formatted += ' ';
    this.formatted += this.streetAddress.name;
    this.formatted += ', ';
    this.formatted += this.city;
    this.formatted += ', ';
    this.formatted += this.subdivision;
    this.formatted += ' ';
    this.formatted += this.postalCode;
    this.formatted += ', ';
    this.formatted += this.country === 'US' ? 'USA' : this.country;
    //</formatted>
};
const AddressObject = function(address, address2, city, state, zip){
    // addressThis = new AddressObject(mileyAddress, mileyAddress2, mileyCity, mileyState, mileyZip );
    this.streetAddress = {};
    this.city = address.replace(" ", "|");
    console.log(this.city)
    this.streetAddress.number = this.city.split('|')[0];
    console.log(this.streetAddress.number)
    this.streetAddress.name = this.city.split('|')[1];
    console.log(this.streetAddress.name)
    this.streetAddress2 = address2.trim() ?? '';
    this.city = city.trim() ?? '';
    console.log(this.city)
    this.state = state.trim() ?? '';
    this.postalCode = zip.trim() ?? '';
    this.country = 'US';
    this.subdivision = this.state;
    this.location = {};
    this.location.latitude = null;
    this.location.longitue = null;
    //<formatted>
    this.formatted = this.streetAddress.number;
    this.formatted += ' ';
    this.formatted += this.streetAddress.name;
    this.formatted += ', ';
    this.formatted += this.streetAddress2.length > 0 ? this.streetAddress2 + ', ': '';
    this.formatted += this.city;
    this.formatted += ', ';
    this.formatted += this.subdivision;
    this.formatted += ' ';
    this.formatted += this.postalCode;
    this.formatted += ', ';
    this.formatted += this.country === 'US' ? 'USA' : this.country;
    //</formatted>
};

//<Constructors>

let streetAddressNumberOne = "315   ";
let streetAddressNameOne = "North 3rd Avenue East   ";
let streetAddressSecondOne = '#101   ';
let cityOne = 'Duluth   ';
let stateOne = "MN   ";
let zipOne = "55805   ";

let streetAddressNumberTwo = "   5520";
let streetAddressNameTwo = "   Fish Lake Dam Road";
let streetAddressSecondTwo = '';
let cityTwo = '   Duluth';
let stateTwo = "   MN";
let zipTwo = "   55803";

// let mileyAddress = "";
let mileyAddress = "101 Grand Ole Opry Way";
let mileyAddress2 = "Apartment 1510";
let mileyCity = "Nashville";
let mileyState = "TN";
let mileyZip = "37201";


const addresses = [];
if (mileyAddress && mileyAddress.trim().length > 0) {
    addressThis = new AddressObject(mileyAddress, mileyAddress2, mileyCity, mileyState, mileyZip );
    // console.log(addressThis.constructor.name);
    // console.log(addressThis)
    // addresses[addresses.length] = Object.assign(addressThis);
    // addresses.push(addressThis)
    // addresses.push(JSON.stringify(addressThis));
    addresses.push(JSON.parse(JSON.stringify(addressThis)));
}
addressThis = new AddressObjectNonSteam(streetAddressNumberOne, streetAddressNameOne, cityOne, stateOne, zipOne );
addresses.push(JSON.parse(JSON.stringify(addressThis)));
if (streetAddressNameTwo && streetAddressNameTwo.trim().length > 0) {
    addressThis = new AddressObjectNonSteam(streetAddressNumberTwo, streetAddressNameTwo, cityTwo, stateTwo, zipTwo );
    addresses.push(JSON.parse(JSON.stringify(addressThis)));
}

console.log(addresses);