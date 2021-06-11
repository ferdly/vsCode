export function postEnrollment_click(event, superEnrollmentObject, objectCorollary = "EEMPTY") {
    isObject = typeof objectCorollary === 'object' ? true : false; 
	isObject = typeof objectCorollary === null ? false : isObject; 
	isObject = Array.isArray(objectCorollary) ? false : isObject; 
    if(isObject){
        if (objectCorollary.hasOwnProperty('corollaryJasonVerion') === false){
            objectCorollary.corollaryJasonVerion = "1.1.1";
        }
        if (objectCorollary.hasOwnProperty('idTerm') === false){
            objectCorollary.idTerm = 202106;
        }
    } else {
        objectCorollary = {"idTerm": 202106,"corollaryJasonVerion": "1.1.1"};
        // this is good, needs to be dynamically extensible 
        //(buzz, buzz, but I mean it)
    }
    let now = new Date();
    //<instantate objectStatusNotes>
    let objectStatusNotes = {"statusNotes":[{"status":"PENDING","kind":"status","note":"posted enrollmentObject record","MDYdate":"4/11/2021","ISOdate":"20210411012108405"},{"status":"INSTANTIATE","kind":"initializing element","note":"instantiate","MDYdate":"4/11/2021","ISOdate":"20210411012105438"}]};
    let nowMDYdate = (now.getMonth() + 1) + '/' + now.getDate() + '/' + now.getFullYear();
    let nowISOdate = now.toISOString().replace(/[^0-9]/g,'');
    objectStatusNotes.statusNotes[0].MDYdate = nowMDYdate;
    objectStatusNotes.statusNotes[0].ISOdate = nowISOdate;
    objectStatusNotes.statusNotes[1].MDYdate = nowMDYdate;
    objectStatusNotes.statusNotes[1].ISOdate = nowISOdate;
    console.log(objectStatusNotes);
    //</instantate objectStatusNotes>
    let family = superEnrollmentObject.family;
	let studentFirst = family.student.name.first;
	let studentLast = family.student.name.last;
	let parentFirst = family.parent.primary.first;
	let parentLast = family.parent.primary.first;
	let spTitle = family.student.name.studentParentCombo;
	// let familyId = $w("#familyId").valufamily.parent.primary.e;//ABOVE
	let idPP = family.parent.primary.memberId;//for this step OK if 'INSTANTIATE'
	let jsonEnrollment = JSON.stringify(superEnrollmentObject, null, 0);
	let jsonCorollary = JSON.stringify(objectCorollary, null, 0);//corollaryJSON;
    let jsonStatusNotes = JSON.stringify(objectStatusNotes, null, 0);
	let testing = false;
	if (testing) {
		const enrollmentObjectRow = {
			"title": spTitle,
			"studentFirst": studentFirst,
			"studentLast": studentLast,
			"parentFirst": parentFirst,
			"parentLast": parentLast,
			"idPP": idPP,
			"jsonEnrollment": jsonEnrollment,
			"jsonCorollary": jsonCorollary,
			"jsonStatusNotes": jsonStatusNotes
		}
	let enrollmentResult = wixData.insert("enrollmentObjects", enrollmentObjectRow);
	
	$w("#dbResponse").value = enrollmentResult;
	}
}