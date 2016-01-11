var express = require('express');
var router = express.Router();
var chatCtrl = require("./chats.ctrl");

router.get('/', function(req, res){

    var chatsData = chatCtrl.getData(false, function(err, data) {
        if(err){
            res.status(500).send("no id");
        }
        else {
            res.send(data);
        }
    });
});

router.get('/byId', function(req, res){
    var id = req.query.id;
    
    var chatsData = chatCtrl.getData(id, function(err, data) {
        if(err){
            res.status(500).send("no id");
        }
        else {
            res.send(data);
        }
    });
});

module.exports = router;