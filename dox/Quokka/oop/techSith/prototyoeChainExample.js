const Car = function(){}
Car.prototype = {
    print(){
        return 'I am a Car';
    }
}

const ToyCar = function(){}
ToyCar.prototype = Object.create(Car.prototype);
ToyCar.prototype = {
    print(){
        return 'I am a ToyCar';
    }
}

const ToyTransformer = function(){}
ToyTransformer.prototype = Object.create(ToyCar.prototype);
ToyTransformer.prototype = {
    print(){
        return 'I am a ToyTransformer';
    }
}

let hondaElement = new Car;
console.log(hondaElement.print());

let hotWheel = new ToyCar;
console.log(hotWheel.print());

let bumbleBee = new ToyTransformer;
console.log(bumbleBee.print());