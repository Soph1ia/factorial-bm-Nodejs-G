const myMain = require('../index');

var req = {
    "query" : {
        "message":"2000"
    }
}
myMain.helloWorld(req);