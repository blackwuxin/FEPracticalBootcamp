//worker

// 接收主进程发来的消息
process.on("message", (msg, sock) => {
    if(msg === 'socket' && sock){
        sock.write("Request handled by worker-" + process.pid);
    }
});
  
// setTimeout(()=>{
//      process.exit(1);
// },1000)