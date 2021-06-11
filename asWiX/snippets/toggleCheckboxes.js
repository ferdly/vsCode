let customArray = [];
export function btnTgglChkBox(elementId) {
	let chkbxOptions = $w("#chkbxContactAttributes").options;
	let chkbxCurrent = $w("#chkbxContactAttributes").value;
	let chkbxToggleTo = [];;
	let valueThis = '';
	chkbxOptions.forEach(element => {
        valueThis = element.value;
		if(!chkbxCurrent.includes(valueThis)){
            chkbxToggleTo.push(valueThis);
		}
	});
    
    //<UnComment for Testing>
    let displayObject = {};
	displayObject.options = chkbxOptions;
	displayObject.ocurrent = chkbxCurrent;
	displayObject.toggle = chkbxToggleTo;
	$w('#objectOnDeck').value = JSON.stringify(displayObject,undefined,4);
    console.warn('displayObject: ');
    console.warn(displayObject);
    //</UnComment for Testing>

    //<UnComment for Deployment>
    // $w("#chkbxContactAttributes").value = chkbxToggleTo
    //</UnComment for Deployment>
}
    
});