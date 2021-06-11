// ø <---------- <jsonToTable>  ---------->
export function jsonToTable(jsonData, paramJSON) {

    let testReturnObject = {};
    let testReturnArray = [];
    let testReturnString = "[test return value]";
    let testTypeOf = 'I think it returns a string';
    let testReturnLog = '<h1>Hi Brad</h1><p>Log Sucessful Steps Here.</p>';
    // console.log('paramJSON: ');
    // console.log(paramJSON);
    // testReturnString = jsonData;
    // return testReturnString;
    testReturnLog += '<p>jsonData successfully returned back</p>';
    // testReturnString = JSON.stringify(paramJSON);//NOT
    // testReturnString = paramJSON;
    // return testReturnString;
    testReturnLog += '<p>paramJSON _as is_ successfully returned back(weirdly stringified)</p>';
    // testReturnObject = paramJSON;
    // return testReturnObject;
    testReturnLog += '<p>paramJSON successfully returned back(nicely as Object) no longer necessary because it was about the default parameter type</p>';
    // return testReturnLog;
    // let tableDataObjectArrayKey = paramJSON.tableDataObjectArrayKey;
    // // let tableDataObjectArrayKey = paramJSON['tableDataObjectArrayKey'];
    // // let tableDataObjectArrayKey = "dataArray";
    // testTypeOf = typeof tableDataObjectArrayKey;
    // if(testTypeOf === "undefined"){
    //     testReturnString = "typeof tableDataObjectArrayKey === 'undefined'";
    // }
    // if(testTypeOf !== "string"){
    //     testReturnString = "typeof tableDataObjectArrayKey === [!string]['" + testTypeOf + "']";
    // }else{
    //     // testReturnString = tableDataObjectArrayKey;
    //     testReturnString = "typeof tableDataObjectArrayKey === [else]['" + testTypeOf + "']";
    // }
    // return testReturnString;
    testReturnLog += '<p>hard-coded "dataArray" to get past the bump, and all good</p>';
    // let tbodyElementArray = jsonData[tableDataObjectArrayKey];
    // let tbodyElementArray = jsonData["dataArray"];
    let tbodyElementArray = JSON.parse(jsonData); // MOOT but not rewriting code below until certain
    // testReturnString = JSON.stringify(tbodyElementArray);
    // testReturnString = tbodyElementArray;
    // return testReturnString;
    testReturnLog += '<p>NOPE: much of above is MOOT, can pass just the JSON Array Of Objects as param</p>';
    // return testReturnObject;
    // return testReturnString;
    // let jsonDataObject = JSON.parse(jsonData);
    // let theseKeys = Object.keys(jsonDataObject);
    // testReturnArray = theseKeys;
    // testReturnString = testReturnArray.toString();
    // return testReturnString;
    // testReturnString = JSON.stringify(tbodyElementArray);
    // testReturn.toString();
    // return testReturnString;
    // console.log(tbodyElementArray);;
    let messages = [];










    //<tHead could become a function>
    let paramObject = JSON.parse(paramJSON);
    let tHeadElement = {};
    let tFootElement = {};
    let tHeadValues = [];
    let tableKeys = [];
    // testReturnString = typeof paramObject.tHeadElement;
    // return testReturnString;

    // console.log(Object.keys(tHeadElement).length)
    // if (typeof paramObject.tHeadElement === 'object') {
    if (Object.keys(paramObject.tHeadElement).length > 0) {
        tHeadElement = paramObject.tHeadElement;
        // testReturnString = JSON.stringify(tHeadElement);
        // return testReturnString;
        // console.log(tHeadElement);
        // tfootElement = tbodyElementArray.pop();
        tableKeys = Object.keys(paramObject.tHeadElement);
        tHeadValues = Object.values(tHeadElement);
    } else {
        tHeadElement = tbodyElementArray[0];
        // testReturnString = JSON.stringify(tHeadElement);
        // return testReturnString;
        // console.log(tHeadElement);
        tableKeys = Object.keys(tHeadElement);
        tHeadValues = Object.keys(tHeadElement);
        // let tableKeys = Object.keys(paramObject.tHeadElement);
        // messages = ["disregard 'else for testing"];

    }
    //{ email: 'eMail Address', tag: 'Kind', primary: 'Primary' } 
    let tHead = '<thead><tr>';
    tHeadValues.forEach(element => {
        tHead += '<th>' + element + '</th>';
    })
    tHead += '</tr></thead>';
    // testReturnString = tHead;
    // return testReturnString;
    // console.log(typeof paramObject.tHeadElement)
    // console.log(tHeadElement);
    // console.log(tableKeys);
    // console.log(theadValues);
    // console.log(tHead);
    //</tHead could become a function>


















    // console.log(tbodyElementArray)
    // <tBody could become a function>
    // testReturnString = tbodyElementArray.toString();
    // return testReturnString;
    let tRowCode = '';
    let tBody = '<tbody>';
    tbodyElementArray.forEach(tRowObect => {
        tRowCode = '<tr>';
        tableKeys.forEach(key => {
            tRowCode += '<td>';
            tRowCode += tRowObect[key];
            tRowCode += '</td>';
        })
        tRowCode += '</tr>';
        tBody += tRowCode;
    });
    tBody += '</tbody>';
    // testReturnString = tBody;
    // return testReturnString;
    // console.log(tBody);
    //</tBody could become a function>











    //<tFoot could become a function>
    let evalObject = {};
    // console.log(typeof paramObject.tFootObject === 'object');
    // let tFootElement = {};
    let tFootBoolean = true;// ! will be caught to abort
    if (typeof paramObject.tFootObject === 'object') {
        // console.log('tFootBoolean = false');
        // tFootBoolean = false;
        // //<evalKVP Loop>
        tFootElement = paramObject.tFootObject.tFootElement;
        // console.log(tFootElement);
        // console.log(Array.isArray(paramObject.tFootObject.evalKVParray));
        if (Array.isArray(paramObject.tFootObject.evalKVParray)) {
            let evalKVParray = paramObject.tFootObject.evalKVParray;
            // console.log(evalKVParray);
            // let evalObject = {};

            let evalKey = '';
            let evalValueCode = '';
            evalKVParray.forEach(evalKVPelement => {
                evalKey = evalKVPelement[0]
                evalValueCode = evalKVPelement[1]
                evalObject[evalKey] = eval(evalValueCode);
            });
            // console.log(evalObject.now);
            // console.log(evalObject.nowString);
            // console.log(evalObject);
            // console.log(evalObject.footer);
        } else {
            tFootBoolean = false;
            messages = ["tFoot is so complex that it cannot be accomplished via appending a last row to he core JSON"
                , "moreover, the paradigm is most powerful when you just _have_ JSON and apply this to get a table"];
        }
        //</evalKVP Loop>
        // 
        // let tFoot = '<tfoot>';

        // console.log(tFoot);
    } else {
        tFootBoolean = false;
        messages = ["tFoot is so complex that it cannot be accomplished via appending a last row to he core JSON"
            , "moreover, the paradigm is most powerful when you just _have_ JSON and apply this to get a table"];
        // console.log(messages);
    }

    //<mainBoolean and Construct>
    let tFoot = '<tfoot><tr>';
    if (tFootBoolean) {
        let tRow = ''
        let valueCode = ''
        let value = ''
        let colspanIndex = 0;
        // console.log(tFootElement);
        // console.log(tFootElement.colspan[0]);
        // console.log(tFootElement.colspan[colspanIndex]);
        let colspanArray = tFootElement.colspan;
        // console.log(colspanArray[colspanIndex]);
        // console.log(tableKeys);
        let tFootRows = '';
        tableKeys.forEach(element => {
            // console.log(colspanArray[colspanIndex]);
            // console.log(element);
            valueCode = tFootElement[element];
            // console.log('valueCode: ');
            // console.log(valueCode);
            // console.log(tfootElement.colspan[colspanIndex])
            if (valueCode.length > 0) {
                // console.log(colspanArray[colspanIndex]);
                value = eval(valueCode)
                // console.log(value);
                tFootRows += '<td';
                tFootRows += colspanArray[colspanIndex] > 0 ? ' colspan="' + colspanArray[colspanIndex] + '">' : '>';
                tFootRows += value + '</td>'
                // console.log(tFootRows);
            } else {
                // console.log(tFootRows);
                messages = ['unused']
            }
            // console.log('valueCode: ');
            // console.log(valueCode);
            colspanIndex++;
        });


        tFoot += tFootRows;
    } else {
        tFoot += '';
    }
    tFoot += '</tr></tfoot>';
    // console.log('tFoot: ');
    // console.log(tFoot);
    //</mainBoolean and Construct>

    //</tFoot could become a function>






    // let tHead = '<thead><tr><th>Month</th><th>Savings</th></tr></thead>';
    // let tBody = '<tbody><tr><td>January</td><td>$100</td></tr><tr><td>February</td><td>$80</td></tr></tbody>';
    // let tFoot = '<tfoot><tr>';
    // tFoot = '<td colspan="3">';
    // let now = new Date;
    // let nowString = now.toString()
    // nowString = nowString.substr(0, nowString.indexOf(":", nowString.indexOf(':') + 1));
    // tFoot += nowString;
    // tFoot += '</td>';
    // tFoot += '</tr></tfoot>';

    let style = ' style="align:center;id:test-table;border:1;"';
    // let returnedTable = '<table align="center" id="test-table" border="1">';
    // let returnedTable = '<table' + style + '>';
    let returnedTable = '<table>';
    returnedTable += tHead;
    returnedTable += tBody;
    returnedTable += tFoot;
    returnedTable += '</table>';
    returnedTable += '</table>';
    return returnedTable;
}
// ø <---------- </jsonToTable> ---------->