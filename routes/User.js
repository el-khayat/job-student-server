const db = require("../config/database");
const { User } = require("../models");
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

// 8. Upload Image Controller

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.join(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: "1000000" },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    // const mimeType = fileTypes.test(file.mimetype);
    // const extname = fileTypes.test(path.extname(file.originalname));

    if (true && true) {
      return cb(null, true);
    }
    cb("Give proper files formate to upload");
  },
}).single("image");

router

  .get("/user", (req, res) => {
    User.findAll()
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        res.json(err);
      });
  })

  .get("/user/:id", (req, res) => {
    User.findAll({
      where: { id: req.params.id },
    })
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        res.json(err);
      });
  })

  .patch("/user/:id", upload, (req, res) => {
    console.log(req.body);
    const {
      Nom,
      Prenom,
      Password,
      email,
      ville,
      Telephone,
      NiveauEtudiant,
      Adresse,
      Matiere,
    } = req.body;
    const Image = req.file.filename;
    User.update(
      {
        Image,
        Nom,
        Prenom,
        Password,
        email,
        ville,
        Telephone,
        NiveauEtudiant,
        Adresse,
        Matiere,
      },
      {
        where: { id: req.params.id },
      }
    )
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        console.log("difo hna");
        res.json(err);
      });
  })

  .delete("/user/:id", (req, res) => {
    User.destroy({
      where: { id: req.params.id },
    })
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        res.json(err);
      });
  });

console.log("  welcome  "), (module.exports = router);
