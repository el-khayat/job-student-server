const { DataTypes } = require("sequelize");
const db = require('../config/database');

module.exports = db.define("Post", 
{

    titre:{
        type : DataTypes.STRING ,
        allowNull:false
    },

    commentaire:{
        type : DataTypes.STRING ,
        allowNull:false
    }

}
);
