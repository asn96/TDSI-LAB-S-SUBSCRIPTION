'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Niveau extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Niveau.hasMany(models.Etudiant, {
        as: "etudiants",
        foreignKey: "niveauid"
      });
    }
  };
  Niveau.init({
    nom: {
      type: DataTypes.STRING,
      allowNull: false
    },
    code: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Niveau',
  },
      {
        paranoid: true
      }
      );
  return Niveau;
};