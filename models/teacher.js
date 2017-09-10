'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define('Teacher', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    SubjectId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // const Teacher = sequelize.define('Teachers', { teacherCode : Sequelize.INTEGER });
        // const Subject = sequelize.define('Subjects', { subjectCode: Sequelize.INTEGER });
        // Subject.hasMany(Teacher, {foreignKey: 'teacherCode', sourceKey: 'subjectCode'});
        // Teacher.belongsTo(Subject, {foreignKey: 'teacherCode', targetKey: 'subjectCode'});     
      }
    }
  });

  Teacher.associate = function (models) {
    Teacher.belongsTo(models.Subject);
    // models.Subject.hasMany(Teacher);     
  };

  return Teacher;
};

