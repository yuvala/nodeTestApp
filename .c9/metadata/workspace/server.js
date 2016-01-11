{"filter":false,"title":"server.js","tooltip":"/server.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":28,"column":17},"end":{"row":28,"column":22},"action":"remove","lines":["query"],"id":578},{"start":{"row":28,"column":17},"end":{"row":28,"column":18},"action":"insert","lines":["b"]}],[{"start":{"row":28,"column":18},"end":{"row":28,"column":19},"action":"insert","lines":["o"],"id":579}],[{"start":{"row":28,"column":19},"end":{"row":28,"column":20},"action":"insert","lines":["d"],"id":580}],[{"start":{"row":28,"column":20},"end":{"row":28,"column":21},"action":"insert","lines":["y"],"id":581}],[{"start":{"row":1,"column":4},"end":{"row":1,"column":11},"action":"remove","lines":["express"],"id":583},{"start":{"row":1,"column":4},"end":{"row":1,"column":5},"action":"insert","lines":["a"]}],[{"start":{"row":1,"column":5},"end":{"row":1,"column":6},"action":"insert","lines":["p"],"id":584}],[{"start":{"row":1,"column":6},"end":{"row":1,"column":7},"action":"insert","lines":["p"],"id":585}],[{"start":{"row":1,"column":7},"end":{"row":1,"column":8},"action":"insert","lines":["p"],"id":586}],[{"start":{"row":1,"column":7},"end":{"row":1,"column":8},"action":"remove","lines":["p"],"id":587}],[{"start":{"row":14,"column":0},"end":{"row":17,"column":86},"action":"insert","lines":["","var morgan = require('morgan'); \t\t// log requests to the console (express4)","var bodyParser = require('body-parser'); \t// pull information from HTML POST (express4)","var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)"],"id":593}],[{"start":{"row":15,"column":0},"end":{"row":17,"column":86},"action":"remove","lines":["var morgan = require('morgan'); \t\t// log requests to the console (express4)","var bodyParser = require('body-parser'); \t// pull information from HTML POST (express4)","var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)"],"id":594}],[{"start":{"row":2,"column":28},"end":{"row":3,"column":0},"action":"insert","lines":["",""],"id":595}],[{"start":{"row":3,"column":0},"end":{"row":4,"column":0},"action":"insert","lines":["",""],"id":596}],[{"start":{"row":4,"column":0},"end":{"row":6,"column":86},"action":"insert","lines":["var morgan = require('morgan'); \t\t// log requests to the console (express4)","var bodyParser = require('body-parser'); \t// pull information from HTML POST (express4)","var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)"],"id":597}],[{"start":{"row":16,"column":37},"end":{"row":17,"column":0},"action":"insert","lines":["",""],"id":598}],[{"start":{"row":17,"column":0},"end":{"row":18,"column":0},"action":"insert","lines":["",""],"id":599}],[{"start":{"row":18,"column":0},"end":{"row":23,"column":26},"action":"insert","lines":["app.use(express.static(__dirname + '/public')); \t\t\t\t// set static path","app.use(morgan('dev')); \t\t\t\t\t\t\t\t\t\t// log every request to the console","app.use(bodyParser.urlencoded({'extended':'true'})); \t\t\t// parse application/x-www-form-urlencoded","app.use(bodyParser.json()); \t\t\t\t\t\t\t\t\t// parse application/json","app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json","app.use(methodOverride());"],"id":600}],[{"start":{"row":17,"column":0},"end":{"row":18,"column":48},"action":"remove","lines":["","app.use(express.static(__dirname + '/public')); "],"id":601}],[{"start":{"row":27,"column":0},"end":{"row":27,"column":47},"action":"remove","lines":["app.use(express.static(__dirname + '/public'));"],"id":602}],[{"start":{"row":17,"column":0},"end":{"row":17,"column":47},"action":"insert","lines":["app.use(express.static(__dirname + '/public'));"],"id":603}],[{"start":{"row":1,"column":4},"end":{"row":1,"column":7},"action":"remove","lines":["app"],"id":604},{"start":{"row":1,"column":4},"end":{"row":1,"column":11},"action":"insert","lines":["express"]}],[{"start":{"row":24,"column":0},"end":{"row":29,"column":53},"action":"remove","lines":["","","","","","//app.use('/static', express(__dirname + '/public'));"],"id":605}],[{"start":{"row":23,"column":0},"end":{"row":24,"column":0},"action":"remove","lines":["",""],"id":606}],[{"start":{"row":37,"column":17},"end":{"row":37,"column":22},"action":"remove","lines":["query"],"id":607},{"start":{"row":37,"column":17},"end":{"row":37,"column":21},"action":"insert","lines":["body"]}],[{"start":{"row":41,"column":17},"end":{"row":41,"column":22},"action":"remove","lines":["query"],"id":608},{"start":{"row":41,"column":17},"end":{"row":41,"column":21},"action":"insert","lines":["body"]}],[{"start":{"row":32,"column":14},"end":{"row":32,"column":19},"action":"remove","lines":["query"],"id":609},{"start":{"row":32,"column":14},"end":{"row":32,"column":15},"action":"insert","lines":["r"]}],[{"start":{"row":32,"column":15},"end":{"row":32,"column":16},"action":"insert","lines":["e"],"id":610}],[{"start":{"row":32,"column":16},"end":{"row":32,"column":17},"action":"insert","lines":["q"],"id":611}],[{"start":{"row":32,"column":17},"end":{"row":32,"column":18},"action":"insert","lines":["u"],"id":612}],[{"start":{"row":32,"column":18},"end":{"row":32,"column":19},"action":"insert","lines":["e"],"id":613}],[{"start":{"row":32,"column":19},"end":{"row":32,"column":20},"action":"insert","lines":["s"],"id":614}],[{"start":{"row":32,"column":20},"end":{"row":32,"column":21},"action":"insert","lines":["t"],"id":615}],[{"start":{"row":32,"column":21},"end":{"row":32,"column":22},"action":"insert","lines":[" "],"id":616}],[{"start":{"row":32,"column":22},"end":{"row":32,"column":23},"action":"insert","lines":["b"],"id":617}],[{"start":{"row":32,"column":23},"end":{"row":32,"column":24},"action":"insert","lines":["o"],"id":618}],[{"start":{"row":32,"column":24},"end":{"row":32,"column":25},"action":"insert","lines":["d"],"id":619}],[{"start":{"row":32,"column":25},"end":{"row":32,"column":26},"action":"insert","lines":["y"],"id":620}],[{"start":{"row":36,"column":36},"end":{"row":37,"column":0},"action":"insert","lines":["",""],"id":621},{"start":{"row":37,"column":0},"end":{"row":37,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":37,"column":4},"end":{"row":37,"column":37},"action":"insert","lines":["// handle request body parameters"],"id":622}],[{"start":{"row":41,"column":39},"end":{"row":42,"column":0},"action":"insert","lines":["",""],"id":623},{"start":{"row":42,"column":0},"end":{"row":42,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":42,"column":4},"end":{"row":42,"column":37},"action":"insert","lines":["// handle request body parameters"],"id":624}],[{"start":{"row":44,"column":3},"end":{"row":45,"column":0},"action":"insert","lines":["",""],"id":625}],[{"start":{"row":58,"column":0},"end":{"row":58,"column":4},"action":"remove","lines":["    "],"id":626}],[{"start":{"row":57,"column":7},"end":{"row":58,"column":0},"action":"remove","lines":["",""],"id":627}],[{"start":{"row":25,"column":92},"end":{"row":26,"column":0},"action":"insert","lines":["",""],"id":628}],[{"start":{"row":26,"column":0},"end":{"row":27,"column":0},"action":"insert","lines":["",""],"id":629}],[{"start":{"row":26,"column":0},"end":{"row":26,"column":1},"action":"insert","lines":["a"],"id":630}],[{"start":{"row":26,"column":1},"end":{"row":26,"column":2},"action":"insert","lines":["p"],"id":631}],[{"start":{"row":26,"column":2},"end":{"row":26,"column":3},"action":"insert","lines":["p"],"id":632}],[{"start":{"row":26,"column":3},"end":{"row":26,"column":4},"action":"insert","lines":[","],"id":633}],[{"start":{"row":26,"column":4},"end":{"row":26,"column":5},"action":"insert","lines":["u"],"id":634}],[{"start":{"row":26,"column":5},"end":{"row":26,"column":6},"action":"insert","lines":["s"],"id":635}],[{"start":{"row":26,"column":6},"end":{"row":26,"column":7},"action":"insert","lines":["e"],"id":636}],[{"start":{"row":26,"column":6},"end":{"row":26,"column":7},"action":"remove","lines":["e"],"id":637}],[{"start":{"row":26,"column":5},"end":{"row":26,"column":6},"action":"remove","lines":["s"],"id":638}],[{"start":{"row":26,"column":4},"end":{"row":26,"column":5},"action":"remove","lines":["u"],"id":639}],[{"start":{"row":26,"column":3},"end":{"row":26,"column":4},"action":"remove","lines":[","],"id":640}],[{"start":{"row":26,"column":3},"end":{"row":26,"column":4},"action":"insert","lines":["."],"id":641}],[{"start":{"row":26,"column":4},"end":{"row":26,"column":5},"action":"insert","lines":["u"],"id":642}],[{"start":{"row":26,"column":5},"end":{"row":26,"column":6},"action":"insert","lines":["s"],"id":643}],[{"start":{"row":26,"column":6},"end":{"row":26,"column":7},"action":"insert","lines":["e"],"id":644}],[{"start":{"row":26,"column":7},"end":{"row":26,"column":9},"action":"insert","lines":["()"],"id":645}],[{"start":{"row":26,"column":9},"end":{"row":26,"column":10},"action":"insert","lines":[";"],"id":646}],[{"start":{"row":26,"column":0},"end":{"row":26,"column":10},"action":"remove","lines":["app.use();"],"id":647},{"start":{"row":26,"column":0},"end":{"row":26,"column":32},"action":"insert","lines":["require('./app/routes.js')(app);"]}],[{"start":{"row":26,"column":11},"end":{"row":26,"column":15},"action":"remove","lines":["app/"],"id":648}],[{"start":{"row":25,"column":92},"end":{"row":26,"column":0},"action":"insert","lines":["",""],"id":649}],[{"start":{"row":29,"column":0},"end":{"row":53,"column":3},"action":"remove","lines":["app.get('/test', function(req, res){","    // handle query parameters","    res.send(req.query);","});","","app.post('/test', function(req, res){","    // handle request body parameters","    res.send(req.body);","});","","app.put('/test', function(req, res){","    // handle request body parameters","    res.send(req.body);","});","","app.delete('/test', function(req, res){","    // handle request body parameters","    res.send(req.body);","});","","// set client index url (view)","app.get('/', function(req, res){","    console.log('s',req);","    res.sendFile(__dirname + '/public/index.html');","});"],"id":650}],[{"start":{"row":29,"column":0},"end":{"row":30,"column":0},"action":"remove","lines":["",""],"id":651}],[{"start":{"row":28,"column":0},"end":{"row":29,"column":0},"action":"remove","lines":["",""],"id":652}],[{"start":{"row":26,"column":0},"end":{"row":27,"column":0},"action":"insert","lines":["",""],"id":653}],[{"start":{"row":27,"column":0},"end":{"row":28,"column":0},"action":"insert","lines":["",""],"id":654}],[{"start":{"row":28,"column":0},"end":{"row":29,"column":0},"action":"insert","lines":["",""],"id":655}],[{"start":{"row":29,"column":0},"end":{"row":30,"column":0},"action":"insert","lines":["",""],"id":656}],[{"start":{"row":30,"column":0},"end":{"row":30,"column":52},"action":"insert","lines":["app.use('/api/accounts', require('./api/accounts'));"],"id":657}],[{"start":{"row":30,"column":14},"end":{"row":30,"column":22},"action":"remove","lines":["accounts"],"id":658},{"start":{"row":30,"column":14},"end":{"row":30,"column":15},"action":"insert","lines":["u"]}],[{"start":{"row":30,"column":15},"end":{"row":30,"column":16},"action":"insert","lines":["s"],"id":659}],[{"start":{"row":30,"column":16},"end":{"row":30,"column":17},"action":"insert","lines":["e"],"id":660}],[{"start":{"row":30,"column":17},"end":{"row":30,"column":18},"action":"insert","lines":["r"],"id":661}],[{"start":{"row":30,"column":36},"end":{"row":30,"column":44},"action":"remove","lines":["accounts"],"id":662},{"start":{"row":30,"column":36},"end":{"row":30,"column":37},"action":"insert","lines":["s"]}],[{"start":{"row":30,"column":36},"end":{"row":30,"column":37},"action":"remove","lines":["s"],"id":663}],[{"start":{"row":30,"column":36},"end":{"row":30,"column":37},"action":"insert","lines":["u"],"id":664}],[{"start":{"row":30,"column":37},"end":{"row":30,"column":38},"action":"insert","lines":["s"],"id":665}],[{"start":{"row":30,"column":38},"end":{"row":30,"column":39},"action":"insert","lines":["e"],"id":666}],[{"start":{"row":30,"column":39},"end":{"row":30,"column":40},"action":"insert","lines":["r"],"id":667}],[{"start":{"row":30,"column":40},"end":{"row":30,"column":41},"action":"insert","lines":["/"],"id":668}],[{"start":{"row":30,"column":41},"end":{"row":30,"column":42},"action":"insert","lines":["i"],"id":669}],[{"start":{"row":30,"column":42},"end":{"row":30,"column":43},"action":"insert","lines":["n"],"id":670}],[{"start":{"row":30,"column":43},"end":{"row":30,"column":44},"action":"insert","lines":["d"],"id":671}],[{"start":{"row":30,"column":44},"end":{"row":30,"column":45},"action":"insert","lines":["e"],"id":672}],[{"start":{"row":30,"column":45},"end":{"row":30,"column":46},"action":"insert","lines":["x"],"id":673}],[{"start":{"row":30,"column":45},"end":{"row":30,"column":46},"action":"remove","lines":["x"],"id":674}],[{"start":{"row":30,"column":44},"end":{"row":30,"column":45},"action":"remove","lines":["e"],"id":675}],[{"start":{"row":30,"column":43},"end":{"row":30,"column":44},"action":"remove","lines":["d"],"id":676}],[{"start":{"row":30,"column":42},"end":{"row":30,"column":43},"action":"remove","lines":["n"],"id":677}],[{"start":{"row":30,"column":41},"end":{"row":30,"column":42},"action":"remove","lines":["i"],"id":678}],[{"start":{"row":30,"column":40},"end":{"row":30,"column":41},"action":"remove","lines":["/"],"id":679}],[{"start":{"row":30,"column":0},"end":{"row":30,"column":44},"action":"remove","lines":["app.use('/api/user', require('./api/user'));"],"id":680}],[{"start":{"row":29,"column":0},"end":{"row":30,"column":0},"action":"remove","lines":["",""],"id":681}],[{"start":{"row":28,"column":0},"end":{"row":29,"column":0},"action":"remove","lines":["",""],"id":682}],[{"start":{"row":27,"column":0},"end":{"row":28,"column":0},"action":"remove","lines":["",""],"id":683}],[{"start":{"row":26,"column":0},"end":{"row":27,"column":0},"action":"remove","lines":["",""],"id":684}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":31,"column":44},"end":{"row":31,"column":44},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1452242772015,"hash":"3c789e689e1fdac917e73764aa7f198c18b938d5"}