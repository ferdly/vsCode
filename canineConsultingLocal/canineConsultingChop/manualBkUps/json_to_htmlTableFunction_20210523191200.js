/**
 * ! Source: https://www.geeksforgeeks.org/how-to-convert-json-data-to-a-html-table-using-javascript-jquery/
 * ø json must be an array of objects
 * ø first element will determine the headers and the data displayed in the rest
 * ø of the table. It is assumed that the first element will be skipped other
 * ø than harvesting the table-data. In this way, JSON with 50 attributes can
 * ø display a three column table
 */

// let now = new Date;
// let nowString = now.toString()
// nowString = nowString.substr(0, nowString.indexOf(":", nowString.indexOf(':') + 1));
// console.log(nowString);
/** 
 * ø paramObjectMinimal (passed to paramObject parameter)
 * ø • passed to paramObject parameter
 * ø • that one is implementing the fFootObject indicates a thorough understanding
 * ø • the mechanism works perfectly well _without_ using a sophisticated tFoot block
 * ø • evalKVParray must resolve to 'evalObject'
 * ø • as evalKVP is expected to be used extensively, just us "new String('Report')"
 * ø • • for the Literal <td> value of 'Report'
 * ø • do include (boolean) false or default values for all sophisticated paramObject elements
 * ø • • Specifically:
 * ø • •   paramObjectMinimal.tHeadElement = false  
 * ø • •   paramObjectMinimal.tFootObject = false
 * ø • •   or Granulate: paramObjectMinimal.tFootObject = false
 * ø • •       paramObjectMinimal.tFootObject.tFootElement = false
 * ø • • Indeed: do use the 'empty object 'paramObjectDefualt' as a starter to
 * ø • •         ↪ this will ensure no 'else's will be necessary
 */
let paramObjectDefaultJSON = "{\"tHeadElement\":{},\"tFootObject\":{\"tFootElement\":{},\"evalKVParray\":[]},\"tableDataObjectArrayKey\":\"\"}"

// let paramObjectDefault = JSON.parse(paramObjectDefaultJSON);
let paramObjectMinimal = JSON.parse(paramObjectDefaultJSON);
let paramObjectHeader = JSON.parse(paramObjectDefaultJSON);
let paramObjectBoth = JSON.parse(paramObjectDefaultJSON);

paramObjectMinimal.tableDataObjectArrayKey = "dataArray";
paramObjectHeader.tableDataObjectArrayKey = "dataArray";
paramObjectBoth.tableDataObjectArrayKey = "dataArray";

paramObjectHeader.tHeadElement = {
    "email": "eMail Address",
    "tag": "Kind",
    "primary": "Primary"
};
paramObjectBoth.tHeadElement = {
    "email": "eMail Address",
    "tag": "Kind",
    "primary": "Primary"
};

paramObjectMinimal.tFootObject = {};//if they don't use the default object
paramObjectHeader.tFootObject = {};//if they don't use the default object
paramObjectBoth.tFootObject = {};//if they don't use the default object

paramObjectBoth.tFootObject.tFootElement = {
    "email": "evalObject.footer",
    "tag": "",
    "primary": "",
    "colspan": [3, 1, 1]
};

paramObjectBoth.tFootObject.evalKVParray = [
    ["now", "new Date"],
    ["nowString", "evalObject.now.toString()"],
    ["footer", "evalObject.nowString.substr(0,evalObject.nowString.indexOf(':',evalObject.nowString.indexOf(':') +1))"],
];

// console.log(paramObjectMinimal);
// console.log(paramObjectHeader);
// console.log(paramObjectBoth);

// console.warn('paramObjectMinimal: ');
// console.warn(paramObjectMinimal);
// console.log(JSON.stringify(paramObjectMinimal,undefined,4));

let jsonEmails = {
    "dataArray": [
        {
            "email": "fredweston@cia.gov",
            "tag": "MAIN",
            "security": "TOP_SECRET", 
            "primary": "true"
        },
        {
            "email": "quickgroup@gmail.com",
            "tag": "HOME",
            "primary": "false"
            , "description": "quickgroup is the name I know from my Vermont days"
        },
        {
            "email": "fred@stormda.com",
            "tag": "WORK",
            "description": "a gSuite account from Storm Discovery Associates",
            "primary": "false"
        }
    ]
};










//! <Actual Code Call>
// let htmlMinimal = jsonToTable(jsonEmails, paramObjectMinimal);
// console.log(htmlMinimal);

// let htmlHeader = jsonToTable(jsonEmails, paramObjectHeader);
// console.log(htmlHeader);

let htmlBoth = jsonToTable(jsonEmails, paramObjectBoth);
console.log(htmlBoth);

//! </Actual Code Call>









// ø <---------- <jsonToTable>  ---------->
function jsonToTable(jsonData, paramObject = {}) {


    // console.log('paramObject: ');
    // console.log(paramObject);
    let tableDataObjectArrayKey = paramObject.tableDataObjectArrayKey;
    let tbodyElementArray = jsonData[tableDataObjectArrayKey];
    // console.log(tbodyElementArray);;
    let messages = [];










    //<tHead could become a function>
    let tHeadElement = {};
    let tFootElement = {};
    let tHeadValues = [];
    let tableKeys = [];
    // console.log(Object.keys(tHeadElement).length)
    // if (typeof param÷Object.tHeadElement === 'object') {
    if (Object.keys(paramObject.tHeadElement).length > 0) {
        tHeadElement = paramObject.tHeadElement;
        // console.log(tHeadElement);
        // tfootElement = tbodyElementArray.pop();
        tableKeys = Object.keys(paramObject.tHeadElement);
        tHeadValues = Object.values(tHeadElement);
    } else {
        tHeadElement = tbodyElementArray[0];
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
    // console.log(typeof paramObject.tHeadElement)
    // console.log(tHeadElement);
    console.log(tableKeys);
    // console.log(theadValues);
    console.log(tHead);
    //</tHead could become a function>


















    // console.log(tbodyElementArray)
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
    let returnedTable = '<table align="center" id="test-table" border="1">';
    // let returnedTable = '<table' + style + '>';
    returnedTable += tHead;
    returnedTable += tBody;
    returnedTable += tFoot;
    returnedTable += '</table>';
    returnedTable += '</table>';
    return returnedTable;
}
// ø <---------- </jsonToTable> ---------->

