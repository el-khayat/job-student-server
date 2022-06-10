// import sequelize & schemas
const db = require("../config/database");
const User = require("./User");
const Post = require("./Post");
const PostProf = require("./PostProf");
const Avi = require("./avi");

// prof avecr post prof   (One ==> Many)
User.hasMany(Post, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Post.belongsTo(User);

User.hasMany(PostProf, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
PostProf.belongsTo(User);

// User.belongsToMany(User, { through: Avi, as: "from", foreignKey: "id" });
// User.belongsToMany(User, { through: Avi, as: "to", foreignKey: "id" });
User.hasMany(Avi, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Avi.belongsTo(User);

db.sync({ force: false, alert: false })
  .then(() => {
    console.log("Tables Created!");
  })
  .catch((error) => {
    console.log("error en connect on databases \n!" + error);
  });
module.exports = { Post, User, PostProf, Avi };
