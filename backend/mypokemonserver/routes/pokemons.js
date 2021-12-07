var express = require('express');
var router = express.Router();

const data = require('../data/Pokemon.json')

/* GET pokemons listing. */
router.get('/', function(req, res) {
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(data));
});

module.exports = router;


