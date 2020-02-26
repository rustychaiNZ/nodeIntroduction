// Core modules - Provides server
const http = require('http'); 

const server = http.createServer((req, res) =>{
	res.write('Hello world');
	res.end();
});

// Usually use port 3000 for setting up our http server
server.listen(3000);
console.log('running node server at port3000');