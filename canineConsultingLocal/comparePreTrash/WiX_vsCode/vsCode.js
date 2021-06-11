// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/1-hello-world
import wixWindow from 'wix-window';
import { formattedAddressString } from 'backend/utility.jsw'
import { jsonToTable } from 'backend/htmlTableFromJSON';
import { multiply } from 'backend/htmlTableFromJSON';
import {local, session, memory} from 'wix-storage';

 

// $w.onReady(function () {
// 	// Write your JavaScript here

// 	// To select an element by ID use: $w("#elementID")

// 	// Click "Preview" to run your code
// });
$w.onReady( function () {
    //ZXZZXZRefactorToDo
    //ZXZ#recievedObjectJSON
    //ZXZ#recievedCountZXZ77_ToNumber
    //ZXZ#recievedObjectJSON
    //ZXZ#coreImplementationJSONZXZ
	/*currentContactObjectJSON.info.emails"*/
   let received = wixWindow.lightbox.getContext();
   $w('#recievedObjectJSON').value = JSON.stringify(received,undefined,4);
   manageRecievedObject()
	// $w('#selectListData').value = $w('#recievedObjectJSON').value;
 } );

 export function manageRecievedObject(){
	let recievedObject = JSON.parse($w('#recievedObjectJSON').value);
	let key = recievedObject.key;
	let currentContactObject = recievedObject.currentContactObjectJSON;
    currentContactObject.forEach(elementObject => {
        let keysArray = Object.keys(elementObject);
        if(keysArray.includes('tag')){
            elementObject.tag = elementObject.tag.toUpperCase();
            let toMobileArray = ['CELL','CELLULAR','SMARTPHONE','SMART PHONE'];
            let toMainArray = ['LOGIN'];
            let toUntaggedArray = ['OTHER'];
            elementObject.tag = toMobileArray.includes(elementObject.tag) ? 'MOBILE' : elementObject.tag;
            elementObject.tag = toUntaggedArray.includes(elementObject.tag) ? 'UNTAGGED' : elementObject.tag;
            elementObject.tag = toMainArray.includes(elementObject.tag) ? 'MAIN' : elementObject.tag;
        }
        console.log(keysArray);
    });
    let log = "instantiated";
	$w('#selectListData').value = JSON.stringify(currentContactObject,undefined,4);
    memory.setItem("selectListData", JSON.stringify(currentContactObject));
    log = 'memory.getItem("selectListData"): ';
    log += memory.getItem("selectListData");
    console.log(log);
    memory.setItem("recievedKind", key);
    //ZXZ#recievedKindZXZ777
    log = 'memory.getItem("recievedKind"): ';
    log += memory.getItem("recievedKind");
    //ZXZ#recievedKindZXZ777
    console.log(log);
	$w('#txtSelectListByKind').text = 'Select List' + key;
	$w('#txtEmailPhoneByKind').text = 'Manage Object' + key;

	let nextIndex = currentContactObject.length;
    memory.setItem("recievedCount", (nextIndex - 1).toString());
    log = 'memory.getItem("recievedCount"): ';
    log += memory.getItem("recievedCount");
    console.log(log);

	// $w('#selectListData').value = $w('#recievedObjectJSON').value;
	// let titleKey = recievedObject.key;
	// $w('#recievedPath').value = 'HAPPY' + recievedObject.path;
	// $w('#txtSelectListByKind').text = 'List ' + recievedObject.key + ' Element Array';
	// let nextIndex = 49; 
	// if(titleKey === 'Email'){
	// 		nextIndex = recievedObject.currentContactObjectJSON.info.emails.length; 
	// 	$w('#selectListData').value = JSON.stringify(recievedObject.currentContactObjectJSON.info.emails,undefined,4);
	// }
	// if(titleKey === 'Phone'){
	// 		nextIndex = recievedObject.currentContactObjectJSON.info.phones.length; 
	// 	$w('#selectListData').value = JSON.stringify(recievedObject.currentContactObjectJSON.info.phones,undefined,4);
	// }
	// if(titleKey === 'Address'){
	// 		nextIndex = recievedObject.currentContactObjectJSON.info.addresses.length; 
	// 	$w('#selectListData').value = JSON.stringify(recievedObject.currentContactObjectJSON.info.addresses,undefined,4);
	// }
	// if(titleKey === 'Label'){
	// 		nextIndex = recievedObject.currentContactObjectJSON.info.labelKeys.length; 
	// 	$w('#selectListData').value = JSON.stringify(recievedObject.currentContactObjectJSON.info.labelKeys,undefined,4);
	// }
	// // let nextIndex = JSON.parse($w('#selectIndexEmailPhone').value).length;
	let dropdownOptions = [];
	let indexString = '100';
	let optionsByIndex = [];
	let word = 'one hundred';
	let element = {};

	for (let index = 0; index < nextIndex; index++) {
		word = populateCurrentArrayByKind(index);
		indexString = index.toString();
		element = {};
		element.label = word;
		element.value = indexString;
		optionsByIndex.push(element);
	}
	element = {};
	element.label = 'new';
	element.value = nextIndex.toString();
	optionsByIndex.push(element);
	// console.warn('optionsByIndex: ');
	// console.warn(optionsByIndex);

	$w("#selectIndexEmailPhone").options = optionsByIndex;
	// // nextIndex = 5;
	$w("#selectIndexEmailPhone").value = nextIndex.toString();
	let paramObjectThis = {};
	paramObjectThis.state = {};
	paramObjectThis.state.action = 'RECEIVE';
	coreImplementation(paramObjectThis);
	$w("#btnNewUpdate").label = paramObjectThis.state.btnNewUpdateLabel;
	// $w('#coreImplementationJSON').value = JSON.stringify(paramObjectThis,undefined,4);
    memory.setItem("coreImplementationJSON", JSON.stringify(paramObjectThis));
    //ZXZ#coreImplementationJSONZXZ
    doSelectListDataTable();
 }//END manageRecievedObject()
 
export function stateById(wixId){
	if(wixId === 'kindEmailPhone' && memory.getItem("recievedKind") === 'emails'){
        //ZXZ#recievedKindZXZ777
		$w('#phemTag').options = [{label:"Other",value:"UNTAGGED"},{label:"Main",value:"MAIN"},{label:"Home",value:"HOME"},{label:"Work",value:"WORK"}];
	}
	if(wixId === 'kindEmailPhone' && memory.getItem("recievedKind") === 'phones'){
        //ZXZ#recievedKindZXZ777
		$w('#phemTag').options = [{label:"Other",value:"UNTAGGED"},{label:"Main",value:"MAIN"},{label:"Home",value:"HOME"},{label:"Cell",value:"MOBILE"},{label:"Work",value:"WORK"},{label:"Fax",value:"FAX"}];
	}
	$w("#manageArrayElements").changeState(wixId);
}

export function abortFrom(state){
	 wixWindow.lightbox.close( {
     "updatedObjectJSON": $w('#selectListData').value,
    //  "selectedIndex": $w("#selectIndexEmailPhone").value,
     "buttonId": state
   } );
 }


export function populateCurrentArrayByKind(index,kind = 'cardinality'){
	let wordsByIndexObjectJSON = "{\"wordsByIndex\":[{\"en\":\"zero\",\"es\":\"cero\"},{\"en\":\"one\",\"es\":\"uno\"},{\"en\":\"two\",\"es\":\"dos\"},{\"en\":\"three\",\"es\":\"tres\"},{\"en\":\"four\",\"es\":\"cuatro\"},{\"en\":\"five\",\"es\":\"cinco\"},{\"en\":\"six\",\"es\":\"seis\"},{\"en\":\"seven\",\"es\":\"siete\"},{\"en\":\"eight\",\"es\":\"ocho\"},{\"en\":\"nine\",\"es\":\"nueve\"},{\"en\":\"ten\",\"es\":\"diez\"},{\"en\":\"eleven\",\"es\":\"once\"},{\"en\":\"twelve\",\"es\":\"doce\"},{\"en\":\"thirteen\",\"es\":\"trece\"},{\"en\":\"fourteen\",\"es\":\"catorce\"},{\"en\":\"fifteen\",\"es\":\"quince\"},{\"en\":\"sixteen\",\"es\":\"dieciséis\"},{\"en\":\"seventeen\",\"es\":\"diecisiete\"},{\"en\":\"eighteen\",\"es\":\"dieciocho\"},{\"en\":\"nineteen\",\"es\":\"diecinueve\"},{\"en\":\"twenty\",\"es\":\"veinte\"},{\"en\":\"twenty-one\",\"es\":\"veintiuno\"},{\"en\":\"twenty-two\",\"es\":\"veintidós\"},{\"en\":\"twenty-three\",\"es\":\"veintitrés\"},{\"en\":\"twenty-four\",\"es\":\"veinticuatro\"},{\"en\":\"twenty-five\",\"es\":\"veinticinco\"},{\"en\":\"twenty-six\",\"es\":\"veintiséis\"},{\"en\":\"twenty-seven\",\"es\":\"veintisiete\"},{\"en\":\"twenty-eight\",\"es\":\"veintiocho\"},{\"en\":\"twenty-nine\",\"es\":\"veintinueve\"},{\"en\":\"thirty\",\"es\":\"treinta\"},{\"en\":\"thirty-one\",\"es\":\"treinta y uno\"},{\"en\":\"thirty-two\",\"es\":\"treinta y dos\"},{\"en\":\"thirty-three\",\"es\":\"treinta y tres\"},{\"en\":\"thirty-four\",\"es\":\"treinta y cuatro\"},{\"en\":\"thirty-five\",\"es\":\"treinta y cinco\"},{\"en\":\"thirty-six\",\"es\":\"treinta y seis\"},{\"en\":\"thirty-seven\",\"es\":\"treinta y siete\"},{\"en\":\"thirty-eight\",\"es\":\"treinta y ocho\"},{\"en\":\"thirty-nine\",\"es\":\"treinta y nueve\"},{\"en\":\"forty\",\"es\":\"cuarenta\"},{\"en\":\"forty-one\",\"es\":\"cuarenta y uno\"},{\"en\":\"forty-two\",\"es\":\"cuarenta y dos\"},{\"en\":\"forty-three\",\"es\":\"cuarenta y tres\"},{\"en\":\"forty-four\",\"es\":\"cuarenta y cuatro\"},{\"en\":\"forty-five\",\"es\":\"cuarenta y cinco\"},{\"en\":\"forty-six\",\"es\":\"cuarenta y seis\"},{\"en\":\"forty-seven\",\"es\":\"cuarenta y siete\"},{\"en\":\"forty-eight\",\"es\":\"cuarenta y ocho\"},{\"en\":\"forty-nine\",\"es\":\"cuarenta y nueve\"},{\"en\":\"fifty\",\"es\":\"cincuenta\"}]}";
	let wordsByIndexObject = JSON.parse(wordsByIndexObjectJSON);
	if(kind === 'cardinality'){
		index++;
	}
	let element = wordsByIndexObject.wordsByIndex[index];
	let word = element.en;
    return word;
}

export function button8_click(event) {
	stateById("kindEmailPhone");
}


export function button9_click(event) {
	stateById("selectList");
}

export function button11_click(event) {
	stateById("kindAddress");
}

export function button10_click(event) {
	stateById("kindLabel");
}

export function btnAbortOnLists_click(event) {
	let kind = "ABORT";
	abortFrom("#btnAbortOnLists")
}

export function btnAbortOnEmailPhone_click(event) {
	let kind = "REVERT";
	stateById("selectList");
	// abortFrom("#btnAbortOnEmailPhone")
}

export function btnAbortOnLabel_click(event) {
	let kind = "REVERT";
	stateById("selectList");
	// abortFrom("#btnAbortOnLabel")
}

export function btnAbortOnAddress_click(event) {
	let kind = "REVERT";
	stateById("selectList");
	// abortFrom("#btnAbortOnAddress")
}

export function button13_click(event) {
	stateById('dataOnly') 
}

export function btnEmailPostUpdate_click(event) {
	let kind = "PUT";
	let paramObjectThis = {};
	doPut(paramObjectThis);
    doSelectListDataTable();
	// abortFrom("#btnEmailPostUpdate")
	// stateById("selectList");
}

/**
*	Adds an event handler that runs when an input element's value
 is changed.
*	 @param {$w.Event} event
*/
export function selectIndexEmailPhone_change(event) {
	let selectedIndex = $w('#selectIndexEmailPhone').value;
	let maxIndex = 999;
	let labelThis = Number($w('#selectIndexEmailPhone').value) > Number(memory.getItem("recievedCount")) ? "New " : "Update ";
    //ZXZ#recievedCountZXZ777_ToNumber
	// let objectThis = JSON.parse($w('#coreImplementationJSON').value);
    let objectThis = memory.getItem("coreImplementationJSON");
    //ZXZ#coreImplementationJSONZXZ
	let kindThis = typeof objectThis.state.kindSingularTitle !== 'string' ? 'objectNot' : objectThis.state.kindSingularTitle;
	let append = ' [obj]'
	if(kindThis === 'jsonNotString'){
		// append = '[object]'
		// let objectThisWas = objectThis;
		// let objectThis = JSON.parse(objectThisWas);
		// kindThis = typeof objectThis.state.kindSingularTitle !== 'string' ? 'objectNot' : objectThis.state.kindSingularTitle;
	}
	$w("#btnNewUpdate").label = labelThis + kindThis;// + append;
}

export function btnListPostUpdate_click(event) {
	let kind = "POST";
	abortFrom("#btnListPostUpdate")
}

export function btnLabelPostUpdate_click(event) {
	let kind = "PUT";
	let paramObjectThis = {};
	doPut(paramObjectThis);
	// abortFrom("#btnLabelPostUpdate")
	// stateById("selectList");
}

export function btnAddressPostUpdate_click(event) {
	let kind = "PUT";
	let paramObjectThis = {};
	paramObjectThis.state = {};
	paramObjectThis.state.action = "PUT";
	paramObjectThis.state.kind = memory.getItem("recievedKind");
    //ZXZ#recievedKindZXZ777
	paramObjectThis.state.count = Number(memory.getItem("recievedCount"));
    //ZXZ#recievedCountZXZ777_ToNumber
	paramObjectThis.state.maxIndex = Number(memory.getItem("recievedCount"));
    //ZXZ#recievedCountZXZ777_ToNumber
	paramObjectThis.state.nextIndex = Number(memory.getItem("recievedCount")) + 1;
    //ZXZ#recievedCountZXZ777_ToNumber
	doPut(paramObjectThis);
    doSelectListDataTable();
	// abortFrom("#btnAddressPostUpdate")
	// stateById("selectList");
}

export function doPut(paramObject = {}){
	
    /**
         * Validate the data entry
         * Construct the Element Opject
         * Assign the Element Object by Index
         * Repopulate JSON box via stringify
         */


        console.log("holder for three blocks (called functions -- maybe only Addresses)")
        let kind = memory.getItem("recievedKind");
        //ZXZ#recievedKindZXZ777
        paramObject.new_updatedElement = {};
        let currentArray = JSON.parse($w('#selectListData').value);
        if($w('#phemPrimary').checked){
            currentArray.forEach(element => {
                delete element.primary;
            });
        }
        let indexObjectArray = Number($w('#selectIndexEmailPhone').value);
        console.log($w('#phemValue').value);
        console.log($w('#phemTag').value);
        console.log($w('#phemPrimary').checked);
        switch (kind) {
            case 'emails':
                console.log("Do: emails: " + kind)
                // stateById("kindEmailPhone");
                paramObject.new_updatedElement.email = $w('#phemValue').value;
                paramObject.new_updatedElement.tag = $w('#phemTag').value;
                if($w('#phemPrimary').checked){
                    paramObject.new_updatedElement.primary = true;
                }
                break;
    
            case 'phones':
                console.log("Do: phones: " + kind)
                // stateById("kindEmailPhone");
                paramObject.new_updatedElement.phone = $w('#phemValue').value;
                paramObject.new_updatedElement.tag = $w('#phemTag').value;
                if($w('#phemPrimary').checked){
                    paramObject.new_updatedElement.primary = true;
                }
                break;
    
            case 'addresses':
                console.log("Do: addresses: " + kind)
                // stateById("kindAddress");
                paramObject.new_updatedElement.address = {};
                paramObject.new_updatedElement.address.streetAddress = {};

                let lat = Number($w('#addrssLocationLatitude').value);
                let long = Number($w('#addrssLocationLongitude').value);
                let latlongValid = !isNaN(parseFloat(lat)) && isFinite(lat) != null ? true : false;
                latlongValid = !isNaN(parseFloat(long)) && isFinite(long) != null ? latlongValid : false;
                if(latlongValid){
                    paramObject.new_updatedElement.address.location = {};
                    paramObject.new_updatedElement.address.location.latitude = lat;
                    paramObject.new_updatedElement.address.location.longitude = long;
                }
                
                paramObject.new_updatedElement.tag = $w('#addrssTag').value;

                let streetRaw = $w('#addrssStreetAddress').value;
                let streetSplit = streetRaw.split(' ');
                let streetNumber = streetSplit.shift();
                // let streetAptMaybe = streetSplit[streetSplit.length - 1];
                // let streetApt = '';
                // if(/^\d+$/.test(streetAptMaybe)){
                //     streetApt = streetSplit.pop();
                // }
                let streetName = streetSplit.join(' ');
                // console.warn('streetNumber: ' + streetNumber);
                // console.warn('streetName: ' + streetName);
                // console.warn('streetApt: ' + streetApt);
                
    
                paramObject.new_updatedElement.address.streetAddress.number = streetNumber
                paramObject.new_updatedElement.address.streetAddress.name = streetName;
                // paramObject.new_updatedElement.address.streetAddress.apt = streetApt;
                if($w('#addrssAddressLine2').value.trim().length > 0){
                    paramObject.new_updatedElement.address.addressLine2 = $w('#addrssAddressLine2').value;
                }
                paramObject.new_updatedElement.address.city = $w('#addrssCity').value;
                // paramObject.new_updatedElement.address.city = 'DDuluth';
                paramObject.new_updatedElement.address.subdivision = $w('#addrssSubdivision').value;
                paramObject.new_updatedElement.address.postalCode = $w('#addrssPostalCode').value;
                // paramObject.new_updatedElement.address..location.latitude = $w('#addrssLocationLatitude').value;
                // paramObject.new_updatedElement.address..location.longitude = $w('#addrssLocationLongitude').value;
                break;
    
            case 'labelKeys':
                if(($w('#altDDlabelKey').value).length > 0){
                    paramObject.new_updatedElement.labelKey = $w('#altDDlabelKey').value;
                }else{
                    paramObject.new_updatedElement.labelKey = $w('#labelKey').value;
                }
                console.log("Do: labelKeys: " + kind)
                currentArray[indexObjectArray] = paramObject.new_updatedElement.labelKey;
                break;
    
            default:
                console.log("Do: NNOTHING: " + kind + ' – is not supported in Switch')
                //ZXZ#recievedKindZXZ777               
                console.log("unsupported Kind: " + memory.getItem("recievedKind"));
                //ZXZ#recievedKindZXZ777
                break;
        }
        // let indexObjectArray = $w('#selectIndexEmailPhone').value;
        paramObject.indexObjectArray = indexObjectArray;
        
        // let currentArray = JSON.parse($w('#selectListData').value);
        console.log('BEFORE currentArray: ');
        console.log(currentArray);
        if(kind !== 'labelKeys'){
            currentArray[indexObjectArray] = paramObject.new_updatedElement;
        }
        console.log('AFTER currentArray: ');
        console.log(currentArray);
        $w('#selectListData').value = JSON.stringify(currentArray,undefined,4);
        stateById("selectList");
    }
    //END export function doPut(paramObject = {})
    
    
    
    

/**
*	Adds an event handler that runs when an input element's value
 is changed.
*	 @param {$w.Event} event
*/
export function switchIsPrimary_change(event) {
	let warnTxt = "When marking an email as 'primary' \nother emails become unmarked...";
    warnTxt = memory.getItem("recievedKind") === 'phones' ? "When marking a phone as 'primary' \nother phones become unmarked..." : warnTxt;
    //ZXZ#recievedKindZXZ777
	if($w("#switchIsPrimary").checked){
        $w('#primaryWarnTxt').text = warnTxt;
        $w('#primaryWarnTxt').show();
    }else{
        // $w('#primaryWarnTxt').hide();
        $w('#primaryWarnTxt').show();
    }
}

/**
 *	Adds an event handler that runs when the element is clicked.
 *	 @param {$w.MouseEvent} event
 */
export function btnNewUpdate_click(event) {
	let paramObjectThis = {};
	paramObjectThis.state = {};
	paramObjectThis.state.action = 'GOTO_FORM';
	coreImplementation(paramObjectThis);
	// console.log("coreImplementation(paramObjectThis)");
	// $w('#coreImplementationJSON').value = JSON.stringify(paramObjectThis,undefined,4);
    memory.setItem("coreImplementationJSON", JSON.stringify(paramObjectThis));
    //ZXZ#coreImplementationJSONZXZ
	// stateById('dataOnly');
	paramObjectThis.state.action = 'PREPOPULATE';
	prePopulateByIndexSelected(paramObjectThis);
	console.log("coreImplementation(paramObjectThis)");
	// $w('#coreImplementationJSON').value = JSON.stringify(paramObjectThis,undefined,4);
    memory.setItem("coreImplementationJSON", JSON.stringify(paramObjectThis));
    //ZXZ#coreImplementationJSONZXZ
	// stateById('dataOnly');
	console.log("AFTER: prePopulateByIndexSelected: paramObjectThis: ");
	console.log(paramObjectThis);
	stateById(paramObjectThis.state.boxState);
	// console.log(paramObjectThis);
}
// ø <---------- <Core Implementation>  ---------->
export function coreImplementation(paramObject = {}, testFormDataObject = {}) {
    let wixBoolean = typeof testFormDataObject.wixBoolean === 'boolean' ? testFormDataObject.wixBoolean : true;
    console.warn('wixBoolean: ' + wixBoolean);
    console.log(typeof paramObject.state.action === 'string');
    if(typeof paramObject.state !== 'object'){
        paramObject.state = {};
    }
    paramObject.state.wix = wixBoolean === true ? true : false;
    paramObject.state.action = typeof paramObject.state.action === 'string' ? paramObject.state.action : "UUNKNOWN";
    paramObject.state.kind = paramObject.state.wix === true ? memory.getItem("recievedKind") : testFormDataObject.StateKind;
    //ZXZ#recievedKindZXZ777
    paramObject.state.kindSingular = paramObject.state.kind === "addresses" ? "address" : paramObject.state.kind.substr(0, (paramObject.state.kind.length - 1));
    paramObject.state.kindSingularTitle = paramObject.state.kindSingular.substr(0,1).toUpperCase() + paramObject.state.kindSingular.substr(1);
    paramObject.state.boxState = paramObject.state.kindSingular === 'email' || paramObject.state.kindSingular === 'phone' ? 'EmailPhone' : paramObject.state.kindSingular;
    paramObject.state.boxState = paramObject.state.kindSingular === 'labelKey' ? 'Label' : paramObject.state.boxState;
    paramObject.state.boxState = paramObject.state.kindSingular === 'address' ? 'Address' : paramObject.state.boxState;
    paramObject.state.boxState = 'kind' + paramObject.state.boxState;
    paramObject.state.count = paramObject.state.wix === true ? Number(memory.getItem("recievedCount")) : testFormDataObject.StateCount;
    //ZXZ#recievedCountZXZ77_ToNumber
    paramObject.state.selectedIndex = paramObject.state.wix === true ? Number($w('#selectIndexEmailPhone').value) : testFormDataObject.StateIndexSelected;
    paramObject.state.maxIndex = paramObject.state.count;
    paramObject.state.nextIndex = paramObject.state.count + 1;
    paramObject.state.btnNewUpdateLabel = paramObject.state.selectedIndex < paramObject.state.nextIndex ? 'Update ' : 'New ';
    paramObject.state.btnNewUpdateLabel += paramObject.state.kindSingularTitle;
    paramObject.state.currentObectArray = paramObject.state.wix === true ? JSON.parse($w('#selectListData').value) : testFormDataObject.StateCurrentObectArray;
    paramObject.testFormDataObject = paramObject.state.wix === true ? {} : testFormDataObject;
    paramObject.formData = {};
    paramObject.logs = [];
    paramObject.warnings = [];
    paramObject.errors = [];
    paramObject.errorMessages = [];
    paramObject.overallResultMessages = [];
}//END coreImplementation()
// ø <---------- </Core Implementation> ---------->

// ø <----- <prePopulate from Index>  ----->
export function prePopulateByIndexSelected(paramObject) {
    let action = 'prepopulate';
    let prePopulateKind = paramObject.state.kind
    let prePopulateIndex = Number(paramObject.state.selectedIndex);
    prePopulateKind = paramObject.state.selectedIndex < paramObject.state.nextIndex ? prePopulateKind : "NNEW";
    prePopulateKind = paramObject.state.wix === true ? prePopulateKind : "WWIX";
    let overallMessage = [];
    overallMessage.push(action);
    switch (prePopulateKind) {
        case "NNEW":
            overallMessage.push("new array element object, no prepoulate indicated");
            paramObject.overallResultMessages.push(overallMessage);
            break;

        case "WWIX":
            overallMessage.push("wix boolean is false, no prepoulate indicated");
            paramObject.overallResultMessages.push(overallMessage);
            break;

        case "emails":
            $w('#phemValue').value = paramObject.state.currentObectArray[prePopulateIndex].email;
            $w('#phemTag').value = paramObject.state.currentObectArray[prePopulateIndex].tag;
            $w('#phemPrimary').checked = false;
            if (typeof paramObject.state.currentObectArray[prePopulateIndex].primary === 'boolean') {
                $w('#phemPrimary').checked = paramObject.state.currentObectArray[prePopulateIndex].primary === true ? true : false;
            }
            if (typeof paramObject.state.currentObectArray[prePopulateIndex].primary === 'string') {
                $w('#phemPrimary').checked = paramObject.state.currentObectArray[prePopulateIndex].primary === 'true' ? true : false;
            }
            break;

        case "phones":
            $w('#phemValue').value = paramObject.state.currentObectArray[prePopulateIndex].phone;
            $w('#phemTag').value = paramObject.state.currentObectArray[prePopulateIndex].tag;
            $w('#phemPrimary').checked = false;
            if (typeof paramObject.state.currentObectArray[prePopulateIndex].primary === 'boolean') {
                $w('#phemPrimary').checked = paramObject.state.currentObectArray[prePopulateIndex].primary === true ? true : false;
            }
            if (typeof paramObject.state.currentObectArray[prePopulateIndex].primary === 'string') {
                $w('#phemPrimary').checked = paramObject.state.currentObectArray[prePopulateIndex].primary === 'true' ? true : false;
            }

            break;

        case "labelKeys":
            $w('#labelKey').value = paramObject.state.currentObectArray[prePopulateIndex]
            break;

        case "addresses":
            $w('#addrssTag').value = paramObject.state.currentObectArray[prePopulateIndex].tag;
            let addrssStreetAddress = paramObject.state.currentObectArray[prePopulateIndex].address.streetAddress.number + ' ';
            addrssStreetAddress += paramObject.state.currentObectArray[prePopulateIndex].address.streetAddress.name;
            $w('#addrssStreetAddress').value = addrssStreetAddress;
            $w('#addrssAddressLine2').value = paramObject.state.currentObectArray[prePopulateIndex].address.addressLine2;
            $w('#addrssCity').value = paramObject.state.currentObectArray[prePopulateIndex].address.city;
            $w('#addrssSubdivision').value = paramObject.state.currentObectArray[prePopulateIndex].address.subdivision;
            $w('#addrssPostalCode').value = paramObject.state.currentObectArray[prePopulateIndex].address.postalCode;
            $w('#addrssLocationLatitude').value = paramObject.state.currentObectArray[prePopulateIndex].address.location.latitude;
            $w('#addrssLocationLongitude').value = paramObject.state.currentObectArray[prePopulateIndex].address.location.longitude;
            break;

        default:
            overallMessage.push(paramObject.state.kind + ' is Not Supported for this SWITCH');
            paramObject.overallResultMessages.push(overallMessage);
            break;
    }
}//END prePopulateByIndexSelected(paramObject)
// ø <----- </prePopulate from Index> ----->


export async function doSelectListDataTable(){
    // let selectListDataFieldValue = $w('#selectListData').value;
    let jsonDataThis = $w('#selectListData').value;
	let paramJSONthis = `{}`;
    let styleObjectJSONthis = `{}`;
    switch (memory.getItem("recievedKind")) {
        //ZXZ#recievedKindZXZ777
        case "emails":
	        paramJSONthis = `{"numbering":{},"tHeadElement":{"email":"eMail Address","tag":"Kind","primary":"Primary"},"tFootObject":{},"tableDataObjectArrayKey":"dataArray"}`;
            styleObjectJSONthis = `{"table":"text-align: center;color:blue;font-family: Arial, Helvetica, sans-serif;font-size: 14px;background-color:white;border: 5px solid blue;","thead":"color: white;background-color:blue;","tbody":false,"trow":false,"tdata":"border: 10px solid white;","tfoot":false}`;
            break;
        case "phones":
	        paramJSONthis = `{"numbering":{},"tHeadElement":{"phone":"Phone","tag":"Kind","primary":"Primary"},"tFootObject":{},"tableDataObjectArrayKey":"dataArray"}`;
            styleObjectJSONthis = `{"table":"text-align: center;color:blue;font-family: Arial, Helvetica, sans-serif;font-size: 17px;background-color:white;border: 5px solid blue;","thead":"color: white;background-color:blue;","tbody":false,"trow":false,"tdata":"border: 10px solid white;","tfoot":false}`;
            break;
        case "addresses":
            let addressesObject = JSON.parse($w('#selectListData').value);
            let addressAbbrv = "";
            let newObject = [];
            let newElement = {};
            addressesObject.forEach(element => {
                addressAbbrv = element.address.streetAddress.number.toString() + ' ' + element.address.streetAddress.name + ', ' + element.address.city + ', ' +   element.address.subdivision;
                newElement = {};
                newElement.addressAbbrv = addressAbbrv;
                newElement.tag = element.tag;
                newObject.push(newElement);
            })
            jsonDataThis = JSON.stringify(newObject);
	        paramJSONthis = `{"numbering":{},"tHeadElement":{"addressAbbrv":"Address","tag":"Kind"},"tFootObject":{},"tableDataObjectArrayKey":"dataArray"}`;
            styleObjectJSONthis = `{"table":"text-align: center;color:blue;font-family: Arial, Helvetica, sans-serif;font-size: 14px;background-color:white;border: 5px solid blue;","thead":"color: white;background-color:blue;","tbody":false,"trow":false,"tdata":"border: 10px solid white;","tfoot":false}`;
            break;
    
        default:
	        paramJSONthis = `{}`;
            break;
    }
    
    // console.log('~LINE 534]jsonDataThis: ');
	// console.log(jsonDataThis);
	// console.log('~LINE 537]paramJSONthis: ');
	// console.log(paramJSONthis);
	let theTABLE = await jsonToTable(jsonDataThis, paramJSONthis, styleObjectJSONthis);
	let theHTML = '<div style="margin: 0 auto">' + theTABLE + '</div>';
    // console.log('~LINE 540]theHTML: ');
	console.log(theHTML);
    let supportedKinds = ['emails','phones','addresses'];
    if(supportedKinds.includes(memory.getItem("recievedKind"))){
        //ZXZ#recievedKindZXZ777
        $w('#htmlTable').html = theHTML;
    }

}

export function btnResetTable_click(event) {
    // let jsonDataThis = $w('#selectListData').value;
	// let paramJSONthis = `{"numbering":{},"tHeadElement":{"email":"eMail Address","tag":"Kind","primary":"Primary"},"tFootObject":{},"tableDataObjectArrayKey":"dataArray"}`;
    // let styleObjectJSONthis = `{"table":"text-align: center;color:blue;font-family: Arial, Helvetica, sans-serif;font-size: 14px;background-color:white;border: 5px solid blue;","thead":"color: white;background-color:blue;","tbody":false,"trow":false,"tdata":"border: 10px solid white;","tfoot":false}`;
    
    // // console.log('~LINE 534]jsonDataThis: ');
	// // console.log(jsonDataThis);
	// // console.log('~LINE 537]paramJSONthis: ');
	// // console.log(paramJSONthis);
	// let theHTML = await jsonToTable(jsonDataThis, paramJSONthis, styleObjectJSONthis);
    // // console.log('~LINE 540]theHTML: ');
	// // console.log(theHTML);
    // $w('#htmlTable').html = theHTML;
	doSelectListDataTable();
}

export async function goodGirl_click(event) {
    let dogs = ['Feather','Marcy','Chester','Marais'];
    // let resultString = dogs[Math.floor(Math.random() * dogs.length)];
    let firstOperand = Math.floor(Math.random() * 100);
    let secondOperand = Math.floor(Math.random() * 100);
    let product = await multiply(firstOperand, secondOperand)
    let resultString = firstOperand.toString() + " * " + secondOperand.toString() + " = " + product.toString();
    $w('#htmlTable').html = '<h5 style="' + "color:blue;font-family: Arial, Helvetica, sans-serif;background-color:white;border: 5px solid blue;" + '">' + resultString + "</h5>";
}