var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Hello World');
});

router.post('/', function(req, res, next) {
  res.send('Hello From Post');
});

router.get('/:id', function(req, res, next) {
  res.send(req.params.id);
});

module.exports = router;
