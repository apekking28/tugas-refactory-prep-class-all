const { Router } = require("express");
const router = Router();
const {
  addUser,
  getAllUser,
  updateUser,
  deleteUser,
} = require("../controllers/user");

router.get("/users", getAllUser);

router.post("/users", addUser);

router.put("/users/:id", updateUser);

router.delete("/users/:id", deleteUser);

module.exports = router;
