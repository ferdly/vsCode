//<performReverse>
/**
 * ø with Inner instantiated Promise
 * ø THEN try{}catch{} based on something existing in .then()
 * ø     \_ that 'something' is the optimum 'return value'
 * ø it is the only way – with lots of trying – to return a value directly
 * ø 'from' a promise
 * ø looking a 'mondad' and 'lamda caclulus' and 'flatMap'-ping, indeed, an
 * ø attempt at a second .then() seems intriguing
 * ø ...but THIS is big for me
 * ø See <NOTES> below
 */
function performReverse(aQueryParameter = -999){
    var p = new Promise(function(resolve, reject) {
        console.log(aQueryParameter);
        if(typeof aQueryParameter === 'string') {
            reversedParameter = aQueryParameter.split("").reverse().toString().replace(/,/g,'');
            resolve()
        } else {
            errorString = "Parameter was not a String";
            reject(errorString);
        }
    })
    // console.log(reversedParameter)
    try{
        return reversedParameter;
    }
    catch(error){
        return errorString;
    }
}
//</performReverse>
let paramTest = 'EIGGER RO SIARAM MORF GNITSERETNI GNIHTEMOS NI SSAP';
let paramMarais = 'GNIRTS A SIHT EKAM';
let paramReggie = 'GNIRTS A TON SIHT EKAM';
//===========================================================
paramMarais = "Marais was named for Grand Marais";
//===========================================================
// paramReggie = null;
// paramReggie = [];
// paramReggie = {};
// paramReggie = 999;
// paramReggie = NaN;
//===========================================================
//===========================================================
paramTest = paramMarais;
//===========================================================
// paramTest = paramReggie;
//===========================================================
//===========================================================
let resultTest = performReverse(paramTest);
console.log(resultTest);
    
    //<NOTES>
    /**
     * ø (simple) performReverse() function
     * ø to quell 
     * ! 'performReverse is not defined'
     * @NOTES:
     * ø LINE: 14 [new Promise]
     * ø   does NOT work without variable declaration
     * ø    \_  'let' or 'const' or 'var'
     * ø   does NOT work without 'new'
     * ø    \_  as Promise is a Class (¿pretty sure?)
     * ø LINE: 18 [resolve()]
     * ø   does work if nothing or if something in passed into resolve() 
     * ø    \_ because reversedParameter is NOT undefined
     * ø       \_ so 'try' succeeds
     * ø LINE: 28 [catch]
     * ø   does work returning 'errorString' 
     * ø    \_ as the string is assigned in 'else' of Promise
     * ø   does work returning 'error' 
     * ø    \_ as the automated string error of the failure of 'try'
     */
    //</NOTES>