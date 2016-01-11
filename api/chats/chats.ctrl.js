var db = require('../../modules/db');
// var accounts_db = db.child('accounts');

var chats = {
  getData: function(id, callback) {
      var chatsDb = db;
      if(id){
        chatsDb = db.child(id);
      }
      
      chatsDb.once("value", function(data) {
        var data = data.val();
        if(data) {
          callback(null, data);
        }
        else {
          callback("No such id!");
        }
      });
  }
};

module.exports = chats;