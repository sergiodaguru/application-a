var express = require('express');
var router = express.Router();

/* GET greeting */
router.get('/greeting', function(req, res, next) {
    console.log("This message is captured in the log.");
  res.send(
    { "greeting": "Hello, world!" }
  );
});

module.exports = router;
