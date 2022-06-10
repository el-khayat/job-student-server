const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Cors = require("cors");

const authentecateRoutes = require("./routes/authentecate");
const postRouter = require("./routes/Post");
const postProfRouter = require("./routes/PostProf");
const userRouter = require("./routes/User");
const aviRouter = require("./routes/Avi");

app.use(Cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(authentecateRoutes);
app.use(postRouter);
app.use(postProfRouter);
app.use(userRouter);
app.use(aviRouter);

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/images", express.static("./images"));

// start server
app.listen(9999, () => {
  console.log("server is running at port bla 9999 . . .");
});
