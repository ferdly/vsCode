//<htmlBasics>
now = new Date;
nowString = now.toString();
nowYear = now.getFullYear();
nowHours = now.getHours();
nowHoursString = nowHours % 12 === 0 ? 12 : nowHours % 12;
nowAmPmString = nowHours >= 12 ? ' PM' : ' AM';
nowMinutes = now.getMinutes();
nowMinutesString = ("00" + nowMinutes).substr(-2);
nowSeconds = now.getSeconds();
nowSecondsString = ("00" + nowSeconds).substr(-2);
nowString = nowString.substr(0,nowString.indexOf(nowYear)).trim();
nowString += ' at ' + nowHoursString + ':' + nowMinutesString + ':' + nowSecondsString;
document.getElementById("title").innerHTML = "&nbsp;&nbsp;Coding Output: " + nowString;
// document.getElementById("echo").innerHTML = "Hello Marias! <br>[js in same folder]"
//</htmlBasics>
