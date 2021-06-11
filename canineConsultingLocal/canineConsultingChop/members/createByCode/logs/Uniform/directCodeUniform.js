    let email = "qiqgroup+ulysses@gmail.com";
    let password = "test";
    let firstName = "Ulysses";
    let lastName = "Uniform";
    let emails = ["qiqgroup+ulysses948@gmail.com","qiqgroup+ulysses776@gmail.com"];
    let loginEmail = "qiqgroup+ulysses@gmail.com";
    let phones = ["(905) 498-9298","(518) 270-6373"];
    let labels = ["202106","Student"];
    wixUsers.register(email, password, {
        contactInfo: {
            "firstName": firstName,
            "lastName": lastName,
            "emails": emails,
            "loginEmail": loginEmail,
            "phones": phones,
            "labels": labels,
        }
    } )
    .then( (result) => {
    console.log(result.status);
    console.log(result.approvalToken);
    console.log(result.user);
    let resultStatus = result.status;
    $w("#memberInsertResult").value = JSON.stringify(result,undefined, 4);
    } );