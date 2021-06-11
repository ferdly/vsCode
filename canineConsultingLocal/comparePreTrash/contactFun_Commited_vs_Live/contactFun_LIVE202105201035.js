// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// import {fetch} from 'wix-fetch';
import {getJSON} from 'wix-fetch';
// import { contacts } from 'wix-crm-backend'
import { multiply } from 'backend/randomAPI.jsw'
import { composeWixContactCode } from 'backend/randomAPI.jsw'
import { steamdaGetContactFunction } from 'backend/crmModule.jsw'
import { steamdaCreateContactFunction } from 'backend/contactReference.jsw'
import { streamdaUpdateContactFunction } from 'backend/contactReference.jsw'
// import { myBackendFunction } from 'backend/aModule.jsw'
import wixWindow from 'wix-window';


$w.onReady(function () {
	$w("#anchorRandomUser").scrollTo();
	$w("#codeHolder").wrap = "soft";
});

export function btnClearMember_click(event) {
	$w("#memberJSON").value = " ";
	$w("#crmContactId").value = '';
	$w("#inputRevision").value = '';
	$w("#dataMembers").scrollTo();
	$w("#errorTextBox").hide();
}

export function btnGetMemberItemJSON_click(event,$w) {
	$w("#crmContactId").value = '';
	let targetItem = $w("#dsMember").getCurrentItem();
	$w("#crmContactId").value = targetItem._id;
	// console.log(targetItem);
	let stringMemberJSON = "HOLDER";
	stringMemberJSON = JSON.stringify(targetItem, undefined, 4);
	$w("#memberJSON").value = stringMemberJSON;
	$w("#contactCurrent").value = stringMemberJSON;
	$w("#anchorMemberSelected").scrollTo()
	$w("#crmContactId").focus();
	$w("#currentConstactHeader").text = 'Member Selected (see constant above)';
}

export function btnClearContact_click(event) {
	$w("#contactCurrent").value = '';
	$w("#anchorClearMember").scrollTo()
}

export function btnGetContactById_click(event) {
	let currMemberId = $w('#crmContactId').value;
	//console.log('currMemberId: ' + currMemberId)
	let contact = steamdaGetContactFunction(currMemberId)
		.then(contactReturned => {
			//console.log(contactReturned);
			$w('#inputRevision').value = contactReturned.revision;
			$w('#contactCurrent').value = JSON.stringify(contactReturned, undefined, 4);
			$w('#contactJSON').value = JSON.stringify(contactReturned, undefined, 4);
		})
		.catch(err => {
			$w('#contactCurrent').value = err;
		});
	// console.log(contact);
	// $w('#contactCurrent').value = JSON.stringify(contact, undefined, 4);
}


export function btnMultiply_click(event) {
	let operand1 = $w('#operand1').value;
	let resultObject = {};
	//console.log('operand1: ' + operand1 + '|' + $w('#operand1').value);
	let operand2 = $w('#operand2').value;
	//console.log('operand2: ' + operand2 + '|' + $w('#operand2').value);
	let product = multiply(operand1,operand2)
		.then(result => {
		//console.log(operand1 + ' * ' + operand2 + ' = ' + result);
		$w('#product').value = result;
		return result;
		});

}

export function btnPostUpdate_click(event) {
	let result = doContactUpdatePost("post");
}

export function doContactUpdatePost(step){
	$w('#codeUpdateResult').value = "This Logic is Pending";
}

export function doContactUpdatePrep(step){
	let paramObject = {};
	//console.log($w('#chkbxOptions').value);
	let optionsArray = $w('#chkbxOptions').value;
	let updateOptions = {};
	let key = 'allowDuplicates';
	let booleanValue = optionsArray.includes(key);
	updateOptions[key] = booleanValue;
	key = 'suppressAuth';
	booleanValue = optionsArray.includes(key);
	updateOptions[key] = booleanValue; 
	// let optionsJSON = JSON.stringify(updateOptions, undefined, 4);
	// console.log(optionsJSON);
	paramObject.options = updateOptions;
	let contactIdentifiers = {};
	contactIdentifiers.contactId = $w('#crmContactId').value;
	contactIdentifiers.revision = $w('#inputRevision').value;
	paramObject.contactIdentifiers = contactIdentifiers;
	let contactInfo = JSON.parse($w('#codePrepContact').value);
	paramObject.contactInfo = contactInfo.contactInfo;
	$w('#codePrepUpdate').value = JSON.stringify(paramObject, undefined, 4);
}

export function fauxFunctionForCodeHolder(){

}

export function btnPrepUpdate_click(event) {
	let result = doContactUpdatePrep("prep");
}

export function tabContactPrep_click(event) {
	$w("#multiboxUpdateStatus").changeState("ContactPrep");
}
export function tabUpdatePrep_click(event) {
	$w("#multiboxUpdateStatus").changeState("UpdatePrep");
}
export function tabDoUpdate_click(event) {
	$w("#multiboxUpdateStatus").changeState("ExecuteUpdate");
}
// </Update Sequence Tabs>

export function appendKVPtoContactInfo_click(event) {
	let result = doAppendKVPtoContactInfo("appendKVPtoContactInfo");
}

export function doAppendKVPtoContactInfo(step){
	// let pathPrefix = 'info'; 
	let pathPrefix = 'contactInfo'; 
	$w('#errorTextBox').hide();
	let contactInfoRaw = $w('#codePrepContact').value;
	contactInfoRaw.trim();
	contactInfoRaw = contactInfoRaw.substr(0,1) === "{" ? contactInfoRaw :'{}';
	let contactInfoHolder = JSON.parse(contactInfoRaw);
	
	let attributeChain = "contactInfoHolder";
	let attributeChainArray = [];
	let path = $w('#ddInputKey').value;
	let pathSplit = path.split(".");
	let inputKey = pathSplit.pop();
	let inputValue = $w('#inputValue').value;
	let inputKeyChunk = "['" + inputKey + "']";
	//console.log('inputKeyChunk: ');
	//console.log(inputKeyChunk);
	//console.log('inputValue: ');
	//console.log(inputValue);
	let chunkCount = 0;
	let attribute = '';
    pathSplit.forEach(chunk => {
		chunkCount++;
		chunk = chunk === 'info' ? pathPrefix : chunk;
		attribute = "['" + chunk + "']";
		attributeChainArray.push(attribute);
		attributeChain += attribute;
		let testChain = eval(attributeChain);
		if(typeof testChain === 'undefined'){
			let instantiateChain = attributeChain + " = {}";
			eval(instantiateChain);
			//console.log('contactInfoHolder instaantiate: ');
			//console.log(instantiateChain);
			//console.log(contactInfoHolder);
		}
    });
	//console.log('[chunk ' + chunkCount + ']attributeChainArray Final: ');
	//console.log(attributeChainArray);
	
	let attributeChainAssign = attributeChain + inputKeyChunk + " = '" + inputValue + "'"
	eval(attributeChainAssign);
	//console.log('attributeChainAssign: ');
	//console.log(attributeChainAssign);
	//console.log(contactInfoHolder);
	// eval(attributeChainAssign);
	$w('#codePrepContact').value = JSON.stringify(contactInfoHolder,undefined,4)
	







	return;
	let key = $w('#inputKey').value;
	let stringValue = $w('#inputValue').value.trim();
	let supportedKeyArray = ['last','first'];
	key = typeof stringValue === 'string' ? key : 'INVALID_VALUE_TYPE';
	key = stringValue.length === 0 ? 'INVALID_VALUE_LENGTH' : key;
	key = supportedKeyArray.includes(key) === false ? 'UNSUPPORTED_KEY' : key;
	switch (key) {
		case 'last':
			//<should work>
			// but need to figure out 
			// contactInfo.name[key] =  stringValue;
			//</should work>
			contactInfoHolder.contactInfo.name.last =  stringValue;
			break;
		case 'first':
			contactInfoHolder.contactInfo.name.first =  stringValue;
			break;
		case 'INVALID_VALUE_TYPE':
			$w('#errorTextBox').show();
			$w('#errorTextBox').value =  "Error: Invalid Value Type; No action taken";
			break;
		case 'INVALID_VALUE_LENGTH':
			$w('#errorTextBox').show();
			$w('#errorTextBox').value =  "Error: Invalid Value length (probably empty); No action taken";
			break;
		case 'UNSUPPORTED_KEY':
			$w('#errorTextBox').show();
			$w('#errorTextBox').value =  "Error: unsupported Key; ['last',first']; No action taken";
			break;

		default:
			break;
	}
	$w('#codePrepContact').value = JSON.stringify(contactInfoHolder,undefined,4);
}
//<WiX API> first Copy Code	
async function doFetch(kind, paramObject){
	let resolvedResponse = {};
	switch (kind) {
		case 'randomUser':
			resolvedResponse = await doRandomUser(paramObject);//.then(result => {return result});
			//console.log("TWO: case 'randomUser':");
			//console.log(resolvedResponse);
			break;

		default:
			break;
	}
	//console.log('return from SWITCH');
	// resultString = JSON.stringify(resultStringSwitch,undefined,4);
	return resolvedResponse;
}
// ø <---------- <doRandomUser>  ---------->
async function doRandomUser(paramObject = {}){
	//https://randomuser.me/documentation
	let fetchParamObject = {};
	let getElementArray = ['results','gender','password','seed','format','nat','page','inc','exc','dl','noinfo','callback'];;
	//<instantiateEmpty>
	let stringHolder
	getElementArray.forEach(element => {
		if(typeof paramObject[element] === 'string'){
			stringHolder = paramObject[element];
			if(stringHolder.substr(0,1) === '&'){
				fetchParamObject[element] = stringHolder;
			}else{
				fetchParamObject[element] = '&' + element + '=' + stringHolder;
			}
		}else{
			fetchParamObject[element] = '';
		}
	})
	//</instantiateEmpty>
	fetchParamObject.url = 'https://randomuser.me/api';
	fetchParamObject.version = '';//'/1.3/'
	//<assign NonEmptyParameter getElementArray values>
	// fetchParamObject.results  = '';//'&results=5000';
	// fetchParamObject.gender   = '';//fetchParamObject.gender.substr(0,1).toUpperCase() + fetchParamObject.gender.substr(1).toLowerCase();//'&gender=female';
	// fetchParamObject.password = '';//'&password=upper,lower,1-16';
	// fetchParamObject.seed     = /*'';*/'&seed=8edfefd3e6f5ba90';
	// fetchParamObject.format   = '';//'&format=csv';
	fetchParamObject.nat      = fetchParamObject.nat === '&nat=EEMPTY' ? '' : '&nat=us';
	// fetchParamObject.page     = '';//'&page=3';
	// fetchParamObject.inc      = '';//'&inc=gender,name,nat';
	// fetchParamObject.exc      = '';//'&exc=login';
	// fetchParamObject.dl       = '';//'&dl';
	// fetchParamObject.noinfo   = '';//'&noinfo';
	// fetchParamObject.callback = '';//'&callback=randomuserdata';
	//</assign NonEmptyParameter getElementArray values>
	//console.log('fetchParamObject via after Override')
	//console.log(fetchParamObject)
	//<append Empty or Not>
	let requestString = '';
	getElementArray.forEach(element => {
		requestString += fetchParamObject[element];
	})
	//</append Empty or Not>
	requestString = requestString.substr(1);
	requestString = requestString.length > 0 ? '?' + requestString : '';
	requestString = fetchParamObject.url + fetchParamObject.version + requestString;
	// console.log(requestString);
	let response = await getJSON(requestString);
	//console.log("ONE.a: response after 'await getJSON'");
	//console.log(response);
	// let user = await response.json();//.json() is a promise
	// let resolvedResponse = await Promise.resolve(response);
	let resolvedResponse = response.results[0];
	resolvedResponse.seed = response.info.seed;
	resolvedResponse.location.country = resolvedResponse.location.country === 'United States' ? 'US' : resolvedResponse.location.country;
	// resolvedResponse.info = [];
	// ø <Transformations>
	let transformedAttributes = [];
	let now = new Date();
	let streetNumberBase = resolvedResponse.location.street.number;
	let tempIndex = 0;
	transformedAttributes.push(["streetNumberBase: used as a 'random' number for populating _consistent/random_ data by 'seed''"]);
	// ø <----- \_ streetNumberBase _/  ----->
	resolvedResponse.locale = 'en-US';
	transformedAttributes.push(["locale: literal 'en-US'"]);
	// ø <----- \_ locale _/  ----->
	let postalCode = '00000' + resolvedResponse.location.postcode.toString();
	postalCode = postalCode.substr(-5);
	resolvedResponse.location.postalCode = postalCode;
	transformedAttributes.push(['postalCode: ensure 5 and string - left postcode as number']);
	// ø <----- \_ postalCode _/ ----->
	let birthdate = resolvedResponse.dob.date.substr(0,10);
	resolvedResponse.birthdate = birthdate;
	transformedAttributes.push(['birthdate: dob.date to left 10. no change to original']);
	// ø <----- \_ birthdate _/ ----->
	let stateAbbrvObject = {"Alabama":"AL","Alaska":"AK","American Samoa":"AS","Arizona":"AZ","Arkansas":"AR","California":"CA","Colorado":"CO","Connecticut":"CT","Delaware":"DE","District Of Columbia":"DC","Federated States Of Micronesia":"FM","Florida":"FL","Georgia":"GA","Guam":"GU","Hawaii":"HI","Idaho":"ID","Illinois":"IL","Indiana":"IN","Iowa":"IA","Kansas":"KS","Kentucky":"KY","Louisiana":"LA","Maine":"ME","Marshall Islands":"MH","Maryland":"MD","Massachusetts":"MA","Michigan":"MI","Minnesota":"MN","Mississippi":"MS","Missouri":"MO","Montana":"MT","Nebraska":"NE","Nevada":"NV","New Hampshire":"NH","New Jersey":"NJ","New Mexico":"NM","New York":"NY","North Carolina":"NC","North Dakota":"ND","Northern Mariana Islands":"MP","Ohio":"OH","Oklahoma":"OK","Oregon":"OR","Palau":"PW","Pennsylvania":"PA","Puerto Rico":"PR","Rhode Island":"RI","South Carolina":"SC","South Dakota":"SD","Tennessee":"TN","Texas":"TX","Utah":"UT","Vermont":"VT","Virgin Islands":"VI","Virginia":"VA","Washington":"WA","West Virginia":"WV","Wisconsin":"WI","Wyoming":"WY"};
	let state = resolvedResponse.location.state
	let subdivision = stateAbbrvObject[state];
	resolvedResponse.location.subdivision = subdivision;
	transformedAttributes.push(["subdivision: 2letter version of 'state' - original not removed"]);
	// ø <----- \_ subdivison _/ ----->
	let company = resolvedResponse.location.street.name;
	company = company.substr(0,company.indexOf(" "));//first word, how about all but last, but pretty good
	let businessKindArray = ['Incorporated','Limited','Corporation','University','College','Auto Parts','Associates','Restaurant','Stores'];
	tempIndex = streetNumberBase % businessKindArray.length;
	company += ' ' + businessKindArray[tempIndex];
	resolvedResponse.company = company;
	transformedAttributes.push(['Company: Street name + random business kind']);
	// ø <----- \_ company _/ ----->
	let jobTitleArray = ['Manager','Sales','IT','Maintenance','Supervisor','Graphic Design','Accounting','Human Resources'];
	tempIndex = streetNumberBase % jobTitleArray.length;
	let jobTitle = jobTitleArray[tempIndex];
	resolvedResponse.jobTitle = jobTitle;
	transformedAttributes.push(['jobTitle: random jobTitle']);
	// ø <----- \_ jobTitle _/ ----->
	let emailPrimary = 'qiqgroup+' + resolvedResponse.name.first.toLowerCase() + '@gmail.com';
	resolvedResponse.emailPrimary = emailPrimary;
	transformedAttributes.push(['emailPrimary: qiqgroup + firstName - real so that enrollment happens']);
	// ø <----- \_ emailPrimary _/ ----->
	let addressLine2TypeArray = ['#','Suite','Box']
	let addressLine2 = Math.floor(Math.random() * 1000).toString();
	let addressLine2Type = Number(addressLine2) < 40 ? 'Floor' : addressLine2TypeArray[Math.floor(Math.random() * addressLine2TypeArray.length)];
	addressLine2 = addressLine2Type + ' ' + addressLine2;
	resolvedResponse.location.addressLine2 = addressLine2;
	transformedAttributes.push(['addressLine2: random number and random type']);
	// ø <----- \_ addressLine2 _/ ----->
	let apt = Math.floor(Math.random() * 1000).toString();
	resolvedResponse.location.street.apt = apt;
	transformedAttributes.push(['street.apt: random number more useful than addressLine2']);
	// ø <----- \_ street.apt _/ ----->
	let gender = resolvedResponse.gender;
	gender = 'custom.gender-' + gender;
	resolvedResponse.gender = gender;
	transformedAttributes.push(['gender: changed to labelKey (original overloaded because of other code, also, core data not changed)']);
	// ø <----- \_ gender _/ ----->
	let roleNumber = (streetNumberBase % 100) + 1;
	let roleLabel = "custom.student";
	roleLabel = roleNumber > 40 ? "custom.primary-parent" : roleLabel;
	roleLabel = roleNumber > 80 ? "custom.secondary-parent" : roleLabel;
	resolvedResponse.login.usernameOrig = resolvedResponse.login.username;
	resolvedResponse.login.username = roleLabel;
	transformedAttributes.push(['login.username: changed to role labelKey (orig renamed usernameOrig)']);
	// ø <----- \_ login.username _/ ----->
	let labelKey = (now.getFullYear()).toString();
	labelKey = 'custom.t' + labelKey + '06';
	resolvedResponse.dob.age = labelKey;
	transformedAttributes.push(['dob.age: changed to current summer termId tYYYY06 labelKey (age is calcuable)']);
	// ø <----- \_ dob.age _/ ----->
	resolvedResponse.developer = {};
	resolvedResponse.developer.transformedAttributes = transformedAttributes;
	// ø </Transformations>
	return resolvedResponse;
	
} //END doRandomUser()
// ø <---------- </doRandomUser> ---------->
//</WiX API>

export async function btnFetchRandomPerson_click(event) {
	// let paramObject = {};
	let paramObject = JSON.parse($w('#boxParamObject').value);
	let addToCache = true;
	if(Object.keys(paramObject).includes('seed')){
		addToCache = false;
	}

	//console.log('PREP: click + paramObject');
	//console.log(paramObject);
	let resolvedResponse = await doFetch("randomUser", paramObject);
	//console.log('THREE: click + resolvedResponse');
	//console.log(resolvedResponse);
	if(typeof resolvedResponse === 'undefined'){
		resolvedResponse = "'randomUser' is undefined"
	}
	if(addToCache){
		let name = resolvedResponse.name.last + ', ' + resolvedResponse.name.first;
		let seed = resolvedResponse.seed;
		let now  = new Date();
		let element = {};
		element.name = name;
		element.seed = seed;
		element.instantiated = now.toISOString();
		//console.log(element);
		let userCacheObject = JSON.parse($w('#randomUserCache').value);
		//console.log(userCacheObject);
		userCacheObject.userCache.push(element);
		$w('#randomUserCache').value = JSON.stringify(userCacheObject,undefined,4);
	}
	$w('#randomuserDOTme').value = JSON.stringify(resolvedResponse,undefined,4);
}

/**
 *	Adds an event handler that runs when the element is clicked.
 *	 @param {$w.MouseEvent} event
 */
export function cachePrev_click(event) {
	selectSeed('previous'); 
}

/**
 *	Adds an event handler that runs when the element is clicked.
 *	 @param {$w.MouseEvent} event
 */
export function cacheNext_click(event) {
	selectSeed('next'); 
}

export function selectSeed(direction = 'next'){
	let seedIndex = Number($w('#seedWhich').value);
	let seedArray = JSON.parse($w('#randomUserCache').value).userCache;
	let seedArrayLength = seedArray.length;
	if($w('#seedWhich').value.length === 0){
		if(direction === 'next'){
			seedIndex = -1;
		}else{
			seedIndex = seedArrayLength;
		}
		
	}
	seedIndex += direction === 'next' ? 1 : -1;
	let seedIndexString = seedIndex.toString();
	if(seedIndex < 0 || seedIndex >= seedArrayLength){
		$w('#seedWhich').value = '';
		$w("#seedWhich").resetValidityIndication();
		$w('#seedSelected').value = '';
		$w("#seedSelected").resetValidityIndication();
	}else{
		$w('#seedWhich').value = seedIndexString;
		$w('#seedSelected').value = seedArray[seedIndex].name;
		// $w('#seedSelected').value = seedThis;
	}
}

/**
 *	Adds an event handler that runs when the element is clicked.
 *	 @param {$w.MouseEvent} event
 */
export function btnSelectSeed_click(event) {
	let paramObject = JSON.parse($w('#boxParamObject').value);
	let userCache = JSON.parse($w('#randomUserCache').value).userCache;
	let seedWhich = $w('#seedWhich').value;
	if(seedWhich.length === 0){
		// \_ this validation should be redundant
		$w('#seedWhich').value = '';
		$w('#seedSelected').value = '';//may turn red - a bonus
	}
	let seedIndex = Number(seedWhich);
	let user = userCache[seedIndex];
	paramObject.seed = user.seed;
	paramObject.instantiated = user.instantiated;


	$w('#boxParamObject').value = JSON.stringify(paramObject,undefined,4);
}

/**
*	Adds an event handler that runs when an input element's value
 is changed.
*	 @param {$w.Event} event
*/
export function seedSelected_change(event) {
	if($w('#seedSelected').value.length === 0){
		$w('#btnSelectSeed').hide();
	}else{
		$w('#btnSelectSeed').show();
	}
}

export function doLoadTenUserCache (indexParam){
	let index = Number(indexParam) + 0;
	let kMax = 1;
	let userCacheObj = {};
	index = index % kMax;
	switch (index) {
		case 0:
			// userCacheObj = {userCache:[{name:"Black, Jimmie",seed:"2b09df5fa295637d"},{name:"Tucker, Diane",seed:"fdc6f82f108d8876"},{name:"Gilbert, Jennie",seed:"8627a076736ce3ab"},{name:"Grant, Joyce",seed:"3a7115223d7b50ca"},{name:"Morales, Melanie",seed:"11e1224a47da24d0"},{name:"Ray, Armando",seed:"4473bfcd948b0007"},{name:"Ward, Christian",seed:"07e361e2ffd995da"},{name:"Ryan, Amy",seed:"9d01656202b5481d"},{name:"Armstrong, Noah",seed:"5bcd9a445221856c"},{name:"Holt, Floyd",seed:"3628bfbbd09c27aa"}]};
			userCacheObj = { userCache: [{ name: "Black, Jimmie", seed: "2b09df5fa295637d", "instantiated": "2021-05-20T14:42:28.442Z" }, { name: "Tucker, Diane", seed: "fdc6f82f108d8876", "instantiated": "2021-05-20T14:42:28.442Z" }, { name: "Gilbert, Jennie", seed: "8627a076736ce3ab", "instantiated": "2021-05-20T14:42:28.442Z" }, { name: "Grant, Joyce", seed: "3a7115223d7b50ca", "instantiated": "2021-05-20T14:42:28.442Z" }, { name: "Morales, Melanie", seed: "11e1224a47da24d0", "instantiated": "2021-05-20T14:42:28.442Z" }, { name: "Ray, Armando", seed: "4473bfcd948b0007", "instantiated": "2021-05-20T14:42:28.442Z" }, { name: "Ward, Christian", seed: "07e361e2ffd995da", "instantiated": "2021-05-20T14:42:28.442Z" }, { name: "Ryan, Amy", seed: "9d01656202b5481d", "instantiated": "2021-05-20T14:42:28.442Z" }, { name: "Armstrong, Noah", seed: "5bcd9a445221856c", "instantiated": "2021-05-20T14:42:28.442Z" }, { name: "Holt, Floyd", seed: "3628bfbbd09c27aa", "instantiated": "2021-05-20T14:42:28.442Z" }] };
			break;

		default:
			userCacheObj = {error : "ERROR: Unsupported SWITCH index (probably and issue with kMax)"};
			break;
	}
	return userCacheObj;
}

/**
 *	Adds an event handler that runs when the element is clicked.
 *	 @param {$w.MouseEvent} event
 */
export function btnNextTenCachedUsers_click(event) {
	let kMax = 0;
	let indexParam = Math.floor(Math.random() * kMax);
	let tenJson = doLoadTenUserCache (indexParam);
	$w('#randomUserCache').value = JSON.stringify(tenJson,undefined,4);
}



/**
 *	Adds an event handler that runs when the element is clicked.
 *	 @param {$w.MouseEvent} event
 */
export function btnClearUserCache_click(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	$w('#randomUserCache').value = '{"userCache":[]}';
	$w('#randomUserCache').resetValidityIndication();
}

export function btnClearParamObject_click(event) {
	$w('#boxParamObject').value = '{}';
	$w('#boxParamObject').resetValidityIndication();
}

export function btnClearSeedUI_click(event) {
	$w('#seedSelected').value = '';
	$w('#seedSelected').resetValidityIndication();
	$w('#seedWhich').value = '';
	$w('#seedWhich').resetValidityIndication();
}

/**
*	Adds an event handler that runs when an input element's value
 is changed.
*	 @param {$w.Event} event
*/
export function swtchUSAonly_change(event) {
	let paramObject = JSON.parse($w('#boxParamObject').value);

	if($w("#swtchUSAonly").checked){
		delete paramObject.nat;
	}else{
		paramObject.nat = "EEMPTY";
	}


	$w('#boxParamObject').value = JSON.stringify(paramObject,undefined,4);
}

/**
 *	Adds an event handler that runs when the element is clicked.
 *	 @param {$w.MouseEvent} event
 */
export function btnClearFetched_click(event) {
	$w('#randomuserDOTme').value = '';
	$w('#randomuserDOTme').resetValidityIndication();
}

/**
 *	Adds an event handler that runs when the element is clicked.
 *	 @param {$w.MouseEvent} event
 */
export function btnContactInfoFromRandom_click(event) {
	doContactInfoFromRandom(); 
}

export async function doContactInfoFromRandom(){
	let thisParamObject = {};
	thisParamObject.chkbxKeyArray = $w('#chkbxContactAttributes').value;
	$w('#ddInputKey').value = '';
	$w('#ddInputKey').resetValidityIndication();
	$w('#objectOnDeck').value = '';
	$w('#objectOnDeck').resetValidityIndication();
	doShowHideOnDeckObject();
	if(thisParamObject.chkbxKeyArray.length === 0){
		$w('#codePrepContact').value = "Error: at least one Checkbox Attribute must be selected. No action taken, please try again or ask for assistance.";
		return;
	}
	let thisRandomUserDotMeJSON = $w('#randomuserDOTme').value;
	// console.log(thisParamObject);
	// console.log(thisRandomUserDotMeJSON);
	let response = "NOT CORRECT: nothing from the backend...";
	response = await composeWixContactCode(thisRandomUserDotMeJSON, thisParamObject);
	//console.log('[~LINE 596 FRONT]result: ');
	//console.log(response);
	let newResponse = {};
	newResponse.contactInfo = response.info;
	// $w('#codePrepContact').value = JSON.stringify(response,undefined,4);
	$w('#codePrepContact').value = JSON.stringify(newResponse,undefined,4);
	// $w('#codePrepContact').value = response.toString();
	// $w('#codePrepContact').value = JSON.stringify(response,undefined,4);
}

export function doShowHideOnDeckObject(paramObject = {}){
	let currentObject = JSON.stringify($w('#codePrepContact').value,undefined,4);
	let titleStringWas = $w("#objectOnDeckTitle").text;
	let titleKey = $w('#ddInputKey').value.indexOf('emailThis') < 0 ? "PPENDING" : "Email";
	titleKey = $w('#ddInputKey').value.indexOf('phoneThis') < 0 ? titleKey : "Phone";
	titleKey = $w('#ddInputKey').value.indexOf('addressThis') < 0 ? titleKey : "Address";
	titleKey = $w('#ddInputKey').value.indexOf('labelKeyThis') < 0 ? titleKey : "Label";

	let currentCountArray = [];
	let currentCount = 0;
	let currentCountPathArray = "PPENDING";
	let currentCountString = '[[current count unavailable]]';
	if(titleKey !== "PPENDING"){
		currentCountPathArray = titleKey === "Email" ? "emails" : currentCountPathArray;
		currentCountPathArray = titleKey === "Phone" ? "phones" : currentCountPathArray;
		currentCountPathArray = titleKey === "Address" ? "addresses" : currentCountPathArray;
		currentCountPathArray = titleKey === "Label" ? "labelKeys" : currentCountPathArray;
		// currentCountPathArray += ".length";
		currentCountPathArray = "currentObject.info";
		let info = eval(currentCountPathArray);
		if(typeof info === 'undefined'){
			currentCount = -1;
		}
		if(currentCount >= 0){
			currentCountPathArray = "currentObject.info" + currentCountPathArray;
			//console.log(currentCountPathArray)
			currentCountArray = eval(currentCountPathArray);
			if(typeof currentCountArray === 'undefined'){
				currentCount = -1;
			}else{
				currentCount = currentCountArray.length;
			}
		}
		//console.log('currentCount: ' + currentCount)
		currentCount = currentCount >= 0 ? currentCount : 0;
		//console.log('currentCount: ' + currentCount)
		if(typeof currentCount === undefined){
			currentCount = 0;
		}
		currentCountString = '[[current: ' + currentCount + ']';
		currentCount++;
		currentCountString += '[next: ' + currentCount + ']]';
		$w('#ddOnDeckIndex').value = currentCount.toString()
	}
	//console.log('$w(#ddInputKey).value.indexOf(emailThis): ' + $w('#ddInputKey').value.indexOf('emailThis'));
	//console.log('$w(#ddInputKey).value: ' + $w('#ddInputKey').value);
	//console.log('titleStringWas: ' + titleStringWas);
	//console.log('titleKey: ' + titleKey);
	//console.log('titleString: ' + titleString);

	// let showIdArray = ['#objectOnDeckTitle','#objectOnDeck','#ddOnDeckIndex','#btnOnDeckObjectAppend','#btnOnDeckObjectClear'];
	let showIdArray = ['#objectOnDeckTitle'];
	let titleString = showIdArray.shift();
	titleString = titleKey;
	titleString += ' ' + currentCountString;
	// let hideIdArray = ['#codePrepContact'];
	let hideIdArray = [];
	
	let ddShowOnDeckArray = ["info.labelKeyThis.labelKey","info.emailThis.email","info.emailThis.tag","info.emailThis.primary","info.phoneThis.phone","info.phoneThis.tag","info.phoneThis.primary","info.addressThis.tag","info.addressThis.address.streetAddress.name","info.addressThis.address.streetAddress.number","info.addressThis.address.streetAddress.apt","info.addressThis.address.addressLine2","info.addressThis.address.city","info.addressThis.address.subdivision","info.addressThis.address.postalCode","info.addressThis.address.country","info.addressThis.address.location.latitude","info.addressThis.address.location.longitude","info.addressThis.address.formatted"];
	
	let objectTypeEmailArray = ['info.emailThis.email','info.emailThis.tag','info.emailThis.primary'];
	let objectTypePhoneArray = ['info.phoneThis.phone','info.phoneThis.tag','info.phoneThis.primary'];
	let objectTypeAddressArray = ['info.addressThis.tag','info.addressThis.address.streetAddress.name','info.addressThis.address.streetAddress.number','info.addressThis.address.streetAddress.apt','info.addressThis.address.addressLine2','info.addressThis.address.city','info.addressThis.address.subdivision','info.addressThis.address.postalCode','info.addressThis.address.country','info.addressThis.address.location.latitude','info.addressThis.address.location.longitude','info.addressThis.address.formatted']

	
	let showOnDeckByDropDown = ddShowOnDeckArray.includes($w('#ddInputKey').value);
	let showOnDeckByNonEmpty = $w('#objectOnDeck').value.length > 0 ? true : false;

	let doContinue = titleStringWas.indexOf(titleKey) >= 0 ? true : false;
	doContinue = showOnDeckByNonEmpty === false ? true : doContinue;
	if(!doContinue){
		titleString = titleStringWas + ' [STILL] (will clear Key)'
		// $w('#codePrepContact').value = titleString;
		$w('#objectOnDeckTitle').text = titleString;
		return;
	}
	// $w('#codePrepContact').value = titleString;
	$w('#objectOnDeckTitle').text = titleString;

	let showFinal = false;
	showFinal = showOnDeckByDropDown ? true : showFinal;
	showFinal = showOnDeckByNonEmpty ? true : showFinal;
	// $w('#codePrepContact').value += '\n' + $w('#ddInputKey').value;
	// $w('#codePrepContact').value = '\nshowOnDeckByDropDown: ';
	// $w('#codePrepContact').value = '\nshowOnDeckByNonEmpty: ';
	if(showFinal){
		showIdArray.forEach(element => {
			$w(element).show();
		});	
		hideIdArray.forEach(element => {
			$w(element).hide();
		});
		let lightboxParamObject = {};
		lightboxParamObject.titleKey = titleKey;
		// wixWindow.openLightbox("manageContactArrays", {
		// 	"path": $w('#ddInputKey').value,
		// 	"key": titleKey,
		// 	"currentContactObjectJSON": JSON.parse($w('#codePrepContact').value)
		// })
		// .then( (data) => {
		// 	// $w('#objectOnDeck').value = "RETURNED";//data.listTitle;
		// 	$w('#objectOnDeck').value = data.listTitle;
		// 	 $w('#inputValue').value = data.selectedIndex;
		// 	 $w('#Z').value = data.buttonId;
		// } );
 
	}
	else {
		showIdArray.forEach(element => {
			$w(element).hide();
		});	
		hideIdArray.forEach(element => {
			$w(element).show();
		});	
	}
}


export function btnOnDeckObjectAppend_click(event) {
	let result = doAppendKVPtoContactInfo("btnOnDeckObjectAppend");
}

export function doAllClear(layoutObjectIdArrayParam = []){
	// let wrapping = $w("#codeHolder").wrap; // "soft"
	// $w('#errorTextBox').show();
	// $w('#errorTextBox').value = "let wrapping = $w('#codeHolder').wrap; [result: " + wrapping + "]";
	let layoutObjectIdArray = [];
	if(typeof layoutObjectIdArrayParam === 'string'){
		layoutObjectIdArray.push(layoutObjectIdArrayParam);
	}else{
		layoutObjectIdArray = layoutObjectIdArrayParam;
	}
	layoutObjectIdArray.forEach(element => { 
		let myType = $w(element).type; // "$w.Type"
		if(myType === '$w.Text'){
			$w(element).text = 'EEMPTY';
			//console.log('Text ' + myType);
		}else{
			//console.log('Other ' + myType);
			$w(element).value = '';
			$w(element).resetValidityIndication();
		}
	})
}


/**
 *	Adds an event handler that runs when the element is clicked.
 *	 @param {$w.MouseEvent} event
 */
export function btnOnDeckObjectClear_click(event) {
	doAllClear(["#objectOnDeck","#objectOnDeckTitle"]);
	// doShowHideOnDeckObject(); //might be able to fix, but lots of huzuma for something pretty much abandoned
}

/**
*	Adds an event handler that runs when an input element's value
 is changed.
*	 @param {$w.Event} event
*/
export function ddInputKey_change(event) {
	// console.log($w('#ddInputKey').value);
	doShowHideOnDeckObject();
}

export function objectOnDeck_change(event) {
		doShowHideOnDeckObject();
}

export function btnClearCodePrepContact_click(event) {
	doAllClear("#codePrepContact");
}

export function launchLightBox(key){
	let wixContact = JSON.parse($w('#codePrepContact').value);
	//console.log('[~LINE 834]wixContact: ');
	//console.log(wixContact);
	//<no validation of path at this time>
	let keyArray = [];
	// let pathPrefix = 'info'; 
	let pathPrefix = 'contactInfo'; 
	if(key === 'labelKeys'){
		// keyArray = wixContact[key] ;
		keyArray = wixContact[pathPrefix][key] ;
	}else{
		keyArray = wixContact[pathPrefix][key]; 
	}
	//console.log('[~LINE 843]keyArray:');
	//console.log(keyArray);
	//</no validation of path at this time>
	wixWindow.openLightbox("manageContactArrays", {
			"path": key,
			"key": key,
			"currentContactObjectJSON": keyArray
		})
		.then( (data) => {
			// $w('#objectOnDeck').value = "RETURNED";//data.listTitle;
			$w('#objectOnDeck').value = data.updatedObjectJSON;
			 $w('#inputValue').value = data.selectedIndex;
			 $w('#Z').value = data.buttonId;
			 let doAbort = data.buttonId.indexOf('Abort') < 0 ? false : true;
			 let doUpdate = data.buttonId.indexOf('Update') < 0 ? false : true;
			//  doAbort = data.buttonId.indexOf('Abort') < 0 ? false : doAbort;
			//  doUpdate = data.buttonId.indexOf('Update') < 0 ? false : doUpdate;
			 let message = doAbort && doUpdate ? "Conflict: Both:" : "PPENDING";
			 message = !doAbort && !doUpdate ? "Conflict: Neither:" : message;
			 message = doAbort ? "Abort:" : message;
			 message = doUpdate ? "Update:" : message;
			 message += key;
			 $w('#objectOnDeckTitle').show();
			 $w('#objectOnDeckTitle').text = message;
			 if(doUpdate){
				 console.log('[~LINE875] if(doUpdate): entered ')
				// let pathPrefix = 'info';
				let pathPrefix = 'contactInfo';
				let currentContactObject = JSON.parse($w('#codePrepContact').value)
				$w('#codePrepContact').value = ''; 
				 if(key === 'phones'){
					//console.log('[~LINE879] if(key === phones): entered ');
					//console.log(currentContactObject);
					//console.log(JSON.parse($w('#objectOnDeck').value));
					// currentContactObject['info'][key] = JSON.parse($w('#objectOnDeck').value);
					currentContactObject[pathPrefix][key] = JSON.parse($w('#objectOnDeck').value);
					//console.log(currentContactObject);
					$w('#codePrepContact').value = JSON.stringify(currentContactObject,undefined,4); 
				 }
				 if(key === 'emails'){
					//console.log('[~LINE887] if(key === emails): entered ');
					//console.log(currentContactObject);
					//console.log(JSON.parse($w('#objectOnDeck').value));
					// currentContactObject['info'][key] = JSON.parse($w('#objectOnDeck').value);
					currentContactObject[pathPrefix][key] = JSON.parse($w('#objectOnDeck').value);
					//console.log(currentContactObject);
					$w('#codePrepContact').value = JSON.stringify(currentContactObject,undefined,4); 
				 }
				 if(key === 'labelKeys'){
					//console.log('[~LINE895] if(key === labelKeys): entered ')
					// currentContactObject[key] = JSON.parse($w('#objectOnDeck').value);
					currentContactObject[pathPrefix][key] = JSON.parse($w('#objectOnDeck').value);
					$w('#codePrepContact').value = JSON.stringify(currentContactObject,undefined,4) 
				 }
				 if(key === 'addresses'){
					//console.log('[~LINE900] if(key === labelKeys): entered ')
					currentContactObject[pathPrefix][key] = JSON.parse($w('#objectOnDeck').value);
					$w('#codePrepContact').value = JSON.stringify(currentContactObject,undefined,4) 
				 }
			 }
		} );
}

// ø <launchLightBox("KIND")>
export function btnManageEmails_click(event) {
	launchLightBox("emails")
}

export function btnManageAddresses_click(event) {
	launchLightBox("addresses")
}

export function btnManagePhones_click(event) {
	launchLightBox("phones")
}

export function btnManageLabels_click(event) {
	launchLightBox("labelKeys")
}
// ø </launchLightBox("KIND")>

/**
 *	Adds an event handler that runs when the element is clicked.
 *	 @param {$w.MouseEvent} event
 */
// ø <Random User UI>
export function btnTgglChkBoxRandom_click(event) {
	let chkbxOptions = $w("#chkbxContactAttributes").options;
	let chkbxCurrent = $w("#chkbxContactAttributes").value;
	let chkbxToggleTo = [];;
	let displayObject = {};
	let valueThis = '';
	chkbxOptions.forEach(element => {
		valueThis = element.value;
		if(!chkbxCurrent.includes(valueThis)){
			chkbxToggleTo.push(valueThis);
		}
	});
	$w("#chkbxContactAttributes").value = chkbxToggleTo;
}
// ø </Random User UI>

// ø <----------- <getCurrentContactLables Front-End>  ----------->
export async function doCreateContact() {
    let wixContactInfo = JSON.parse($w('#codePrepContact').value);
    let paramObjectThis = {};
    paramObjectThis.contactInfo = wixContactInfo.contactInfo;
	console.log("[~LINE 864]paramObjectThis.contactInfo: ")
	console.log(paramObjectThis)
	console.log(paramObjectThis.contactInfo)
	let wixContact = await steamdaCreateContactFunction(paramObjectThis);
	console.log('[~LINE 867]wixContact: ');
	console.log(wixContact);
	$w('#crmContactId').value = wixContact._id;
	$w('#inputRevision').value = wixContact.revision;
	$w('#contactCurrent').value = JSON.stringify(wixContact,undefined,4);
}
// ø <----------- </getCurrentContactLables Front-End> ----------->


// // ø <----------- <getCurrentContactLables Front-End>  ----------->
// export async function doRenameLablesYIKES() {
//     let wixContactInfo = JSON.parse($w('#codePrepContact').value);
//     let paramObjectThis = {};
// 	paramObjectThis.contactIdentifiers = {};
// 	paramObjectThis.contactIdentifiers.contactId = $w('#crmContactId').value;
// 	paramObjectThis.contactIdentifiers.revision = $w('#inputRevision').value;
	
//     paramObjectThis.contactInfo = wixContactInfo.contactInfo;
// 	console.log("[~LINE 897]paramObjectThis.contactInfo: ")
// 	console.log(paramObjectThis)
// 	// console.log(paramObjectThis.contactInfo)
// 	let wixContact = await steamdaRenameLabelFunction(paramObjectThis);
// 	console.log('[~LINE 901]wixContact: ');
// 	console.log(wixContact);
// 	$w('#crmContactId').value = wixContact._id;
// 	$w('#inputRevision').value = wixContact.revision;
// 	$w('#contactCurrent').value = JSON.stringify(wixContact,undefined,4);
// }
// // ø <----------- </getCurrentContactLables Front-End> ----------->
/**
 *	Adds an event handler that runs when the element is clicked.
 *	 @param {$w.MouseEvent} event
 */
export function btnCreateContact_click(event) {
	doCreateContact(); 
}


export function doConveyContactCurrentForUpdate(){
	let KLUDGE = $w('#contactCurrent').value;
	let currentContact = JSON.parse(KLUDGE);
	let SOME_CHECKBOX_FOR_EXCLUDE_EXTENDED_FIELDS = false;
	if(SOME_CHECKBOX_FOR_EXCLUDE_EXTENDED_FIELDS){
		delete currentContact.extendedFields
	}
	let contactNew = {};
	contactNew.contactInfo = currentContact.info;
	$w('#codePrepContact').value = JSON.stringify(contactNew,undefined,4);
}

/**
 *	Adds an event handler that runs when the element is clicked.
 *	 @param {$w.MouseEvent} event
 */
export function btnRemoveCheckedFromPrep_click(event) {
	doRemoveCheckedFromPrep();
}

// ø <----------- <doRemoveCheckedFromPrep>  ----------->
export function doRemoveCheckedFromPrep() {
    let removeByAction = $w('#radioEmptyOrDelete').value;
    let currentContact = JSON.parse($w('#codePrepContact').value);
    let checkboxArray = $w('#chkbxRemoveCheckedOne').value;
    Array.prototype.push.apply(checkboxArray,$w('#chkbxRemoveCheckedTwo').value)
    for (let index = 0; index < checkboxArray.length; index++) {
        const element = checkboxArray[index];

        // checkboxArray.forEach(element => {
        console.log('Overall: ' + removeByAction + ': ' + element);
        switch (element) {
            case 'name':
                if (removeByAction === 'DELETE') {
                    // console.log(removeByAction + '[testing]: ' + element);
                    delete currentContact.contactInfo.name;
                } else if (removeByAction === 'EMPTY') {
                    // console.log(removeByAction + '[testing]: ' + element);
                    currentContact.contactInfo.name = {};
                } else {
                    // console.log(removeByAction + ': ' + element);
                    console.log('DEFAULT: Switch does NOT support the action for the element: element & action: [' + element + ' & ' + removeByAction + ']');
                }
                break;
            
			case 'picture':
                if (removeByAction === 'DELETE') {
                    // console.log(removeByAction + '[testing]: ' + element);
                    delete currentContact.contactInfo.picture;
                } else if (removeByAction === 'EMPTY') {
                    // console.log(removeByAction + '[testing]: ' + element);
                    currentContact.contactInfo.picture = {};
                } else {
                    // console.log(removeByAction + ': ' + element);
                    console.log('DEFAULT: Switch does NOT support the action for the element: element & action: [' + element + ' & ' + removeByAction + ']');
                }
                break;

            case 'nonname':
                if (removeByAction === 'DELETE') {
                    // console.log(removeByAction + '[working]: ' + element);
					delete currentContact.contactInfo.company;
					delete currentContact.contactInfo.jobTitle;
					delete currentContact.contactInfo.locale;
					delete currentContact.contactInfo.birthdate;
                } else if (removeByAction === 'EMPTY') {
                    // console.log(removeByAction + '[working]: ' + element);
					currentContact.contactInfo.company = "";
					currentContact.contactInfo.jobTitle = "";
					currentContact.contactInfo.locale = "";
					currentContact.contactInfo.birthdate = "";
				} else {
                    // console.log(removeByAction + ': ' + element);
                    console.log('DEFAULT: Switch does NOT support the action for the element: element & action: [' + element + ' & ' + removeByAction + ']');
                }
                break;

            case 'emails':
                if (removeByAction === 'DELETE') {
                    // console.log(removeByAction + '[working]: ' + element);
                    delete currentContact.contactInfo.emails;
                } else if (removeByAction === 'EMPTY') {
                    // console.log(removeByAction + '[working]: ' + element);
                    currentContact.contactInfo.emails = [];
                } else {
                    // console.log(removeByAction + ': ' + element);
                    console.log('DEFAULT: Switch does NOT support the action for the element: element & action: [' + element + ' & ' + removeByAction + ']');
                }
                break;
				
            case 'phones':
                if (removeByAction === 'DELETE') {
                    // console.log(removeByAction + '[working]: ' + element);
                    delete currentContact.contactInfo.phones;
                } else if (removeByAction === 'EMPTY') {
                    // console.log(removeByAction + '[working]: ' + element);
                    currentContact.contactInfo.phones = [];
                } else {
                    // console.log(removeByAction + ': ' + element);
                    console.log('DEFAULT: Switch does NOT support the action for the element: element & action: [' + element + ' & ' + removeByAction + ']');
                }
                break;

            case 'addresses':
                if (removeByAction === 'DELETE') {
                    // console.log(removeByAction + '[working]: ' + element);
                    delete currentContact.contactInfo.addresses;
                } else if (removeByAction === 'EMPTY') {
                    // console.log(removeByAction + '[working]: ' + element);
                    currentContact.contactInfo.addresses = [];
                } else {
                    // console.log(removeByAction + ': ' + element);
                    console.log('DEFAULT: Switch does NOT support the action for the element: element & action: [' + element + ' & ' + removeByAction + ']');
                }
                break;

            case 'labelKeys':
                if (removeByAction === 'DELETE') {
                    // console.log(removeByAction + '[working]: ' + element);
                    delete currentContact.contactInfo.labelKeys;
                } else if (removeByAction === 'EMPTY') {
                    // console.log(removeByAction + '[working]: ' + element);
                    currentContact.contactInfo.labelKeys = [];
                } else {
                    // console.log(removeByAction + ': ' + element);
                    console.log('DEFAULT: Switch does NOT support the action for the element: element & action: [' + element + ' & ' + removeByAction + ']');
                }
                break;

            case 'extendedFields':
                if (removeByAction === 'DELETE') {
                    // console.log(removeByAction + '[working]: ' + element);
                    delete currentContact.contactInfo.extendedFields;
                } else if (removeByAction === 'EMPTY') {
                    // console.log(removeByAction + '[working]: ' + element);
                    currentContact.contactInfo.extendedFields = {};
                } else {
                    // console.log(removeByAction + ': ' + element);
                    console.log('DEFAULT: Switch does NOT support the action for the element: element & action: [' + element + ' & ' + removeByAction + ']');
                }
                break;

            default:
                console.log('DEFAULT: Switch does NOT support the element, regardless of action: element & action: [' + element + ' & ' + removeByAction + ']');
                break;
        }
    }//END for (let index = 0; index < checkboxArray.length; index++)
    $w('#chkbxRemoveCheckedOne').value = [];
    $w('#chkbxRemoveCheckedOne').resetValidityIndication();
    $w('#chkbxRemoveCheckedTwo').value = [];
    $w('#chkbxRemoveCheckedTwo').resetValidityIndication();
    $w('#radioEmptyOrDelete').value = '';
    $w('#radioEmptyOrDelete').resetValidityIndication();
    $w('#codePrepContact').value = JSON.stringify(currentContact, undefined, 4);
	
}//END doRemoveCheckedFromPrep
// ø <----------- </doRemoveCheckedFromPrep> ----------->


/**
 *	Adds an event handler that runs when the element is clicked.
 *	 @param {$w.MouseEvent} event
 */
export function btnUpdateContact_click(event) {
	doUpdateContact(); 
}

// ø <----------- <getCurrentContactLables Front-End>  ----------->
export async function doUpdateContact() {
    let wixContactInfo = JSON.parse($w('#codePrepContact').value);
	console.log("[~LINE 1060]wixContactInfo.contactInfo [within whole below]: ")
	console.log(wixContactInfo);
    let paramObjectThis = {};
	paramObjectThis.contactIdentifiers = {};
	paramObjectThis.contactIdentifiers.contactId = $w('#crmContactId').value;
	paramObjectThis.contactIdentifiers.revision = $w('#inputRevision').value;
    paramObjectThis.contactInfo = wixContactInfo.contactInfo;
	console.log("[~LINE 1060]paramObjectThis.contactInfo: ")
	console.log(paramObjectThis)
	console.log(paramObjectThis.contactInfo);
	// $w('#errorTextBox').value = 'TESING: doUpdateContact()';
	// return;
	let wixContact = await streamdaUpdateContactFunction(paramObjectThis);
	console.log('[~LINE 1064]wixContact: ');
	console.log(wixContact);
	$w('#crmContactId').value = wixContact._id;
	$w('#inputRevision').value = wixContact.revision;
	$w('#contactCurrent').value = JSON.stringify(wixContact,undefined,4);
}
// ø <----------- </getCurrentContactLables Front-End> ----------->



/**
 *	Adds an event handler that runs when the element is clicked.
 *	 @param {$w.MouseEvent} event
 */
export function btnConveyContactForUpdating_click(event) {
	doConveyContactCurrentForUpdate();
}