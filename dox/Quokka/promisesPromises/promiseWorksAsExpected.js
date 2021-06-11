/**
 * Asnwer to:
 * @url: https://stackoverflow.com/questions/27604262/accessing-the-promise-object-from-within-the-then-function
 * @reply: Thanks . Works as expected .
 */


//<performSearch>
/**
 * ø (simple) performSearch() function
 * ø to quell 
 * ! 'performSearch is not defined'
 */
function performSearch(aQueryParameter){
    let p = new Promise(function(resolve, reject) {
        console.log(aQueryParameter);
        if(typeof aQueryParameter === 'string') {
        // if(true) {
            reversedParameter = aQueryParameter.split("").reverse().toString().replace(/,/g,'');
            resolve(reversedParameter)
         } else {
            error = "Error: parameter was not a String";
            reject(error);
         }
    })
    // console.log(reversedParameter)
    try{
        return reversedParameter;
    }
    catch(err){
        return err;
    }
}
//</performSearch>
//<processResults>
// async function processReverseResults(theResult) {
//     return await theResult;
// }
//</processResults>
// paramMarais = "Grand Marais";
// let Marais = performSearch(paramMarais);
// .then(result => {console.log(result);
//                 return processReverseResults(result)})
// .catch(err => console.log(err));
// console.log(Marais);
paramReggie = null;
let Reggie = performSearch(paramReggie);
//                 .then(result => {console.log(result)})
//                 .catch(err => {console.log(err)});
console.log(Reggie);

//<Original>
//a var queries = ["2091 OR 2092 OR 2093", 
//a             "2061 OR 2062",
//a             "2139 OR 2140 OR 2141"
//a             ];

//a var promises = queries.map(function(query) {
//a     var promise = performSearch(query);
//a     console.log("Outside function ", query);
//a     var processedPromise = promise.then(function(data) {
//a         console.log("In function ", query);
//a         return processSearchResults(data, query);
//a     });
//a     return processedPromise; // I assume you don't want the unprocessed results
//a });
//a Q.allSettled(promises).then(function(processedResults) {
//a     endFunction(processedResults);
//a });
//</Original>
//<Single> not Array

var queries = ["2091 OR 2092 OR 2093", 
            "2061 OR 2062",
            "2139 OR 2140 OR 2141"
            ];

var singleQuery = "2091 OR 2092 OR 2093";


        // var promise = performSearch(singleQuery);
        // console.log("Outside function ", singleQuery);
        // var processedPromise = promise.then(function(data) {
        //     console.log("In function ", query);
        //     return processSearchResults(data, query);
        // });

//</Single>
// Q.allSettled(promises).then(function(processedResults) {
//     endFunction(processedResults);
// });