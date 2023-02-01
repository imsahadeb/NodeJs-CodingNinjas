/**Creating First Server */
const http = require('http');
const port=8000;
function requestHandler(req,res) {
    console.log(req.url);
    res.end('Hi, There...... It Works')
    
}
const server = http.createServer(requestHandler);
server.listen(port, function (err) {
    if(err){
        console.log(err);
        return;
    }
    console.log('Server is running on port:', port);
    
})