var express = require('express');
var app = express();



app.get('/',function(req,res){
    res.send
    ('<html><head><body><h1>index</h1></body></head></html>')
});

app.use(function(req,res,next){
    console.log('有人進來了');
    // kk();
    next();
 });

 app.use(function(req,res,next){
     res.status(404).send('不好意思，找不到您指定的頁面!')
 });

 app.use(function(err,req,res,next){
    res.status(500).send('程式出現錯誤，請稍後再試!')
});


// 監聽 port
var port = process.env.PORT || 3000;
console.log(port);
app.listen(port);