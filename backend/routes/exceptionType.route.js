const express = require("express");
const router = express.Router();

const exceptionType_controller = require("../controllers/exceptionType.controller");

router.post("/create", exceptionType_controller.exceptionType_create);
module.exports = router;
