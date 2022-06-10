const Sequelize = require("Sequelize");
const db = require("../config/database");

module.exports = db.define('user', {
    Image : {
      type: Sequelize.DataTypes.STRING,
      defaultValue: "noAvatar.jpg"
    },
    Nom : {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,

    },
    Prenom: {
      type: Sequelize.DataTypes.STRING, 
       allowNull: false
    },
    email :{
      type: Sequelize.DataTypes.STRING,
       allowNull: false,
       unique: true,
       validate : {
        isEmail: true
      }
    },
    Telephone :{
      type: Sequelize.DataTypes.STRING,
    },
    Password :{
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
  },
    ville: {
      type: Sequelize.DataTypes.STRING,
    },
    NiveauEtudiant:{
        type: Sequelize.DataTypes.STRING,
    },
    Adresse : {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
    });