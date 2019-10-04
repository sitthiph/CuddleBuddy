$("#signup-button").on("click", function() {
  let newuserInfo = {
    firstName: $("#firstname").val(),
    lastName: $("#lastname").val(),
    emailAddress: $("#email").val(),
    password: $("#password").val(),
    gender: $("#gender").val(),
    dateofBirth: $("#dob").val(),
    cuddlerGender: $("#pregender").val(),
    imageLink: $("#image").val(),
    description: $("#desc").val()
  };

  console.log(newuserInfo);
});


