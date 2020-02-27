// Core modules - Provides server
const http = require('http'); 
// use this for file transaction
const fs = require('fs'); 
const path = require('path');

const server = http.createServer((req, res) =>{
	// res.writeHead(200, {'Content-Type' : 'text/plain'});
	// res.write('Hello world');
	// res.end();

	console.log(`${req.method} request for ${req.url}`)

	// If the user is trying to access a site
	if(req.method === 'GET'){
		// If the user is trying to view the index
		if(req.url === '/'){
			// Finds and reads the home page of the website
			fs.readFile('./public/index.html' , 'UTF-8' , (err,data) =>{
				// If there is an error, it will be dispalyed on the server in the console
				if(err) throw err;
				// If the content matches, then the html file will be displayed
				res.writeHead(200, {'Content-Type' : 'text/html'});
				res.end(data);
			});
		} 
		// If the user is trying to access the about page on the website
		else if(req.url === '/about.html'){
			fs.readFile('./public/about.html' , 'UTF-8' , (err,data) =>{
				if(err) throw err;
				res.writeHead(200, {'Content-Type' : 'text/html'});
				res.end(data);
			});
		}
		// If the user is trying to access the index page from any other page on the site
		else if(req.url === '/index.html'){
			fs.readFile('./public/index.html' , 'UTF-8' , (err,data) =>{
				if(err) throw err;
				res.writeHead(200, {'Content-Type' : 'text/html'});
				res.end(data);
			});
		}
		else if(req.url === '/contactPage.html'){
			fs.readFile('./public/contactPage.html' , 'UTF-8' , (err,data) =>{
				if(err) throw err;
				res.writeHead(200, {'Content-Type' : 'text/html'});
				res.end(data);
			});
		}
		// Gets the css for the pages
		// else if(req.url === '/stylesheet.css'){
			// fs.readFile('./public/css/stylesheet.css' , (err,data) =>{
				// if(err) throw err;
				// res.writeHead(200, {'Content-Type' : 'text/css'});
				// res.end(data);
			// });
		// }
	} // Method ends here
});

// Usually use port 3000 for setting up our http server
server.listen(3000);
console.log('running node server at port3000');