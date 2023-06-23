var express = require('express');
var router = express.Router();

let ran = 0;
function f() {
   ran++;
   console.log("Test XYZ Message " + ran);
}

/* GET greeting */
router.get('/messages', function(req, res, next) {
 setInterval(f,5000);

  setTimeout(() => { res.send(
                         { "Messages": ran }
                       ) }, 2000);
  clearInterval(f,15000);
});

module.exports = router;
