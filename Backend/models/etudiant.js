'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Etudiant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Etudiant.belongsTo(models.Niveau, {
        foreignKey: "niveauid",
        as: "niveau",
        onDelete: "CASCADE"
      });

      Etudiant.belongsTo(models.User, {
        foreignKey: "userid",
        as: "user",
        onDelete: "CASCADE"
      });
    }
  };
  Etudiant.init({
    nomComplet: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: DataTypes.STRING,
    telephone: DataTypes.STRING,
    adresse: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Etudiant',
  },
      {
        paranoid: true
      }
      );
  return Etudiant;
};