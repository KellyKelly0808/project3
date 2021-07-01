var express = require('express');
var app = express();

var login = function(req,res,next){
    var _url = req.url;
    if(_url!=='/'){
        next();
    }else{
        res.send('您的資料有誤，請重新登入!!')
    }
}
// app.use(login);
app.get('/',login,function(req,res){
    res.send
    ('<html><head><body><h1>index</h1></body></head></html>')
});
app.get('/user',login,function(req,res){
    res.send
    ('<html><head><body><h1>用戶您好,</h1></body></head></html>')
});



// 監聽 port
var port = process.env.PORT || 3000;
console.log(port);
app.listen(port);