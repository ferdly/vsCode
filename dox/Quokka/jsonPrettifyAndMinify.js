// let objectThis = { "courses_array": [ { "index": 0, "weekId": 1, "dateString": "June 7-11, 2021", "dateStart": 1623070800000, "dateEnd": 1623448800000, "value": "1SKC35", "billing": { "discount": [ { "kind": "Early Bird", "amount": 50 } ], "tuition": 345, "runningTotal": 295 }, "message": {}, "day": "FULL", "courseId": "1SKC35", "gradeLevel": "3-5", "location": "Charlottesville Catholic", "courseName": "Summer Kickoff Camp" }, { "index": 0, "weekId": 2, "dateString": "June 14-18, 2021", "dateStart": 1623675600000, "dateEnd": 1624053600000, "value": "2WSA47", "billing": { "discount": [ { "kind": "Early Bird", "amount": 50 } ], "tuition": 345, "runningTotal": 590 }, "message": {}, "day": "FULL", "courseId": "2WSA47", "gradeLevel": "4-7", "location": "Charlottesville Catholic", "courseName": "Wilderness Survival & Architecture" }, { "index": 0, "weekId": 3, "dateString": "June 21-25, 2021", "dateStart": 1624280400000, "dateEnd": 1624658400000, "value": "3CP68", "billing": { "discount": [ { "kind": "Early Bird", "amount": 50 } ], "tuition": 345, "runningTotal": 885 }, "message": {}, "day": "FULL", "courseId": "3CP68", "gradeLevel": "6-8", "location": "Charlottesville Catholic", "courseName": "Computer Programming in Video Games & E-Sports" }, { "index": 0, "weekId": 5, "dateString": "July 12-16, 2021", "dateStart": 1626094800000, "dateEnd": 1626472800000, "value": "5PMM35", "billing": { "discount": [ { "kind": "Early Bird", "amount": 50 } ], "tuition": 345, "runningTotal": 1180 }, "message": {}, "day": "FULL", "courseId": "5PMM35", "gradeLevel": "3-5", "location": "Charlottesville Catholic", "courseName": "Paint & Mixed Media" }, { "index": 0, "weekId": 7, "dateString": "July 26-30, 2021", "dateStart": 1627304400000, "dateEnd": 1627682400000, "value": "7FI68", "billing": { "discount": [ { "kind": "Early Bird", "amount": 50 } ], "tuition": 345, "runningTotal": 1475 }, "message": {}, "day": "FULL", "courseId": "7FI68", "gradeLevel": "6-8", "location": "Charlottesville Catholic", "courseName": "Forensic Investigators" }, { "index": 0, "weekId": 9, "dateString": "August 9-14, 2021", "dateStart": 1628514000000, "dateEnd": 1628978400000, "value": "9TV35", "billing": { "discount": [ { "kind": "Early Bird", "amount": 50 } ], "tuition": 345, "runningTotal": 1770 }, "message": {}, "day": "FULL", "courseId": "9TV35", "gradeLevel": "3-5", "location": "STEAM Incubator", "courseName": "As Seen on TV" } ]};
let jsonThis = '{ "courses_array": [ { "index": 0, "weekId": 1, "dateString": "June 7-11, 2021", "dateStart": 1623070800000, "dateEnd": 1623448800000, "value": "1SKC35", "billing": { "discount": [ { "kind": "Early Bird", "amount": 50 } ], "tuition": 345, "runningTotal": 295 }, "message": {}, "day": "FULL", "courseId": "1SKC35", "gradeLevel": "3-5", "location": "Charlottesville Catholic", "courseName": "Summer Kickoff Camp" }, { "index": 0, "weekId": 2, "dateString": "June 14-18, 2021", "dateStart": 1623675600000, "dateEnd": 1624053600000, "value": "2WSA47", "billing": { "discount": [ { "kind": "Early Bird", "amount": 50 } ], "tuition": 345, "runningTotal": 590 }, "message": {}, "day": "FULL", "courseId": "2WSA47", "gradeLevel": "4-7", "location": "Charlottesville Catholic", "courseName": "Wilderness Survival & Architecture" }, { "index": 0, "weekId": 3, "dateString": "June 21-25, 2021", "dateStart": 1624280400000, "dateEnd": 1624658400000, "value": "3CP68", "billing": { "discount": [ { "kind": "Early Bird", "amount": 50 } ], "tuition": 345, "runningTotal": 885 }, "message": {}, "day": "FULL", "courseId": "3CP68", "gradeLevel": "6-8", "location": "Charlottesville Catholic", "courseName": "Computer Programming in Video Games & E-Sports" }, { "index": 0, "weekId": 5, "dateString": "July 12-16, 2021", "dateStart": 1626094800000, "dateEnd": 1626472800000, "value": "5PMM35", "billing": { "discount": [ { "kind": "Early Bird", "amount": 50 } ], "tuition": 345, "runningTotal": 1180 }, "message": {}, "day": "FULL", "courseId": "5PMM35", "gradeLevel": "3-5", "location": "Charlottesville Catholic", "courseName": "Paint & Mixed Media" }, { "index": 0, "weekId": 7, "dateString": "July 26-30, 2021", "dateStart": 1627304400000, "dateEnd": 1627682400000, "value": "7FI68", "billing": { "discount": [ { "kind": "Early Bird", "amount": 50 } ], "tuition": 345, "runningTotal": 1475 }, "message": {}, "day": "FULL", "courseId": "7FI68", "gradeLevel": "6-8", "location": "Charlottesville Catholic", "courseName": "Forensic Investigators" }, { "index": 0, "weekId": 9, "dateString": "August 9-14, 2021", "dateStart": 1628514000000, "dateEnd": 1628978400000, "value": "9TV35", "billing": { "discount": [ { "kind": "Early Bird", "amount": 50 } ], "tuition": 345, "runningTotal": 1770 }, "message": {}, "day": "FULL", "courseId": "9TV35", "gradeLevel": "3-5", "location": "STEAM Incubator", "courseName": "As Seen on TV" } ]}';
var objectFromJSON = JSON.parse(jsonThis);
console.log(objectFromJSON);
var prettifiedJSONfirst = JSON.stringify(objectFromJSON, undefined, 4)
console.log(prettifiedJSONfirst);
// var prettifiedJSONsecond = JSON.stringify(objectFromJSON, null, '\t')
// console.log(prettifiedJSONsecond);

var minifiedJSONfirst = JSON.stringify(objectFromJSON, null, 0)
console.log(minifiedJSONfirst)
