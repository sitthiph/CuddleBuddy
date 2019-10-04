// Get references to page elements
//var $exampleText = $("#example-text");
//var $exampleDescription = $("#example-description");
//var $submitBtn = $("#submit");
//var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
//var API = {
//saveExample: function(example) {
//return $.ajax({
// headers: {
//         "Content-Type": "application/json"
//       },
//       type: "POST",
//       url: "api/examples",
//       data: JSON.stringify(example)
//     });
//  // },
//   getExamples: function() {
//     return $.ajax({
//       url: "api/examples",
//       type: "GET"
//     });
//   },
//   deleteExample: function(id) {
//     return $.ajax({
//       url: "api/examples/" + id,
//       type: "DELETE"
//     });
//   }
// };

// // refreshExamples gets new examples from the db and repopulates the list
// var refreshExamples = function() {
//   API.getExamples().then(function(data) {
//     var $examples = data.map(function(example) {
//       var $a = $("<a>")
//         .text(example.text)
//         .attr("href", "/example/" + example.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": example.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $exampleList.empty();
//     $exampleList.append($examples);
//   });
// };

// // handleFormSubmit is called whenever we submit a new example
// // Save the new example to the db and refresh the list
// var handleFormSubmit = function(event) {
//   event.preventDefault();

//   var example = {
//     text: $exampleText.val().trim(),
//     description: $exampleDescription.val().trim()
//   };

//   if (!(example.text && example.description)) {
//     alert("You must enter an example text and description!");
//     return;
//   }

//   API.saveExample(example).then(function() {
//     refreshExamples();
//   });

//   $exampleText.val("");
//   $exampleDescription.val("");
// };

// // handleDeleteBtnClick is called when an example's delete button is clicked
// // Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function() {
//     refreshExamples();
//   });
// };

// // Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);

// Example starter JavaScript for disabling form submissions if there are invalid fields
// (function() {
//   "use strict";
//   window.addEventListener(
//     "load",
//     function() {
//       // Fetch all the forms we want to apply custom Bootstrap validation styles to
//       var forms = document.getElementsByClassName("needs-validation");
//       // Loop over them and prevent submission
//       var validation = Array.prototype.filter.call(forms, function(form) {
//         form.addEventListener(
//           "submit",
//           function(event) {
//             if (form.checkValidity() === false) {
//               event.preventDefault();
//               event.stopPropagation();
//             }
//             form.classList.add("was-validated");
//           },
//           false
//         );
//       });
//     },
//     false
//   );
// })();

$("#login-button").on("click", function() {
  let userInfo = {
    userEmail: $("#user-email").val(),
    userPassword: $("#user-password").val()
  };

  console.log(userInfo);
});

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

