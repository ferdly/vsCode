//Tue Mar 24 2015 19:00:00 GMT-0500 (Central Daylight Time)
now = new Date;
nowString = now.toString();
nowString = nowString.substr(0,nowString.indexOf("GMT")).trim();
// nowString = "Now";
document.getElementById("title").innerHTML = "Coding Output: " + nowString;
document.getElementById("echo").innerHTML = "Hello Marias! <br>[js in same folder]"