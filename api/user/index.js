var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    // handle query parameters
    res.send({
        data: "yuval the king"
    });
});

router.get('/test', function(req, res){
    // handle query parameters
    res.send({
        data: "test data"
    });
});


module.exports = router;