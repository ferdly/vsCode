whosThere = function(username, password){
    return new Promise(function(resolve, reject)
    {
        let sophisticatedUserDatabase = ["bradLowry","codeQueen"]
        let passwordString = '';
        for (let index = 0; index < password.length; index++) {
            passwordString += '•';
            
        }
        if (sophisticatedUserDatabase.includes(username) ){
            resolve("username@" + username + ":password@" + passwordString);
        } else {
            reject(Error("Get the BLEEP outa here!"));
        }
    });
}

let userLogins = [["bradLowry","super secret"],["codeQueen","nicelongpassword"],["michaelPatrickStrauch","iamsuperhyped"]];
let randomUser = userLogins[Math.floor(Math.random() * userLogins.length)];
console.log(randomUser);
let me = whosThere(randomUser[0],randomUser[1])
        .then( result => {
            // console.log(result);
            getMe(result);
            return result;
        })
        .catch( err => {
            // console.log(err);
            return err;
        });
        console.log(me);
let meAssignedWithinPromise = "WTF";
console.log(meAssignedWithinPromise);
function getMe(meFromPromise){
    return meFromPromise;
}
console.log(meAssignedWithinPromise);