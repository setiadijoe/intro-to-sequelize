'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        isUnique: function(value, next) {
          Student.find({
            where: {email: value},
            attributes: ['id']
          })
            .done(function(error,user) {
              if (error) 
                return next(error)
              if (user) 
                return next('Email address already in use!')
              next()
            })
        }
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        }
    }
  });
  Student.prototype.getFullName = (first_name, last_name)=> {
    return first_name+' '+last_name
  }
  Student.associate = function (models) {
    Student.hasMany(models.Subject);  
};
  return Student;
};