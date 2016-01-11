define(['jquery', 'lodash', 'socketio', 'firebase','testAjax', 'app/myMath/models/User','app/myMath/controllers/ListController'], 
function($, _, io, firebase, testAjax, User, listControl) {
  
  var socket = io();
  var baseDataRef = 'https://chatasfirstexample.firebaseio.com/';
  var myDataRef = new Firebase(baseDataRef);
  var popaiRef = new Firebase(baseDataRef + 'popai');
  
  
  /************************************************/
 var users = [new User('Barney'),
              new User('Cartman'),
              new User('Sheldon')];
     
    for (var i = 0, len = users.length; i < len; i++){
        console.log(users[i].name);
    }
     
    localStorage.users = JSON.stringify(users);
  
  /*********************************/
  $('form').submit(function() {
    var name = $('#nameField').val();
    var text = $('#textField').val();
    myDataRef.push({name: name, text: text});
    popaiRef.push({name: name+2, text: text+2});
    console.log(name , text);
    socket.emit('chat message', name + ": " + text);
    $('#textField').val('');
   // return false;
  }); 

  myDataRef.on('child_added', function(snapshot) {
    var message = snapshot.val();
    displayChatMessage(message.name, message.text);
  });

  function displayChatMessage(name, text) {
       $('#past_messages').prepend($('<div>').text(name+ ': '+text));
  };
  
  socket.on('chat message', function(msg) {
    console.log('child_added:');
    $('#messages').prepend($('<li>').text(msg));
  });
 
});