var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.send('<html><head><body><h1>hello!!</h1></body></head></html>');
});

app.get('/user/:name',function(req,res){
    var myName = req.params.name;
    var limit = req.query.limit;
    var q = req.query.q;
   res.send('<html><head><body><h1>'
   +myName
   +'想要找關鍵字叫做'
   +q
   +'的資料,'
   +'然後是要找前'
   +limit
   +'筆資料'
   +'</h1></body></head></html>');
});

app.get('/user/edit-profile',function(req,res){
    res.send('<html><head><body><h1>Tom</h1></body></head></html>');
});

// 監聽port
var port = process.env.PORT || 3000;
console.log(port);
app.listen(port);