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


var mouse_is_inside = false;

$(document).ready(function()
{
    $('.form_content').hover(function(){ 
        mouse_is_inside=true; 
    }, function(){ 
        mouse_is_inside=false; 
    });

    $("body").mouseup(function(){ 
        if(! mouse_is_inside) $('.container').hide();
    });
});