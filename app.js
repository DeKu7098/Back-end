const http = require('http');
const fs = require('fs');
// function rqListner(req,res){
  
// }
const server = http.createServer((req,res) => {
//  console.log(req.url, req.method, req.headers);
const url = req.url;
const method = req.method;
if(url === '/'){
    res.write('<html>');
 res.write('<head><title>Enter Message</title><head>');
 res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
 res.write('</html>');
 return res.end();
}
// else if(url === '/about') {
//     res.write('<html>');
//     res.write('<head><title>About</title><head>');
//     res.write('<body><h1>About Us Page</h1></body>');
//     res.write('</html>');
//     res.end();
// }else if (url === '/node') {
//     res.write('<html>');
//     res.write('<head><title>Node</title><head>');
//     res.write('<body><h1>Welocme To Node Js Project</h1></body>');
//     res.write('</html>');
//     res.end();
// }
if ('/message' && method === 'POST'){
  fs.writeFileSync('message.text', 'Dummy Text');
  res.statusCode = 302;
  res.setHeader('Location', '/');
  return res.end();
}
 res.setHeader('Content-Type', 'text/html');
 res.write('<html>');
 res.write('<head><title>Arka</title><head>');
 res.write('<body><h1>Arka</h1></body>');
 res.write('</html>');
 res.end();
});

server.listen(4000);