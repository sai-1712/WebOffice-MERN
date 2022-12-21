const express = require("express");
const router = express.Router();
const{addproject}= require("../controllers/addProjectcontroller");
const{getproject}= require("../controllers/getProjectcontroller");
const{getoneproject}= require("../controllers/getOneProjectcontroller");
router.post("/addproject/:id",addproject);
router.get("/getproject/:id",getproject);
router.get("/getoneproject/:id",getoneproject);
module.exports = router;
