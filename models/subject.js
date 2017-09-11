'use strict';
module.exports = function(sequelize, DataTypes) {
  var Subject = sequelize.define('Subject', {
    subject_name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  Subject.associate = function (models) {
    // Teacher.belongsTo(models.Subject);
    Subject.hasMany(models.Student);     
  };
  return Subject;
};