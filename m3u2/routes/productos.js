var express = require('express');
var router = express.Router();

/* GET home pvarage. */
router.get('/', function(req, res, next) {
  res.send('Hola soy la pagina de productos');
});

module.exports = router;