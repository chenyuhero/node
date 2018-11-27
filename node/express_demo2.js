var express = require('express')
var app = express()

//主页
app.get('/',function(req,res){
    console.log("这是主页get请求")
    res.send('heheda,主页')

})
app.post('/',function(req,res){
    console.log("这是主页post请求")
    res.send('heheda,主页')

})
var server = app.listen(8083,function(){
    var host = server.address().address
    var port = server.address().port
    console.log("应用实例的访问地址为http://%s:%s",host,port)
})