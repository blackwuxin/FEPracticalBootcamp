作业：Master/Worker 主从网络处理架构实现

概述：创建一个主从网络架构，Master 接受 Socket 连接，根据负载均衡，分发给 Worker，Worker 处理具体业务。

选做：监听 Worker 状态，如果 Worker 发生异常退出之后，Master 重启一个进程。



### 进程间消息通信
```
//parent.js
const cp = require('child_process');
const n = cp.fork(`${__dirname}/sub.js`);
n.on('message', (m) => {
    console.log('PARENT got message:', m);
});
n.send({ hello: 'world' });

//sub.js
process.on('message', (m) => {
    console.log('CHILD got message:', m);
});
process.send({ foo: 'bar' });
```

### net网络通信
```
//server.js
var net = require('net');
var server = net.createServer(function(connection) { 
   console.log('client connected');
   connection.on('end', function() {
      console.log('客户端关闭连接');
   });
   connection.write('Hello World!\r\n');
   connection.pipe(connection);
});
server.listen(8082, function() { 
  console.log('server is listening');
});


//client.js
var net = require('net');
var client = net.connect({port: 8989}, function() {
   console.log('连接到服务器！');  
});
client.on('data', function(data) {
   console.log(data.toString());
   client.end();
});
client.on('end', function() { 
   console.log('断开与服务器的连接');
});
```