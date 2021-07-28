const path = require('path')
const fs = require('fs')
var express = require("express");
const { execSync } = require('child_process')
var app = express();


app.use(express.static(path.join(__dirname, "dist")));
app.post('/build', function(request, response) {
  let postData = ''
  request.on('data', (chunk) => {
    postData += chunk
  })
  request.on('end', () => {
    postData = JSON.parse(postData)
    const component = path.resolve(
      './src/components/HelloWorld.vue'
    )
    try{
      fs.writeFileSync(component, postData.code)
      execSync('npm run build');
      response.writeHead(200)
      response.end('success')
    }catch(error){
      response.writeHead(400)
      response.end('error')
    }
  })
});


var server = app.listen(3000, function () {
  var host = "localhost";
  var port = server.address().port;
  console.log("listening on http://" + host + ":" + port + "/");
});
