var express = require('express');
var router = express.Router();

let ran = 0;
function f() {
   ran++;
   console.log(ran)
   setTimeout(f, 0);
}

/* GET greeting */
router.get('/messages', function(req, res, next) {
  f();

  setTimeout(() => { res.send(
                         { "Messages": ran }
                       ) }, 5000);
});

module.exports = router;
