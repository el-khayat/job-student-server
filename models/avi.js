const { DataTypes } = require("sequelize");
const User = require("./User");
const db = require("../config/database");

module.exports = db.define("avi", {

  avi: {
    type: DataTypes.STRING,
  },

  to: {
      type: DataTypes.STRING,

    }
});
