        //<parse gradeLevel>
        gradeLevel = '9-12';//element.gradeLevel;
        arrHOLDER = gradeLevel.split('-');
        console.log(arrHOLDER);
        minString = arrHOLDER[0];
        maxString = arrHOLDER[1];
        minGrade = parseInt(minString,10);
        maxGrade = parseInt(maxString,10);
        console.log(minGrade);
        console.log(maxGrade);
        //</parse gradeLevel>