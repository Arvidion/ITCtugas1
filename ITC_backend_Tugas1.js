const http = require('http');
const url = require('url');

const PORT = 3000;

const server = http.createServer((req, res) => {
    if(req.method === 'GET'){
        const parsedUrl = url.parse(req.url, true);
        const pathname = parsedUrl.pathname;
        if(pathname === '/'){
            res.setHeader('Content-Type', 'html');
            res.writeHead(200); 
            res.end('<h1>Hai Syg<h1>')
        }
        else if(pathname === '/users'){
            const {users} = require('./datauser.js');
            const datauser = require('./handleruser.js');
            datauser(users);
            res.setHeader('Content-Type', 'application/json');
            res.writeHead(200);
            res.end(JSON.stringify(users));
        }
        else{
            const err = {
                Status : "Not Found lol",
                Message : "Resource Not Found"
            }
            res.setHeader('Content-Type', 'application/json');
            res.writeHead(200);
            res.end(JSON.stringify(err));
        }
    }
    else{
        const notget = {
            Status : "Gaboleh, Gad diizinin",
            Message : "Metode HTTPnya ga dibolehin"
        }
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(200);
        res.end(JSON.stringify(notget));
    }
})

const port = 3000;

server.listen(port);