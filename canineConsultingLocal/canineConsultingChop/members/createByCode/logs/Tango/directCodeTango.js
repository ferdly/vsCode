    let email = "qiqgroup+tom@gmail.com";
    let password = "test";
    let firstName = "Tom";
    let lastName = "Tango";
    wixUsers.register(email, password, {
        contactInfo: {
            "firstName": firstName,
            "lastName": lastName,
        }
    } )
    .then( (result) => {
    console.log(result.status);
    console.log(result.approvalToken);
    console.log(result.user);
    let status = result.status;
    let approvalToken = result.approvalToken;
    let user = result.user;
    $w("#memberInsertResult").value = JSON.stringify(result,undefined, 4);
    } );