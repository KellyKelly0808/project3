var express = require('express');
var app = express();

app.use(express.static('public'));

app.use(function(req,res,next){
   console.log('有人進來了');
   next();
});
app.use(function(req,res,next){
    console.log('已驗證是登入狀態');
    next();
});
app.get('/',function(req,res){
    res.send
    ('<html><head><body><img src="/images/test.jpg"></body></head></html>')
});

// 監聽 port
var port = process.env.PORT || 3000;
console.log(port);
app.listen(port);