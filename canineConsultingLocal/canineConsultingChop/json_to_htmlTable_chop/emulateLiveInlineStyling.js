let theHTML = "<table><thead><tr><th>#</th><th>eMail Address</th><th>Kind</th><th>Primary</th></tr></thead><tbody><tr><td>1</td><td>fredweston@cia.gov</td><td>MAIN</td><td>true</td></tr><tr><td>2</td><td>quickgroup@gmail.com</td><td>HOME</td><td>false</td></tr><tr><td>3</td><td>fred@stormda.com</td><td>WORK</td><td>false</td></tr></tbody></table></table>";
/**
 * ! NOTES:
 * ø use += to emulate writing CSS in an editor
 * ø ↪ using back-ticks works, but the result has all the line breaks
 */
let styleObject = {};
// styleObject.table = false;
styleObject.table = ``;
styleObject.table += `color:blue;`;
styleObject.table += `font-family: Arial, Helvetica, sans-serif;`;
styleObject.table += `font-size: 17px;`;
styleObject.table += `background-color:white;`;
styleObject.table += `border: 5px solid blue;`;
// styleObject.thead = false;
styleObject.thead = ``;
styleObject.thead += `color: white;`;
styleObject.thead += `background-color:blue;`;
styleObject.tbody = false;
styleObject.trow = false;
// styleObject.trow = ``;
// styleObject.trow += `border: 5px solid purple;`;
// styleObject.tdata = false;
styleObject.tdata = ``;
styleObject.tdata += `border: 10px solid white;`;
styleObject.tfoot = false;

let tableTagReplacement = typeof styleObject.table === 'string' ? '<table style="' + styleObject.table + '">' : '<table>';
let theadTagReplacement = typeof styleObject.thead === 'string' ? '<thead style="' + styleObject.thead + '">' : '<thead>';
let tbodyTagReplacement = typeof styleObject.tbody === 'string' ? '<tbody style="' + styleObject.tbody + '">' : '<tbody>';
let trowTagReplacement = typeof styleObject.trow === 'string' ? '<tr style="' + styleObject.trow + '">' : '<tr>';
let tdataTagReplacement = typeof styleObject.tdata === 'string' ? '<td style="' + styleObject.tdata + '">' : '<td>';
let tfootTagReplacement = typeof styleObject.tfoot === 'string' ? '<tfoot style="' + styleObject.tfoot + '">' : '<tfoot>';
theHTML = theHTML.replace('<table>', tableTagReplacement);
theHTML = theHTML.replace('<thead>', theadTagReplacement);
theHTML = theHTML.replace('<tbody>', tbodyTagReplacement);
theHTML = theHTML.replace('<tr>', trowTagReplacement);
theHTML = theHTML.replaceAll('<td>', tdataTagReplacement);
theHTML = theHTML.replace('<tfoot>', tfootTagReplacement, 2);
textAreaStyle = ""
textAreaStyle += "font-family: Courier, New Courier, serif;"
textAreaStyle += `font-size: 17px;`
textareaForCode = '<textarea rows="20" cols="100" style="'+textAreaStyle+'">' + JSON.stringify(styleObject) + '</textarea>';
// console.warn('theHTML: ');
// console.warn(theHTML);
document.getElementById("table").innerHTML = theHTML;
// console.warn('theHTML: ');
// console.warn(theHTML);
document.getElementById("code").innerHTML = textareaForCode;



