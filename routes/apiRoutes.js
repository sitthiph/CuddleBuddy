var db = require("../models");
const orm = require("./orm");

module.exports = function(app) {
  // Get all users
  app.get("/api/users", function(req, res) {
  orm.readUsers(function(data){
    res.json(data);
  });  
      
  });
  // Get single user
  app.get("/api/users/:userId", function(req, res) {
  });
  
  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
