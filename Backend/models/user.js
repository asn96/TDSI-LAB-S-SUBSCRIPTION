'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      User.hasMany(models.Etudiant, {
        as: "etudiants",
        foreignKey: "userid"
      });
    }
  };
  User.init({
    nomComplet: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: DataTypes.STRING,
    telephone: DataTypes.STRING,
    role: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'User',
  },
      {
        paranoid: true
      }
      );
  return User;
};