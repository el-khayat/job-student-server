const bodyParser = require("body-parser");
const { User } = require("../models");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const saltRounds = 10;

router
  // REGISTER PROF
  .post("/singup", async (req, res) => {
    let body = req.body;
    console.log(body);

    body.Password = await bcrypt.hash(body.Password, saltRounds);
    const user = User.build(body);
    await user
      .save()
      .then((user) => {
        console.log("user et cree");
        res.status(200).json(user);
      })
      .catch((err) => {
         res.status(300).json(err);
        console.log("user n'est pas cree\n" + err);
      });
  })




  // LOGIN  ETUDIANT
  .post("/login", async (req, res) => {
    let body = req.body;
    console.log(body);
    const usertrouvee = await User.findOne({ where: { email: body.email } });
    if (!usertrouvee) return res.status(404).send("user do not exist");

    const isValid = await bcrypt.compare(body.Password, usertrouvee.Password);
    if (!isValid) return res.status(300).send("password incorrect ");

    return res.status(200).json(usertrouvee);
  });

module.exports = router;
