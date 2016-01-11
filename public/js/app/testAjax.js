define(function () {
  
         function sendAjax() {
        //   var xhttp = new XMLHttpRequest();
        //   xhttp.onreadystatechange = function() {
        //     if (xhttp.readyState == 4 && xhttp.status == 200) {
        //       document.getElementById("demo").innerHTML = xhttp.responseText;
        //     }
        //   };
        //   xhttp.open("GET", "demo_get.asp", true);
        //   xhttp.send();
        console.log('sssss','/api/chats');
        }
    return {
        sendAjax:sendAjax
    };
});


 
/*var db = require('../../modules/db');
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
};*/

//module.exports = chats; 