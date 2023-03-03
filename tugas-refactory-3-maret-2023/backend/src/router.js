const { Router } = require("express");
const router = Router();
const { addUsers, getAllUsers } = require("./handler");

// create user
router.post("/users", addUsers);

// read user
router.get("/users", getAllUsers);

module.exports = router;
