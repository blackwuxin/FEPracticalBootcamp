const net = require("net");
const maxConnectCount = 10;

for (let i = 0; i < maxConnectCount; ++i) {
    let client = net.connect({port: 8989}, function() {
        console.log('连接到服务器！',i);  
     });
     client.on('data', function(data) {
        console.log(data.toString());
        // client.end();
     });
     client.on('end', function() { 
        console.log('断开与服务器的连接',i);
     });
}
