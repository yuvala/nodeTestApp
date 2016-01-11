
// // Place third party dependencies in the lib folder
// //
// // Configure loading modules from the lib directory,
// // except 'app' ones, 
requirejs.config( {
    "baseUrl": "js",
    "paths": {
      "app": "app",
      "jquery": "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min",
      "lodash": "lib/lodash-3.10.1",
      "socketio": "lib/socket.io-1.2.0",
      "firebase": "//cdn.firebase.com/js/client/2.2.1/firebase",
      "testAjax": "app/testAjax",
      "myMath": "app/myMath/myMath"
    }
});

// // Load the main app module to start the app
requirejs(["app/main"]);