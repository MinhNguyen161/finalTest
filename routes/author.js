var express = require('express');
var router = express.Router();
const authorController = require("../controllers/author.controller")

/* GET users listing. */

router.post("/", authorController.createAuthor)



module.exports = router;
