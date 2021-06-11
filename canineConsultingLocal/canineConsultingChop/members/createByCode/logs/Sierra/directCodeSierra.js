let email = "qiqgroup+sarah@gmail.com";
let password = "test";
wixUsers.register(email, password)
.then( (result) => {
  let status = result.status;
  let user = result.user;
} );