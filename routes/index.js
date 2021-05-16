var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send('hello');
});

router.get('/data', function (req, res, next) {
    res.json([
        { id: 1, username: 'hello1111000' },
        { id: 2, username: 'hello2' },
    ]);
});

module.exports = router;
