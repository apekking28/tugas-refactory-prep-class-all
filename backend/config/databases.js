const mongoose = require("mongoose");

mongoose.set("strictQuery", true);
mongoose.connect(
  "mongodb+srv://ilham:1234@cluster1.mgafd9a.mongodb.net/tugas-refactory-1-maret?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Database Connected..."));

module.exports = db;
