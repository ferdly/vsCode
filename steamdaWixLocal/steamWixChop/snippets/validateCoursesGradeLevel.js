now = new Date;
nowString = now.toString();
nowString = nowString.substr(0, nowString.indexOf("GMT")).trim();
document.getElementById("title").innerHTML = "Coding Output: " + nowString;
superEnrollmentObject = {
    "courses_array": [
        {
            "index": 0,
            "weekId": 1,
            "dateString": "June 7-11, 2021",
            "dateStart": 1623070800000,
            "dateEnd": 1623448800000,
            "value": "1SKC35",
            "billing": {
                "discount": [
                    {
                        "kind": "Early Bird",
                        "amount": 50
                    }
                ],
                "tuition": 345,
                "runningTotal": 295
            },
            "message": {},
            "day": "FULL",
            "courseId": "1SKC35",
            "gradeLevel": "3-5",
            "location": "Charlottesville Catholic",
            "courseName": "Summer Kickoff Camp"
        },
        {
            "index": 0,
            "weekId": 2,
            "dateString": "June 14-18, 2021",
            "dateStart": 1623675600000,
            "dateEnd": 1624053600000,
            "value": "2ML35",
            "billing": {
                "discount": [
                    {
                        "kind": "Early Bird",
                        "amount": 50
                    }
                ],
                "tuition": 345,
                "runningTotal": 590
            },
            "message": {},
            "day": "FULL",
            "courseId": "2ML35",
            "gradeLevel": "3-5",
            "location": "Charlottesville Catholic",
            "courseName": "Matter Lab"
        },
        {
            "index": 0,
            "weekId": 3,
            "dateString": "June 21-25, 2021",
            "dateStart": 1624280400000,
            "dateEnd": 1624658400000,
            "value": "3CP68",
            "billing": {
                "discount": [
                    {
                        "kind": "Early Bird",
                        "amount": 50
                    }
                ],
                "tuition": 345,
                "runningTotal": 885
            },
            "message": {},
            "day": "FULL",
            "courseId": "3CP68",
            "gradeLevel": "6-8",
            "location": "Charlottesville Catholic",
            "courseName": "Computer Programming in Video Games & E-Sports"
        },
        {
            "index": 0,
            "weekId": 4,
            "dateString": "June 28 - July 2, 2021",
            "dateStart": 1624885200000,
            "dateEnd": 1625263200000,
            "value": "4UTS35",
            "billing": {
                "discount": [
                    {
                        "kind": "Early Bird",
                        "amount": 50
                    }
                ],
                "tuition": 345,
                "runningTotal": 1180
            },
            "message": {},
            "day": "FULL",
            "courseId": "4UTS35",
            "gradeLevel": "3-5",
            "location": "Charlottesville Catholic",
            "courseName": "Ultimate Trick Shots"
        },
        {
            "index": 1,
            "weekId": 4,
            "dateString": "June 28 - July 2, 2021",
            "dateStart": 1624885200000,
            "dateEnd": 1625263200000,
            "value": "4PH35",
            "billing": {
                "discount": [
                    null,
                    {
                        "kind": "Early Bird",
                        "amount": 50
                    }
                ],
                "tuition": 345,
                "runningTotal": 1475
            },
            "message": {},
            "day": "FULL",
            "courseId": "4PH35",
            "gradeLevel": "3-5",
            "location": "Charlottesville Catholic",
            "courseName": "Photography"
        },
        {
            "index": 0,
            "weekId": 5,
            "dateString": "July 12-16, 2021",
            "dateStart": 1626094800000,
            "dateEnd": 1626472800000,
            "value": "5MT35",
            "billing": {
                "discount": [
                    {
                        "kind": "Early Bird",
                        "amount": 50
                    }
                ],
                "tuition": 345,
                "runningTotal": 1770
            },
            "message": {},
            "day": "FULL",
            "courseId": "5MT35",
            "gradeLevel": "3-5",
            "location": "STEAM Incubator",
            "courseName": "Media Tech: Sound & Movie Making"
        }
    ],
    "dogs_array": [
        "Marcy",
        "Chester",
        "Marais"
    ],
    "creationDateString": "Wed Mar 24 2021 12:47:23",
    "creationDateUnix": 1616608043000,
    "family": {
        "messages": {
            "dox": [
                "only messages you want the Whole Family to see"
            ]
        },
        "student": {
            "name": {
                "first": "Danny",
                "last": "Partridge",
                "preferred": "Danny",
                "lastFirst": "Partridge, Danny",
                "fullName": "Danny Partridge"
            },
            "messages": {
                "dox": [
                    "messages you want the Student only to see"
                ]
            },
            "dobString": "02/07/2003",
            "currentGrade": 3,
            "currentGradeString": "Third Grade",
            "currentGradeLevel": "3-5",
            "dob": {
                "date": "2003-02-07T06:00:00.000Z",
                "month": 2,
                "day": 7,
                "year": 2003
            }
        },
        "parent": {
            "messages": {
                "dox": [
                    "messages you want Both Parents to see"
                ]
            },
            "primary": {
                "memberId": "INSTANTIATE",
                "messages": {
                    "dox": [
                        "messages you want the Primary Parent/Web Account Holder only to see"
                    ]
                },
                "last": "Partridge",
                "first": "Shirley",
                "fullName": "Shirley Partridge",
                "lastFirst": "Partridge, Shirley"
            }
        },
        "addresses": {
            "mailing": {
                "address": "123 Old Bus Way",
                "address2": "101",
                "city": "Teluca Lake",
                "state": "CA",
                "zip": "90210"
            }
        }
    },
    "countWeekArray": [
        -999,
        1,
        1,
        1,
        2,
        1,
        0,
        0,
        0,
        0
    ],
    "writeMapWeekArray": [
        -999,
        1,
        2,
        3,
        4,
        5,
        0,
        0,
        0,
        0
    ],
    "blockMapArray": {
        "blockMapErrors": {
            "zeroCheckedCount": 0,
            "multipleCheckedCount": 1
        },
        "blockMapArray": [
            {
                "blockMap": -999,
                "week": -999,
                "switchIdArray": [
                    -999
                ],
                "selectedCount": -999,
                "checkedCount": -999,
                "zeroChecked": -999,
                "multipleChecked": -999,
                "gradeMismatchCount": -999
            },
            {
                "blockMap": 1,
                "week": 1,
                "switchIdArray": [
                    "#switch101",
                    "#switch102",
                    "#switch103"
                ],
                "selectedCount": 1,
                "checkedCount": 1,
                "zeroChecked": 0,
                "multipleChecked": 0,
                "gradeMismatchCount": 0
            },
            {
                "blockMap": 2,
                "week": 2,
                "switchIdArray": [
                    "#switch201",
                    "#switch202",
                    "#switch203"
                ],
                "selectedCount": 1,
                "checkedCount": 1,
                "zeroChecked": 0,
                "multipleChecked": 0,
                "gradeMismatchCount": 0
            },
            {
                "blockMap": 3,
                "week": 3,
                "switchIdArray": [
                    "#switch301",
                    "#switch302",
                    "#switch303"
                ],
                "selectedCount": 1,
                "checkedCount": 1,
                "zeroChecked": 0,
                "multipleChecked": 0,
                "gradeMismatchCount": 0
            },
            {
                "blockMap": 4,
                "week": 4,
                "switchIdArray": [
                    "#switch401",
                    "#switch402",
                    "#switch403"
                ],
                "selectedCount": 2,
                "checkedCount": 2,
                "zeroChecked": 0,
                "multipleChecked": 1,
                "gradeMismatchCount": 0
            },
            {
                "blockMap": 5,
                "week": 5,
                "switchIdArray": [
                    "#switch501",
                    "#switch502",
                    "#switch503"
                ],
                "selectedCount": 1,
                "checkedCount": 1,
                "zeroChecked": 0,
                "multipleChecked": 0,
                "gradeMismatchCount": 0
            },
            {
                "blockMap": 6,
                "week": 0,
                "switchIdArray": [
                    "#switch601",
                    "#switch602",
                    "#switch603"
                ],
                "selectedCount": 0,
                "checkedCount": 0,
                "zeroChecked": 0,
                "multipleChecked": 0,
                "gradeMismatchCount": 0
            },
            {
                "blockMap": 7,
                "week": 0,
                "switchIdArray": [
                    "#switch701",
                    "#switch702",
                    "#switch703"
                ],
                "selectedCount": 0,
                "checkedCount": 0,
                "zeroChecked": 0,
                "multipleChecked": 0,
                "gradeMismatchCount": 0
            },
            {
                "blockMap": 8,
                "week": 0,
                "switchIdArray": [
                    "#switch801",
                    "#switch802",
                    "#switch803"
                ],
                "selectedCount": 0,
                "checkedCount": 0,
                "zeroChecked": 0,
                "multipleChecked": 0,
                "gradeMismatchCount": 0
            },
            {
                "blockMap": 9,
                "week": 0,
                "switchIdArray": [
                    "#switch901",
                    "#switch902",
                    "#switch903"
                ],
                "selectedCount": 0,
                "checkedCount": 0,
                "zeroChecked": 0,
                "multipleChecked": 0,
                "gradeMismatchCount": 0
            }
        ]
    },
    "enrollment": {
        "errorArray": [
            false,
            true,
            null,
            true
        ],
        "messages": {
            "dox": [
                "messaging specifically for the Enrollment Event"
            ],
            "error": [],
            "warn": [],
            "fyi": [],
            "btw": []
        }
    }
};
XsuperEnrollmentObject = {
    "courses_array": [
        {
            "index": 0,
            "weekId": 3,
            "dateString": "June 21-25, 2021",
            "dateStart": 1624280400000,
            "dateEnd": 1624658400000,
            "value": "3CKK2",
            "billing": {
                "discount": [
                    {
                        "kind": "Early Bird",
                        "amount": 50
                    }
                ],
                "tuition": 345,
                "runningTotal": 295
            },
            "message": {},
            "day": "FULL",
            "courseId": "3CKK2",
            "gradeLevel": "K-2",
            "location": "STEAM Incubator",
            "courseName": "Construction Kids - HALF DAY"
        }
    ],
    "dogs_array": [
        "Marcy",
        "Chester",
        "Marais"
    ],
    "creationDateString": "Sat Mar 27 2021 07:41:21",
    "creationDateUnix": 1616848881000,
    "family": {
        "messages": {
            "dox": [
                "only messages you want the Whole Family to see"
            ]
        },
        "student": {
            "name": {
                "first": "Reid",
                "last": "Morgan",
                "preferred": "Reid",
                "lastFirst": "Morgan, Reid",
                "fullName": "Reid Morgan"
            },
            "messages": {
                "dox": [
                    "messages you want the Student only to see"
                ]
            },
            "dobString": "08/10/2013",
            "currentGrade": 1,
            "currentGradeString": "First Grade",
            "currentGradeLevel": "K-2",
            "dob": {
                "date": "2013-08-10T05:00:00.000Z",
                "month": 8,
                "day": 10,
                "year": 2013
            }
        },
        "parent": {
            "messages": {
                "dox": [
                    "messages you want Both Parents to see"
                ]
            },
            "primary": {
                "memberId": "INSTANTIATE",
                "messages": {
                    "dox": [
                        "messages you want the Primary Parent/Web Account Holder only to see"
                    ]
                },
                "last": "Morgan",
                "first": "Rebecca",
                "fullName": "Rebecca Morgan",
                "lastFirst": "Morgan, Rebecca"
            }
        },
        "addresses": {
            "mailing": {
                "address": "824 Locust Ave",
                "city": "Charlottesville",
                "state": "VA",
                "zip": "22902"
            }
        }
    },
    "countWeekArray": [
        -999,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0
    ],
    "writeMapWeekArray": [
        -999,
        3,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ],
    "blockMapArray": {
        "blockMapErrors": {
            "zeroCheckedCount": 0,
            "multipleCheckedCount": 0
        },
        "blockMapArray": [
            {
                "blockMap": -999,
                "week": -999,
                "switchIdArray": [
                    -999
                ],
                "selectedCount": -999,
                "checkedCount": -999,
                "zeroChecked": -999,
                "multipleChecked": -999,
                "gradeMismatchCount": -999
            },
            {
                "blockMap": 1,
                "week": 3,
                "switchIdArray": [
                    "#switch101",
                    "#switch102",
                    "#switch103"
                ],
                "selectedCount": 1,
                "checkedCount": 1,
                "zeroChecked": 0,
                "multipleChecked": 0,
                "gradeMismatchCount": 3
            },
            {
                "blockMap": 2,
                "week": 0,
                "switchIdArray": [
                    "#switch201",
                    "#switch202",
                    "#switch203"
                ],
                "selectedCount": 0,
                "checkedCount": 0,
                "zeroChecked": 0,
                "multipleChecked": 0,
                "gradeMismatchCount": 3
            },
            {
                "blockMap": 3,
                "week": 0,
                "switchIdArray": [
                    "#switch301",
                    "#switch302",
                    "#switch303"
                ],
                "selectedCount": 0,
                "checkedCount": 0,
                "zeroChecked": 0,
                "multipleChecked": 0,
                "gradeMismatchCount": 3
            },
            {
                "blockMap": 4,
                "week": 0,
                "switchIdArray": [
                    "#switch401",
                    "#switch402",
                    "#switch403"
                ],
                "selectedCount": 0,
                "checkedCount": 0,
                "zeroChecked": 0,
                "multipleChecked": 0,
                "gradeMismatchCount": 3
            },
            {
                "blockMap": 5,
                "week": 0,
                "switchIdArray": [
                    "#switch501",
                    "#switch502",
                    "#switch503"
                ],
                "selectedCount": 0,
                "checkedCount": 0,
                "zeroChecked": 0,
                "multipleChecked": 0,
                "gradeMismatchCount": 3
            },
            {
                "blockMap": 6,
                "week": 0,
                "switchIdArray": [
                    "#switch601",
                    "#switch602",
                    "#switch603"
                ],
                "selectedCount": 0,
                "checkedCount": 0,
                "zeroChecked": 0,
                "multipleChecked": 0,
                "gradeMismatchCount": 3
            },
            {
                "blockMap": 7,
                "week": 0,
                "switchIdArray": [
                    "#switch701",
                    "#switch702",
                    "#switch703"
                ],
                "selectedCount": 0,
                "checkedCount": 0,
                "zeroChecked": 0,
                "multipleChecked": 0,
                "gradeMismatchCount": 3
            },
            {
                "blockMap": 8,
                "week": 0,
                "switchIdArray": [
                    "#switch801",
                    "#switch802",
                    "#switch803"
                ],
                "selectedCount": 0,
                "checkedCount": 0,
                "zeroChecked": 0,
                "multipleChecked": 0,
                "gradeMismatchCount": 3
            },
            {
                "blockMap": 9,
                "week": 0,
                "switchIdArray": [
                    "#switch901",
                    "#switch902",
                    "#switch903"
                ],
                "selectedCount": 0,
                "checkedCount": 0,
                "zeroChecked": 0,
                "multipleChecked": 0,
                "gradeMismatchCount": 3
            }
        ]
    },
    "enrollment": {
        "errorArray": [
            false,
            false,
            false,
            false
        ],
        "messages": {
            "dox": [
                "messaging specifically for the Enrollment Event"
            ],
            "error": [],
            "warn": [
                "Student Grade is a Mismatch with Date-of-Birth (1 year)"
            ],
            "fyi": [],
            "btw": []
        }
    }
};
validateCourseGradeLevelMatch(superEnrollmentObject);
function validateCourseGradeLevelMatch(superEnrollmentObject){
    let studentGradeLevel = superEnrollmentObject.family.student.gradeLevel;
    let weekWas = 0
    let weekIndexWas = 0
    let switchKey = "ZXZ";
    let mismatchThis = false;
    let mismatchCount = 0;
    let switched = false;
    superEnrollmentObject.courses_array.forEach(element => {
        weekIndexWas = element.WeekId === weekWas ? weekIndexWas : weekIndexWas++;
        weekWas = element.WeekId;
        courseCardinality = element.index++;
        switchKey = "#switch" + weekIndexWas + "0" + courseCardinality;
        // switched = $w(switchKey).checked;
        switched = random_boolean = Math.random() >= 0.5;
        // switched = true;
        mismatchThis = false;
        mismatchThis = studentGradeLevel === element.gradeLevel ? false : true;
        mismatchThis = switched ? mismatchThis : false;
        mismatchCount += mismatchThis ? 1 : 0;
    });
    console.log({mismatchCount});
}
//END HERE