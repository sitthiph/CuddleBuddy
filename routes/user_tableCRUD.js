var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "cuddlebuddy_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
});

function createUserTable() {
  console.log("Inserting a new user...\n");
  let query = connection.query(
    "INSERT INTO user_table SET ?",
    {
      first_name: "",
      last_name: "",
      gender: "",
      date_of_birth: "",
      email: "",
      pictures: "",
      description: "",
      preferred_gender: ""
    },
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " user inserted!\n");
    }
  );
};

// TODO: FIND OUT WHAT TO USE UPDATE FOR!!
// function updateUserTable() {
//   console.log("Updating all users...\n");
//   let query = connection.query(
//     "UPDATE user_table SET ? WHERE ?",
//     [
//       {
//         quantity: 100
//       },
//       {
//         flavor: "Rocky Road"
//       }
//     ],
//     function(err, res) {
//       if (err) throw err;
//       console.log(res.affectedRows + " products updated!\n");
//       // Call deleteProduct AFTER the UPDATE completes
//       deleteProduct();
//     }
//   );
// };

// TODO: NO ONE WILL BE DELETED OUT OF DATABASE JUST YET!
// deleteProduct: function() {
//   console.log("Deleting all users...\n");
//   connection.query(
//     "DELETE FROM products WHERE ?",
//     {
//       flavor: "strawberry"
//     },
//     function(err, res) {
//       if (err) throw err;
//       console.log(res.affectedRows + " products deleted!\n");
//       // Call readProducts AFTER the DELETE completes
//       readProducts();
//     }
//   );
// };

function selectUserTable(userId) {
  console.log("GET a user...\n");
  connection.query("SELECT * FROM user_table WHERE user_id = ?", [userId], function(err, res) {
    if (err) throw err;
    });
 }
module.exports = {
  //TODO: EXPORT IT!
}