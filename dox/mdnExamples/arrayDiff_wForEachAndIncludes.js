const arraySquares = [1, 4, 9, 16];
const arrayEvens = [2,4,6,8,10,12,14,16,18]
phpSupportedFormatElementsToDo = [];
arrayEvens.forEach(element => {
  if (!arraySquares.includes(element))
  {
    // console.log(element);
    phpSupportedFormatElementsToDo[phpSupportedFormatElementsToDo.length] = element;
  }
});
console.log(phpSupportedFormatElementsToDo);

