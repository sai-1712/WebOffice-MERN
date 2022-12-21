const express = require("express");
const router = express.Router();
const { signin } = require("../controllers/signInController");
const { signup } = require("../controllers/signUpController");
const {getuserbytoken}= require("../controllers/getUserbytokencontroller");

router.get("/getbytoken", getuserbytoken);
router.post("/signUp", signup);
router.post("/signIn", signin);
module.exports = router;
