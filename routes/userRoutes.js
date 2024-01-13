const express = require("express");
const {
  registerController,
  loginController,
  updateUserController,
  requireSignIn,
} = require("../controllers/userController");

// routes Object
const router = express.Router();

// routes
//Register || POST
router.post("/register", registerController);

//Login || POST
router.post("/login", loginController);

//Update || PUT
router.put("/update-user", requireSignIn, updateUserController);

//export
module.exports = router;
