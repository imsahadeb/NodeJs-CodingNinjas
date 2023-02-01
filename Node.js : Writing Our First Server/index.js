/**Creating First Server */
const http = require('http');
const fs = require('fs');
const port=8000;

/*
function requestHandler(req,res) {
    console.log(req.url);
   // res.end('Hi, There...... It Works')

   res.writeHead(200,{
    'content-type': 'text/html'
   });
   res.end(' <h1>Hello! Serving HTML Throgh Node Js</h1>')
  
    
}

*/

// Handling File with node js
/**

function requestHandler(req,res){
    console.log((req.url));
    res.writeHead(200,{'content-type': 'text/html'});
    fs.readFile('./index.html', function(err,data){
        if(err){
            console.log('error',err);
            return res.end('<h1>Error!</h1>');
        }

        return res.end(data);
    })
}
*/

function requestHandler(req,res){
    console.log((req.url));
    res.writeHead(200,{'content-type': 'text/html'});

    let fileePath ;
    switch (req.url) {
        case '/':
            fileePath='./index.html'
            break;
        case '/profile':
            fileePath='./profile.html'
            break;
    
        default:
            fileePath='./404.html'
            break;
    }


    fs.readFile(fileePath, function(err,data){
        if(err){
            console.log('error',err);
            return res.end('<h1>Error!</h1>');
        }

        return res.end(data);
    })
}


const server = http.createServer(requestHandler);
server.listen(port, function (err) {
    if(err){
        console.log(err);
        return;
    }
    console.log('Server is running on port:', port);
    
})