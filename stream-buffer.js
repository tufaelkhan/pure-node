const http = require('http')
const fs = require('fs')
// creating a server using row node.js
const server = http.createServer()

// server listener
server.on('request', (req, res)=>{
    if(req.url === '/readfile' && req.method === "GET")
    
    // streaming file stream
    
    res.end('hello server world')
})
server.listen(5000, () => {
    console.log(`server is listining port 5000`);
})