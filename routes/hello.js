var express = require('express');
var router = express.Router();

/* GET return world. */
router.get('/', function(req, res, next) {
  res.send('world');
});

module.exports = router;
