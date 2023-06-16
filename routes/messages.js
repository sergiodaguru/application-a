var express = require('express');
var router = express.Router();
let text;
let counter = 0;

/* GET greeting */
router.get('/messages', function(req, res, next) {
    let i
     for (i = 0; i < 50; i++) {
        text += "The number is " + i + "<br>";
        console.log(text);
     }
     res.send({ "Sent Messages": i });
});

module.exports = router;
