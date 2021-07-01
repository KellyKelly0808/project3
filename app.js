var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.send('<html><head><body><h1>hello!!</h1></body></head></html>');
});

app.get('/user/:name',function(req,res){
    var myName = req.params.name;
    console.log(myName);
    if(myName !== 'Tommy'){
        res.send('<html><head><body><h1>'+'查無此人，請重新輸入!'+'</h1></body></head></html>');
    }else{
        res.send('<html><head><body><h1>'+myName+'</h1></body></head></html>');
    }
   
});

app.get('/user/edit-profile',function(req,res){
    res.send('<html><head><body><h1>Tom</h1></body></head></html>');
});

// 監聽port
var port = process.env.PORT || 3000;
console.log(port);
app.listen(port);