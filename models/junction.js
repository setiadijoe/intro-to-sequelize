'use strict';
module.exports = function(sequelize, DataTypes) {
  var Junction = sequelize.define('Junction', {
    subjectId: DataTypes.INTEGER,
    studentId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  Junction.associate = function (models) {
    Junction.belongsTo(models.Subject)
    Junction.belongsTo(models.Student) 
  }
  return Junction;
};