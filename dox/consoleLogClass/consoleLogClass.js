// const cl function (content, line = 'NNULL', color = '#fff', backgroundColor = '#EA4335', fontWeight = 'bold', padding = '8px 16pm', borderRadius = '8px')
// {
//     this.line = line === 'NNULL' ? '' : ' [Line ~' + line + ']' ;
//     this.content = "%c" + content + this.line
//     this.css = "color: " + color + "; background-color: " + backgroundColor + "; font-weight:" + fontWeight + "; padding: " + padding + "; border-radius: " + borderRadius + ";"; 
//     console.log(thisCL.content,"`" + thisCL.css + "`")
// }
function cl(content, line = null, color = '#fff', backgroundColor = '#EA4335', fontWeight = 'bold', padding = '8px 16pm', borderRadius = '8px'){
    line = line === null ? '' : ' [Line ~' + line + ']' ;
    content = "%c" + content + line
    css = "color: " + color + "; background-color: " + backgroundColor + "; font-weight:" + fontWeight + "; padding: " + padding + "; border-radius: " + borderRadius + ";"; 
    console.log(css);
    console.log(content,"`" + css + "`")
}

let message = ""
// let thisCL = new cl ('Marais is the Best Girl',8);
cl ('Marais is the Best Girl','8');
cl ('Chester is the Best Boy');
// console.log(thisCL.content);
// console.log(thisCL.css)
// console.log(thisCL.content,"`" + thisCL.css + "`")

// console.log(
//     "%cReally Emphatic Console Log for Debugging [Line ~18]",
//     `color: #fff;
//     background-color: #EA4335;
//     font-weight: bold;
//     padding: 8px 16px;
//     border-radius: 8px;`
//     );


//<htmlBasics>
now = new Date;
nowString = now.toString();
nowString = nowString.substr(0,nowString.indexOf("GMT")).trim();
document.getElementById("title").innerHTML = "Coding Output: " + nowString;
document.getElementById("echo").innerHTML = "Hello Marias! <br>[js in same folder]"
//</htmlBasics>