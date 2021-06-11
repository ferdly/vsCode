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
	let transformedAttributes = [];
	resolvedResponse.locale = 'en-US';
	// transformedAttributes.push(['locale',"literal 'en-US'"]);
	transformedAttributes.push(["locale: literal 'en-US'"]);
	let postalCode = '00000' + resolvedResponse.location.postcode.toString();
	postalCode = postalCode.substr(-5);
	resolvedResponse.location.postalCode = postalCode;
	// transformedAttributes.push(['postalCode','ensure 5 and string - left postcode as number']);
	transformedAttributes.push(['postalCode: ensure 5 and string - left postcode as number']);
	let birthdate = resolvedResponse.dob.date.substr(0,10);
	resolvedResponse.birthdate = birthdate;
	// transformedAttributes.push(['birthdate','dob.date to left 10. no change to original']);
	transformedAttributes.push(['birthdate: dob.date to left 10. no change to original']);
	let stateAbbrvObject = {"Alabama":"AL","Alaska":"AK","American Samoa":"AS","Arizona":"AZ","Arkansas":"AR","California":"CA","Colorado":"CO","Connecticut":"CT","Delaware":"DE","District Of Columbia":"DC","Federated States Of Micronesia":"FM","Florida":"FL","Georgia":"GA","Guam":"GU","Hawaii":"HI","Idaho":"ID","Illinois":"IL","Indiana":"IN","Iowa":"IA","Kansas":"KS","Kentucky":"KY","Louisiana":"LA","Maine":"ME","Marshall Islands":"MH","Maryland":"MD","Massachusetts":"MA","Michigan":"MI","Minnesota":"MN","Mississippi":"MS","Missouri":"MO","Montana":"MT","Nebraska":"NE","Nevada":"NV","New Hampshire":"NH","New Jersey":"NJ","New Mexico":"NM","New York":"NY","North Carolina":"NC","North Dakota":"ND","Northern Mariana Islands":"MP","Ohio":"OH","Oklahoma":"OK","Oregon":"OR","Palau":"PW","Pennsylvania":"PA","Puerto Rico":"PR","Rhode Island":"RI","South Carolina":"SC","South Dakota":"SD","Tennessee":"TN","Texas":"TX","Utah":"UT","Vermont":"VT","Virgin Islands":"VI","Virginia":"VA","Washington":"WA","West Virginia":"WV","Wisconsin":"WI","Wyoming":"WY"};
	let state = resolvedResponse.location.state
	let subdivision = stateAbbrvObject[state];
	resolvedResponse.location.subdivision = subdivision;
	// transformedAttributes.push(['subdivision',"2letter version of 'state' - original not removed"]);
	transformedAttributes.push(["subdivision: 2letter version of 'state' - original not removed"]);
	let company = resolvedResponse.location.street.name;
	company = company.substr(0,company.indexOf(" "));//first word, how about all but last, but pretty good
	let bussnessKindArray = ['Incorporated','Limited','Corporation','University','College','Auto Parts','Associates','Restaurant','Stores'];
	company += ' ' + bussnessKindArray[Math.floor(Math.random() * bussnessKindArray.length)];
	resolvedResponse.company = company;
	// transformedAttributes.push(['Company','Street name + random business kind']);
	transformedAttributes.push(['Company: Street name + random business kind']);
	let jobTitleArray = ['Manager','Sales','IT','Maintenance','Supervisor','Graphic Design','Accounting','Human Resources'];
	let jobTitle = jobTitleArray[Math.floor(Math.random() * jobTitleArray.length)];
	resolvedResponse.jobTitle = jobTitle;
	// transformedAttributes.push(['jobTitle','random jobTitle']);
	transformedAttributes.push(['jobTitle: random jobTitle']);
	let emailPrimary = 'qiqgroup+' + resolvedResponse.name.first.toLowerCase() + '@gmail.com';
	resolvedResponse.emailPrimary = emailPrimary;
	// transformedAttributes.push(['emailPrimary','qiqgroup + firstName - real so that enrollment happens']);
	transformedAttributes.push(['emailPrimary: qiqgroup + firstName - real so that enrollment happens']);
	let addressLine2TypeArray = ['#','Suite','Box']
	let addressLine2 = Math.floor(Math.random() * 1000).toString();
	let addressLine2Type = Number(addressLine2) < 40 ? 'Floor' : addressLine2TypeArray[Math.floor(Math.random() * addressLine2TypeArray.length)];
	addressLine2 = addressLine2Type + ' ' + addressLine2;
	resolvedResponse.location.addressLine2 = addressLine2;
	// transformedAttributes.push(['addressLine2','random number and random type']);
	transformedAttributes.push(['addressLine2: random number and random type']);
	// let addressLine2TypeArray = ['#','Suite','Box']
	let apt = Math.floor(Math.random() * 1000).toString();
	// let addressLine2Type = Number(addressLine2) < 40 ? 'Floor' : addressLine2TypeArray[Math.floor(Math.random() * addressLine2TypeArray.length)];
	// addressLine2 = addressLine2Type + ' ' + addressLine2;
	resolvedResponse.location.street.apt = apt;
	// transformedAttributes.push(['street.apt','random number more useful than addressLine2']);
	transformedAttributes.push(['street.apt: random number more useful than addressLine2']);
	let gender = resolvedResponse.gender;
	// gender = gender = gender.substr(0,1).toUpperCase() + gender.substr(1).toLowerCase();
	gender = 'custom.gender-' + gender;
	// let addressLine2Type = Number(addressLine2) < 40 ? 'Floor' : addressLine2TypeArray[Math.floor(Math.random() * addressLine2TypeArray.length)];
	// addressLine2 = addressLine2Type + ' ' + addressLine2;
	resolvedResponse.gender = gender;
	// transformedAttributes.push(['street.apt','random number more useful than addressLine2']);
	transformedAttributes.push(['gender: changed to labelKey (original overloaded because of other code)']);
	// console.log(('transformedAttributes: '))
	// console.log((transformedAttributes))
	// let transformedAttributes = [['locale','literal'],['postalCode','ensure 5 and string'],[['birthdate'],['dob.date to left 10'],[['subdivision'],['2letter vesion of "state" (not removed)'],[['Company'],['Street name + random business kind'],[['jobTitle'],['random jobTitle']]
	resolvedResponse.developer = {};
	resolvedResponse.developer.transformedAttributes = transformedAttributes;

	//console.log("ONE.b: resolvedResponse after 'await getJSON'");
	//console.log(resolvedResponse);
	return resolvedResponse;
	
}