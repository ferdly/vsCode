    let email = "qiqgroup+victor@gmail.com";
    let password = "test";
    let firstName = "Victor";
    let lastName = "Veracruz";
    let emails = ["qiqgroup+victor102@gmail.com","qiqgroup+victor900@gmail.com"];
    let loginEmail = "qiqgroup+victor@gmail.com";
    let phones = ["(213) 926-1853","(317) 463-8707"];
    let addresses = [{address:"587 Victor Avenue",address2:"#85",city:"Virginia",state:"MN",postalCode:"55792"},{address:"939 Victor Street",address2:"#156",city:"Virginia",state:"MN",postalCode:"55792"}];
    wixUsers.register(email, password, {
        contactInfo: {
            "firstName": firstName,
            "lastName": lastName,
            "emails": emails,
            "loginEmail": loginEmail,
            "phones": phones,
            "addresses": addresses,
        }
    } )
    .then( (result) => {
    console.log(result.status);
    console.log(result.approvalToken);
    console.log(result.user);
    let resultStatus = result.status;
    $w("#memberInsertResult").value = JSON.stringify(result,undefined, 4);
    } );