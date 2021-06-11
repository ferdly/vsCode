//https://support.wix.com/en/article/velo-web-modules-calling-backend-code-from-the-frontend
import {sendEmail} from 'backend/sendEmail.jsw';
//...

//<Local Function>
function sendButton_onClick(event) {
    //<Local Function Calling Backend Function>
    sendEmail(
        $w("#addressInput").value,
        $w("#subjectInput").value,
        $w("#bodyInput").value)
    //</Local Function Calling Backend Function>
        
        //! <Backend Function Calls handled as 'Promises'>
        //ø  even though the backend function is NOT a promise, Velo/WiX makes it one (by 'Proxy')
        //ø  as such, you WILL need a .then()
        //ø  as such, you may choose to append a .catch() [recommended, even if just console.log()]
        .then(
            //<.then() uses an anonymous function>
            function() {
                console.log("email was sent");
            }
            //</.then() uses an anonymous function>
        );
        //! </Backend Function Calls handled as 'Promises'>
    }
//</Local Function>
/**
 * NOTES: 
 *  * .catch() & console.log:  
 *      properly, you might want to use console.error, because, well, it's an
 *      error. However, for debugging at least, make sure you can distinguish
 *      this Caught error from others. Perhaps console.warn, or the first being
 *      console.error(".catch() at approx Line 374")
 *
 *  * anonymous function: 
 *      the truth is, anywhere you can use an anonymous function yu can use a
 *      named function and vice versa 
 *      in promises, with the .then() portion of a promise it is nearly always
 *      just an anonymous function because it does something simple such as convey
 *      the results to somea variable (or in the case of errors, just log them)
 */
