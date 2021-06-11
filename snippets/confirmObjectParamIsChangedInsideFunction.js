let petObjectThis = {};
petObjectThis.pets = [];
petObjectThis.pets[0] = {};
petObjectThis.pets[0].name = "Chester";
petObjectThis.pets[1] = {};
petObjectThis.pets[1].name = "Algonquin";
console.warn('BEFORE: petObjectThis: ');
console.warn(petObjectThis);
expandObjectElements (petObjectThis);
// expandObjectElements ();
console.warn('AFTER: petObjectThis: ');
console.warn(petObjectThis);
// console.warn('AFTER: petObject: ');
// console.warn(petObject);

export function expandObjectElements (petObject = {}){
    petObject.pets.forEach(elementObject => {
        let name = (elementObject.name).toLowerCase();
        let dogNameArray = ['feather','marcy','chester','marais'];
        let catNameArray = ['algonquin'];
        if(dogNameArray.includes(name)){
            elementObject.kind = 'dog';
        }
        if(catNameArray.includes(name)){
            elementObject.kind = 'cat';
        }
        // console.log(elementObject);
    });

}
