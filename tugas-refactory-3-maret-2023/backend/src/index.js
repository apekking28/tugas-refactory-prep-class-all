const express = require("express");
const app = express();
const PORT = 6500;
const bodyParser = require("body-parser");
const database = require("./database");
const userRouter = require("./router");

// middleware
app.use(bodyParser.json());
// router
app.use(userRouter);

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
