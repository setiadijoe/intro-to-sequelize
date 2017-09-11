'use strict';
module.exports = function(sequelize, DataTypes) {
  var JunctionTable = sequelize.define('JunctionTable', {
    subjectId: DataTypes.INTEGER,
    studentId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  JunctionTable.associate = function (models) {
    JunctionTable.belongsTo(models.Subject)
    JunctionTable.belongsTo(models.Student)
};
  return JunctionTable;
};