{"filter":false,"title":"main.js","tooltip":"/public/js/app/MyMath /main.js","undoManager":{"mark":2,"position":2,"stack":[[{"start":{"row":0,"column":0},"end":{"row":11,"column":30},"action":"insert","lines":["var MyMath = (function(){"," ","    // Put your private variables and functions here","     ","    return { // Here are the public methods","        add:function(a, b){","            return a + b;","        }","    };","})();"," ","console.log(MyMath.add(1, 2));"],"id":1}],[{"start":{"row":0,"column":0},"end":{"row":11,"column":30},"action":"remove","lines":["var MyMath = (function(){"," ","    // Put your private variables and functions here","     ","    return { // Here are the public methods","        add:function(a, b){","            return a + b;","        }","    };","})();"," ","console.log(MyMath.add(1, 2));"],"id":2},{"start":{"row":0,"column":0},"end":{"row":13,"column":30},"action":"insert","lines":["var MyMath = (function(){"," ","    // With this pattern you can use the usual function notation:","     ","    function add(a, b){","        return a + b;","    }","     ","    return {","        add:add // But don't forget to declare it in the returned object!","    };","})();"," ","console.log(MyMath.add(1, 2));"]}],[{"start":{"row":0,"column":0},"end":{"row":13,"column":30},"action":"remove","lines":["var MyMath = (function(){"," ","    // With this pattern you can use the usual function notation:","     ","    function add(a, b){","        return a + b;","    }","     ","    return {","        add:add // But don't forget to declare it in the returned object!","    };","})();"," ","console.log(MyMath.add(1, 2));"],"id":3},{"start":{"row":0,"column":0},"end":{"row":9,"column":3},"action":"insert","lines":["define(function(){"," ","    function add(a, b){","        return a + b;","    }","     ","    return {","        add:add","    };","});"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":4,"column":5},"end":{"row":4,"column":5},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1452440368552,"hash":"b9d0e6983f74e385f6d3213887f56745d8d7aa73"}