var express = require('express');
var router = express.Router();

/* GET greeting */
router.get('/', function(req, res, next) {
    stdout.write("This message is captured in the log.");
  res.send(
    { "greeting": "Hello, world!" }
  );
});

module.exports = router;
