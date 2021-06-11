let pets = { "dogs": [{ "name": "Feather" },{ "name": "Marcy" },{ "name": "Chester" },{ "name": "Marais" }] };
let pathChunk = "dogs";
let directPathValue = pets.dogs[1].name;
let directPathVariable = "dogs[1].name";
console.log(directPathValue);
console.log(pets[pathChunk][1]["name"]);
console.log(eval('pets.' + directPathVariable));