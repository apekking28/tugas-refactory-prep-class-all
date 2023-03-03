const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const database = require("./config/databases");
const userRouter = require("./routes/user");

// middleware
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).json("Hello world");
});

// Router
app.use(userRouter);

app.listen(9000, () => {
  console.log(`server berjalan di port ` + 9000);
});
