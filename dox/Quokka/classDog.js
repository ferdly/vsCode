class Dog {
    constructor(name, breedArray,year, month, day){
        this.name = name;
        this.breedArray = breedArray ?? [];
        this.mixCount = this.breedArray.length;
        this.legs = 4;
        this.year = year ?? 1970;//purposely WRONG
        this.month = month ?? 6;//reasonable guess, especialy for rescue dogs
        this.day = day ?? 15;//very reasonable, many don't know a day
        this.humanAgeString = this.calcHumanAgeString (this.year, this.month, this.day);
    }
    calcHumanAgeString (year, month, day){
        let dob = new Date(year, month - 1, day, 0, 0, 0);
        console.log(dob);
        let today = new Date();
        let fullYear = today.getFullYear(); 
        console.log(fullYear)
        let dogMilliseconds = Math.floor((today - dob));
        console.log(dogMilliseconds)
        let remainingMilliseconds = dogMilliseconds * 7;
        console.log(remainingMilliseconds)
        let milliseconds = remainingMilliseconds % 1000;
        console.log(milliseconds)
        let remainingSeconds = Math.floor(remainingMilliseconds/1000);
        console.log(remainingSeconds)
        let seconds = remainingSeconds % 60;
        console.log(seconds)
        let remainingMinutes = Math.floor(remainingSeconds/60);
        console.log(remainingMinutes)
        let minutes = remainingMinutes % 60;
        console.log(minutes)
        let remainingHours = Math.floor(remainingMinutes/60);
        console.log(remainingHours)
        let hours = remainingHours % 24;
        console.log(hours)
        let remainingDays = Math.floor(remainingHours/24);
        console.log(remainingDays)
        let days = remainingHours % 365.25;
        console.log(days)
        let humanYears = Math.floor(remainingDays/365.25);
        console.log(humanYears)
        let humanYYYY = year + humanYears;
        console.log(humanYYYY)
        let humanDOB = new Date(humanYYYY, 0, days , 0, 0, 0)
        console.log(humanDOB)
        let humanMonths = humanDOB.getMonth() + 1;
        console.log(humanMonths);
        let humanDays = humanDOB.getDate();
        console.log(humanDays);
        let humanYearsString = humanYears > 9 ? `${humanYears} years, ` : '';
        let humanMonthsString = humanMonths === 1 ? `${humanMonths} month, ` : `${humanMonths} months, `;
        humanMonthsString = humanMonths === 0 ? '' : humanMonthsString;
        let humanDaysString = humanDays === 1 ? `${humanDays} day, ` : `${humanDays} days, `;
        humanDaysString = humanDays === 0 ? '' : humanDaysString;
        let humanHoursString = hours === 1 ? `${hours} hour, ` : `${hours} hours, `;
        humanHoursString = hours === 0 ? '' : humanHoursString;
        let humanAgeString = humanYearsString + humanMonthsString + humanDaysString + humanHoursString;
        console.log(humanAgeString)
        return humanAgeString;
    }
    
};

const marais = new Dog("Marias",["German Shepard","Border Collie"], 2010, 9, 6);
console.log(marais);
console.log(marais.humanAgeString);
const chester = new Dog("Chester",["Husky","Saluki"], 2004, 3, 11);
console.log(chester);
console.log(chester.humanAgeString);
