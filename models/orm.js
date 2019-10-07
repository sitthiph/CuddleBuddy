const connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection

  /**
   * Displaying Swipe Detail; POST to javascript;
   *  MUST ALREADY CHECK THE FOLLOWING LOGIC! "Are they matched already? Is the preferred gender correct for both party?"
   *  {firstName, lastName, gender, age, pictures, description}
   *  @param userId - account's userId
   */
  function getUnmatch(userId) {
    let queryString = "SELECT * FROM ?? WHERE ?? = ?";
    connection.query(queryString, ["user_table", "user_id", userId], function(err, result) {
      if (err) throw err;
      return result;
      // TODO: THIS DATA NEED TESTING; IDK WHAT IT'S RETURNING;
    });
  }
  
  function signIn(userId) {
    let queryString = "SELECT * FROM ?? WHERE ?? = ? ";
  }
  
/**
 *
 * @param userId1 - The Person's account id;
 * @param userId2 - The Matched's partner id;
 * REMOVE DUE TO BEING ICE BOXED.
 */
/*function conversationPage(userId1, userId2) {
    let queryString = "SELECT * FROM ?? WHERE ?? = ? AND ?? = ?";
    console.log(queryString);
    connection.query(queryString, ["chat_Table", "user_id_1", userId1, "user_id_2", userId2], function(err, result) {
      if (err) throw err;
      console.log(result);
      return result;
    });
  }*/
  function checkMatch(userId) {
    let queryString = "SELECT * FROM ?? WHERE ?? = ?";
  }
connection.query(queryString,
  ["matched_table", "user_id_1", userId], function(err, result) {
    if (err) throw err;
  }
);

module.exports;
