const express = require("express");
const router = express.Router();

const mainController = require("../controllers/mainController.js");

router.get("/", mainController.home);

router.get("/p5", mainController.p5);

router.get("/p6", mainController.p6);

router.get("/p7", mainController.p7);

module.exports = router;
