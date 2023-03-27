module.exports = (sequelize, Sequelize) => {
  const Student = sequelize.define("student", {
    name: {
      type: Sequelize.STRING,
      field: "name",
    },
    dob: {
      type: Sequelize.DATEONLY,
      field: "dob",
    },
    address: {
      type: Sequelize.STRING,
      field: "address",
    },
    contact_number: {
      type: Sequelize.STRING,
      field: "contact_number",
    },
    course: {
      type: Sequelize.STRING,
      field: "course",
    },
  });

  return Student;
};
