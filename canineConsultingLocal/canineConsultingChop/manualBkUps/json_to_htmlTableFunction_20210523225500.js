// ø <---------- <jsonToTable>  ---------->
export function jsonToTable(jsonData, paramJSON) {

    let testReturnObject = {};
    let testReturnString = "[test return value]";
    testReturnString = "[test return value]";
    let testTypeOf = 'I think it returns a string';
    let testReturnLog = '<h1>Hi Brad</h1><p>Log Sucessful Steps Here.</p>';
    testReturnLog = '<h1>Hi Brad</h1><p>Cut to the chase, the Monster has been Tamed! Now just dealing with snazzy tFoot</p>';
    let tbodyElementArray = JSON.parse(jsonData); // MOOT but not rewriting code below until certain
    let messages = [];
    // testReturnObject = JSON.parse(paramJSON);
    // testReturnObject = testReturnObject["tFootObject"];
    // testReturnString = JSON.stringify(testReturnObject);
    // return testReturnString;


    //<tHead could become a function>
    let paramObject = JSON.parse(paramJSON);
    let tHeadElement = {};
    let tFootElement = {};
    let tHeadValues = [];
    let tableKeys = [];

    if (Object.keys(paramObject.tHeadElement).length > 0) {
        tHeadElement = paramObject.tHeadElement;
        tableKeys = Object.keys(paramObject.tHeadElement);
        tHeadValues = Object.values(tHeadElement);
    } else {
        tHeadElement = tbodyElementArray[0];
        tableKeys = Object.keys(tHeadElement);
        tHeadValues = Object.keys(tHeadElement);

    }
    let tHead = '<thead><tr>';
    tHeadValues.forEach(element => {
        tHead += '<th>' + element + '</th>';
    })
    tHead += '</tr></thead>';
    //</tHead could become a function>


    // <tBody could become a function>
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
    // </tBody could become a function>
    // testReturnString = tBody;
    // return testReturnString;


    // testReturnObject = paramObject["tFootObject"];
    // testReturnString = JSON.stringify(testReturnObject);
    // return testReturnString;

    let tFootObjectParam = paramObject["tFootObject"];
    tFootObjectParam.tableKeys = tableKeys;
    let tFoot = tableTfoot(tFootObjectParam);
    testReturnString = tFoot;
    return testReturnString;



    //<tFoot could become a function>
    // let evalObject = {};
    // let tFootBoolean = true;// ! will be caught to abort
    // // testReturnString = "[typeof paramObject.tFootObject] ";
    // // testReturnString += typeof paramObject.tFootObject;
    // // return testReturnString;
    // if (typeof paramObject.tFootObject === 'object') {
    // // testReturnString = "[tFootBoolean.toString()] ";
    // // testReturnString += tFootBoolean.toString();
    // // return testReturnString;
    //     //<evalKVP Loop>
    //     tFootElement = paramObject.tFootObject.tFootElement;
    //     if (Array.isArray(paramObject.tFootObject.evalKVParray)) {
    //         let evalKVParray = paramObject.tFootObject.evalKVParray;

    //         let evalKey = '';
    //         let evalValueCode = '';
    //         evalKVParray.forEach(evalKVPelement => {
    //             evalKey = evalKVPelement[0]
    //             evalValueCode = evalKVPelement[1]
    //             evalObject[evalKey] = eval(evalValueCode);
    //         });
    //         // testReturnString = "[evalObject] ";
    //         // testReturnString = JSON.stringify(evalObject);
    //         // return testReturnString;
    //     } else {
    //         tFootBoolean = false;
    //         messages = ["tFoot is so complex that it cannot be accomplished via appending a last row to he core JSON"
    //             , "moreover, the paradigm is most powerful when you just _have_ JSON and apply this to get a table"];
    //     }
    //     //</evalKVP Loop>
    // } else {
    //     tFootBoolean = false;
    //     messages = ["tFoot is so complex that it cannot be accomplished via appending a last row to he core JSON"
    //         , "moreover, the paradigm is most powerful when you just _have_ JSON and apply this to get a table"];
    //     // console.log(messages);
    // }

    // //<mainBoolean and Construct>
    // let tFoot = '<tfoot><tr>';
    // if (tFootBoolean) {
    //     let tRow = ''
    //     let valueCode = ''
    //     let value = ''
    //     let colspanIndex = 0;
    //     let colspanArray = tFootElement.colspan;
    //     let tFootRows = '';
    //     tableKeys.forEach(element => {
    //         valueCode = tFootElement[element];
    //         if (valueCode.length > 0) {
    //             value = eval(valueCode)
    //             tFootRows += '<td';
    //             tFootRows += colspanArray[colspanIndex] > 0 ? ' colspan="' + colspanArray[colspanIndex] + '">' : '>';
    //             tFootRows += value + '</td>'
    //         } else {
    //             messages = ['unused']
    //         }
    //         colspanIndex++;
    //     });


    //     tFoot += tFootRows;
    // } else {
    //     tFoot += '';
    // }
    // tFoot += '</tr></tfoot>';
    // //</mainBoolean and Construct>

    // //</tFoot could become a function>


    let returnedTable = '<table>';
    returnedTable += tHead;
    returnedTable += tBody;
    returnedTable += tFoot;
    returnedTable += '</table>';
    returnedTable += '</table>';
    return returnedTable;
}
// ø <---------- </jsonToTable> ---------->

// ø <---------- <tableTfoot>  ---------->
export function tableTfoot(tFootObject){
    return 'RETURN tFoot value';
    let tableKeys = tFootObject.tableKeys;





    //<tFoot could become a function>
    let evalObject = {};
    let tFootBoolean = true;// ! will be caught to abort
    // testReturnString = "[typeof paramObject.tFootObject] ";
    // testReturnString += typeof paramObject.tFootObject;
    // return testReturnString;
    let tFootElement = {};
    if (typeof tFootObject === 'object') {
    // testReturnString = "[tFootBoolean.toString()] ";
    // testReturnString += tFootBoolean.toString();
    // return testReturnString;
        //<evalKVP Loop>
        tFootElement = tFootObject.tFootElement;
        if (Array.isArray(tFootObject.evalKVParray)) {
            let evalKVParray = tFootObject.evalKVParray;

            let evalKey = '';
            let evalValueCode = '';
            evalKVParray.forEach(evalKVPelement => {
                evalKey = evalKVPelement[0]
                evalValueCode = evalKVPelement[1]
                evalObject[evalKey] = eval(evalValueCode);
            });
            // testReturnString = "[evalObject] ";
            // testReturnString = JSON.stringify(evalObject);
            // return testReturnString;
        } else {
            tFootBoolean = false;
            // messages = ["tFoot is so complex that it cannot be accomplished via appending a last row to he core JSON"
                // , "moreover, the paradigm is most powerful when you just _have_ JSON and apply this to get a table"];
        }
        //</evalKVP Loop>
    } else {
        tFootBoolean = false;
        // messages = ["tFoot is so complex that it cannot be accomplished via appending a last row to he core JSON"
            // , "moreover, the paradigm is most powerful when you just _have_ JSON and apply this to get a table"];
        // console.log(messages);
    }

    //<mainBoolean and Construct>
    let tFoot = '<tfoot><tr>';
    if (tFootBoolean) {
        let tRow = ''
        let valueCode = ''
        let value = ''
        let colspanIndex = 0;
        let colspanArray = tFootElement.colspan;
        let tFootRows = '';
        tableKeys.forEach(element => {
            valueCode = tFootElement[element];
            if (valueCode.length > 0) {
                value = eval(valueCode)
                tFootRows += '<td';
                tFootRows += colspanArray[colspanIndex] > 0 ? ' colspan="' + colspanArray[colspanIndex] + '">' : '>';
                tFootRows += value + '</td>'
            } else {
                // messages = ['unused']
            }
            colspanIndex++;
        });


        tFoot += tFootRows;
    } else {
        tFoot += '';
    }
    tFoot += '</tr></tfoot>';
    //</mainBoolean and Construct>

    //</tFoot could become a function>



    return '';
}



// ø <---------- </tableTfoot> ---------->