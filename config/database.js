const Sequelize = require('sequelize')

module.exports  = new Sequelize(
  "job_student",
  "root",
  "",
  {



    
    host: "localhost",
    dialect:"mysql",
    logging:false
  }
)

