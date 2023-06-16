var express = require('express');
var router = express.Router();
let text;
let counter = 0;

/* GET greeting */
router.get('/messages', function(req, res, next) {
    let i
     for (i = 0; i < 50; i++) {
        text += "<br>The number is " + i + "<br>";
        console.log(text);
     }
     res.send("<p>Sent 50 log Messages.</p>");
});

module.exports = router;
