module.exports = app => {
    const students = require("../controller/students.controller");
    
    var router = require("express").Router();
  
    // Create a new students
    router.post("/", students.create);
  
    // Retrieve all students
    router.get("/", students.findAll);
  
    // Retrieve all students
    router.get("/students", students.findAllPublished);
  
    // Retrieve a single students with id
    router.get("/:id", students.findOne);
  
    // Update a students with id
    router.put("/:id", students.update);
  
    // Delete a students with id
    router.delete("/:id", students.delete);
  
    // Delete all students
    router.delete("/", students.deleteAll);
  
    app.use('/api/students', router);
  };