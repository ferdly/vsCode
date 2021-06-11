const Car = function (color, year, isConvertable) {
    this.color = color;
    this.year = year;
    this.isConvertable = isConvertable === true ? true : false;

}

let valiant =  new Car('white', 1963);

console.log(valiant);
