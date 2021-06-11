let mapIndex = 0;
    let switchWord = "#switch";
    let zeroString = "0";
    let weekIndexWas = 0;
    let weekIndexIncrement = 0;
    let weekWas = 0;
    let courseIndex = 0;
    let courseCardinality = 0;
    let switchKey = "ZXZ";
    let mismatchThis = false;
    let mismatchCount = 0;
    let switched = false;
    let gradeLevel = "Z";
    let arrHOLDER = [];
    let minString = "Z";
    let minGrade = -7;
    let maxString = "Z";
    let maxGrade = -7;
    let misMatch = 0;
    let simpleIndex = 0;
    for (let index = 0; index < superEnrollmentObject.courses_array.length; index++) {
        console.log("index: " + index);
        const element = superEnrollmentObject.courses_array[index];
        console.log("element: ");
        console.log(element);
        // mapIndex = element.weekId;
        mapIndex = index + 1;
        console.log("mapIndex: " + mapIndex);
        // const element = superEnrollmentObject.courses_array[index];
        const mapElement = superEnrollmentObject.blockMapArray.blockMapArray[mapIndex];
        console.log("mapElement: ");
        console.log(mapElement);
        // console.log("index: " + index);
        // console.log(element);
        // console.log("weekId: " + element.weekId);
        // console.log("weekIndexWas: " + weekIndexWas);
        // console.log("weekId: " + element.weekId);
        console.log("weekWas: " + weekWas
             + "\nweekIndexWas: " + weekIndexWas
             + "\weekIndexIncrement: " + weekIndexIncrement);
        weekIndexIncrement = element.weekId === weekWas ? 0 : 1;
        // console.log("weekIndexIncrement: " + weekIndexIncrement);
        weekIndexWas += weekIndexIncrement;
        weekWas = element.weekId;
        courseCardinality = element.index + 1;
        arrHOLDER = element.gradeLevel.split('-');
        // console.log(arrHOLDER);
        minString = arrHOLDER[0];
        console.log("minString raw: " + minString);
        minString =minString === 'K' ? '0' : minString;
        maxString = arrHOLDER[1];
        minGrade = parseInt(minString,10);
        maxGrade = parseInt(maxString,10);
        switchKey = switchWord.concat(weekIndexWas.toString(), zeroString, courseCardinality.toString());
        switched = $w(switchKey).checked; 
        console.log("weekIndexWas: " + weekIndexWas
            + "\ncourseCardinality: " + courseCardinality
            + "\nswitchKey: " + switchKey
            + "\nminString: " + minString
            + "\nminGrade: " + minGrade
            + "\nmaxString: " + maxString
            + "\nmaxGrade: " + maxGrade
            + "\nswitched: " + switched);
        // console.log("weekIndexWas: " + weekIndexWas);
        // console.log("courseCardinality: " + courseCardinality);
        // console.log("switchKey: " + switchKey);
        // console.log("minString: " + minString);
        // console.log("minGrade: " + minGrade);
        // console.log("maxString: " + maxString);
        // console.log("maxGrade: " + maxGrade);
        // console.log("switched: " + switched);
        misMatch = 0;
        misMatch = studentCurrentGrade < minGrade ? 1 : 0;
        misMatch = studentCurrentGrade > maxGrade ? 1 : misMatch;
        misMatch = switched ? misMatch : 0;
        mapElement.gradeMismatchCount = misMatch;
        mismatchCount += misMatch;
        console.log("misMatch: " + misMatch);
    
    }