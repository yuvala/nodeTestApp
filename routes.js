/**
 * Main application routes
 */

'use strict';
module.exports = function (app) {

    app.use('/api/user', require('./api/user'));
    app.use('/api/chats', require('./api/chats'));
 
    app.get('/test', function(req, res){
        // handle query parameters
        res.send(req.query);
    });
    
    app.post('/test', function(req, res){
        // handle request body parameters
        res.send(req.body);
    });
    
    app.put('/test', function(req, res){
        // handle request body parameters
        res.send(req.body);
    });
    
    app.delete('/test', function(req, res){
        // handle request body parameters
        res.send(req.body);
    });
    app.get('/myMath',function(req, res){
        res.sendFile(__dirname + '/public/js/app/myMath/myMath.html');
    });




	/* APPLICATION */
	app.get('*', function(req, res) {
		// load index.html otherwise
		res.sendFile(__dirname + '/public/index.html');
	});
};