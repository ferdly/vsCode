// //<htmlBasics>
// now = new Date;
// nowString = now.toString();
// nowYear = now.getFullYear();
// nowHours = now.getHours();
// nowHoursString = nowHours % 12 === 0 ? 12 : nowHours % 12;
// nowAmPmString = nowHours >= 12 ? ' PM' : ' AM';
// nowMinutes = now.getMinutes();
// nowMinutesString = ("00" + nowMinutes).substr(-2);
// nowString = nowString.substr(0,nowString.indexOf(nowYear)).trim();
// nowString += ' at ' + nowHoursString + ':' + nowMinutesString + '&nbsp;&nbsp;';
// document.getElementById("title").innerHTML = "&nbsp;&nbsp;Coding Output: " + nowString;
// // document.getElementById("echo").innerHTML = "Hello Marias! <br>[js in same folder]"
// //</htmlBasics>
animalTranslations = function(animal){
    return new Promise(function(resolve, reject) {
    animal = animal.toLowerCase();
    //! resolve() should be a full sentence string
    switch (animal) {
        case "dog":
            resolve ("Woof!")
            break;
        case "cat":
            resolve ("Meow...")
            break;
        case "cow":
            resolve ("Moooo.")
            break;
        case "pig":
            resolve ("Oink!-Oink!")
            break;
            
        default:
            reject("animal not supported")
            break;
        }
    });
};
let animalArray = ['Dog','Cat','Cow','Pig','Sheep'];
let myAnimal = animalArray[Math.floor(Math.random() * animalArray.length)];
let speak = animalTranslations(myAnimal)
            .then(result => {
                let resultString = 'The ' + myAnimal + ' says,"' + result + '"';
                document.getElementById("result").innerHTML = resultString})
            .catch( error => {
                errorString = '[' + myAnimal + ": " + error + ']';
                document.getElementById("error").innerHTML = errorString});
