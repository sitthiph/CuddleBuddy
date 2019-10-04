
var user_id;

// login button click function and ajax POST, GET request to server

$("#login-button").on("click", function() {

  let userLogin = {

    userEmail: $("#user-email").val(),
    userPassword: $("#user-password").val()

  };

  console.log(userLogin);

  // Send the POST request to verify old user.

  $.ajax("/", {
    
    type: "POST",

    data: userLogin

  }).then(function(data) {
      
    console.log("old user login details");

    // if statement to validate the user

    if(data[0]) {

      // redirect user from login page to cuddlebuddy page if validated

      location.replace("/cuddle");

    }else{

      // if not validate, reload the login page

      location.reload();

    }
    
  });

  // ajax api get method for login page

  $.ajax("/api/signin", {
      
    type: "GET",
      
    data: userLogin
    
  }).then(function(data) {
        
    console.log("old user login details");
  
    // if statement to validate the user
  
    if(data[0]) {

      // redirect user from login page to cuddlebuddy page if validated
  
      location.replace("/cuddle");
  
    }else{

    // if not validate, reload the login page
  
     location.reload();
        
    }
      
        
      
  });
    
  

    
});


// click function for sign-up form and ajax POST method with new user object. 

$("#signup-button").on("click", function(event) {

  event.preventDefault();

  // getting new user information in a obj

  let newUserInfo = {

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

  console.log(newUserInfo);

  // ajax POST to send new user obj to backend

  $.ajax("/signup", {

    type: "POST",

    data: newUserInfo

  }).then(function(data) {
      
    console.log("new user information posted");

    // if statement to validate the user and retrieve user id from database

    if(data[0]) {

      // user id from database as variable

       user_id = data[1];

      // redirect user from sign-up page to cuddlebuddy page if validated

      location.replace("/cuddle");

    }else{
        
      // if not validated, reload the sign-up page

      location.reload();
      
    }

    // loop thru database and display result

    return user_id;


  });

  
});



// ajax GET method to get unmatched users from the unmatched table sending user id to backend

$.ajax({

  url: "/api/getunmatch",

  method: "GET",

  data: user_id

}).then(function(data) {

        
  console.log(data);
        

  // Loop through and display unmatched users

  for (var i = 0; i < data.length; i++) {

    $("#user-image").attr("src", data[i].pictures);

    $("user-age").html(data[i].age);

    $("#firstname").html(data[i].firstName);

    $("#lastname").html(data[i].lastName);

    $("#user-desc").html(data[i].description);

    var pendingId = data[i].pendingId;

    return pendingId;


    // This is here for reference

    // var waitList = $("#waitList");

    // // Then display the fields in the HTML (Section Name, Date, URL)
          
    // var listItem = $("<li class='list-group-item mt-4'>");

    // listItem.append(
          
    //   $("<h2>").text("Table #" + (i + 1)),
          
    //   $("<hr>"),
          
    //   $("<h2>").text("ID: " + waitData[i].customerID),
          
    //   $("<h2>").text("Name: " + waitData[i].customerName),
          
    //   $("<h2>").text("Email: " + waitData[i].customerEmail),
          
    //   $("<h2>").text("Phone: " + waitData[i].phoneNumber)
          
    // );

    // waitList.append(listItem);
        
  }
      
});

// cuddleMe button click function

$("#cuddle-button").on("click", function() {

  // storing user id and pending id in an obj

  let ids = {
    firstData: user_id,
    secondData: pendingId
  }

  // ajax POST method sending ids obj

  $.ajax("/api/postpending", {

  type: "POST",

  data: ids

  }).then({});

  // ajax GET method to get matches

  $.ajax({

    url: "/api/checkMatch",
  
    method: "GET",
  
    data: user_id
  
  }).then(function(data) {
  
          
    console.log(data);
          
  
    // Loop through and display matched users
  
    for (var i = 0; i < data.length; i++) {
  
      $("#user-image").attr("src", data[i].pictures);
  
      // $("user-age").html(data[i].age);
  
      $("#firstname").html(data[i].firstName);
  
      $("#lastname").html(data[i].lastName);
  
      // $("#user-desc").html(data[i].description);

    }
    
  });
  

});


console.log("code done");