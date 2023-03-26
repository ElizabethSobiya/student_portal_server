
module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define('student', {
        name: {
            type: Sequelize.STRING,
            
        },
        dob: {
            type: Sequelize.DATEONLY,
            
        },
        address: {
            type: Sequelize.STRING,
            
        },
        contact_number: {
            type: Sequelize.STRING,
            
        },
        course: {
            type: Sequelize.STRING,
            
        }
    });
  
    return Student;
  };