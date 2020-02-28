// Core modules - Provides server
const http = require('http'); 
// use this for file transaction
const fs = require('fs'); 
const path = require('path');
// Buffer or temp memory on the client side and stores the user's request/data (Data that is not sensitive)
const qs = require('querystring');

const server = http.createServer((req, res) =>{
	// res.writeHead(200, {'Content-Type' : 'text/plain'});
	// res.write('Hello world');
	// res.end();

	console.log(`${req.method} request for ${req.url}`)

	// If the user is trying to access a site for the first time
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
		// If the user is trying to access the index (home) page from any other page on the site
		else if(req.url === '/index.html'){
			fs.readFile('./public/index.html' , 'UTF-8' , (err,data) =>{
				if(err) throw err;
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
		// If the user is trying to access the contact us page from any other page on the site
		else if(req.url === '/contactPage.html'){
			fs.readFile('./public/contactPage.html' , 'UTF-8' , (err,data) =>{
				if(err) throw err;
				res.writeHead(200, {'Content-Type' : 'text/html'});
				res.end(data);
			});
		}
		// Linking bootstrap from node_modules so that each page is able to use it
		else if(req.url.match ('/node_modules/')){
			// Stores path in a constant variable to be used later
			const nodePath = path.join(__dirname , req.url);
			fs.readFile(nodePath , 'UTF-8' , (err,data) =>{
				if(err) throw err;
				res.writeHead(200, {'Content-Type' : 'text/css'});
				res.end(data);
			});
		}
		// Linking custom stylesheet from public folder
		else if(req.url.match ('/css/')){
			// Stores path in a constant variable to be used later
			const cssPath = path.join(__dirname , 'public' , req.url);
			fs.readFile(cssPath , 'UTF-8' , (err,data) =>{
				if(err) throw err;
				res.writeHead(200, {'Content-Type' : 'text/css'});
				res.end(data);
			});
		}
		// Likning js plug ins from node_modules
		else if(req.url.match ('/node_modules/')){
			const nodeJsPath = path.join(__dirname , req.url);
			fs.readFile(nodeJsPath , 'UTF-8' , (err,data) =>{
				if(err) throw err;
				res.writeHead(200, {'Content-Type' : 'text/js'});
				res.end(data);
			});
		}
		// Linking custom javascript from public folder
		else if(req.url.match ('/js/')){
			// Stores path in a constant variable to be used later
			const jsPath = path.join(__dirname , 'public' , req.url);
			fs.readFile(jsPath , 'UTF-8' , (err,data) =>{
				if(err) throw err;
				res.writeHead(200, {'Content-Type' : 'text/js'});
				res.end(data);
			});
		}
		// links jpg images
		else if(req.url.match (/.jpg/)){
			const imagePath = path.join(__dirname , 'public' , req.url);
			fs.readFile(imagePath , (err,data) =>{
				if(err) throw err;
				res.writeHead(200, {'Content-Type' : 'jpg'});
				res.end(data);
			});
		}
		// Gets everything out of the assets folder regardless of file type
		// else if(req.url.match ('/assets/')){
			// const imagePath = path.join(__dirname , 'public' , req.url);
			// fs.readFile(imagePath, '' , (err,data) =>{
				// if(err) throw err;
				// res.writeHead(200, {'Content-Type' : ''});
				// res.end(data);
			// });
		// }
		// error message
		else{
			res.writeHead(200, {'Content-Type' : 'plain/text'});
			res.end('404 error - file not found');
		}
	} // Get method ends here

	// Post method starts here
	else if(req.method === 'POST'){
		if(req.url === '/sendForm'){
			// alert('Your form has been submitted');
			let body = '';

			req.on('data' , function(data){
				// body = body + data
				body += data;
			});

			req.on('end' , function(){
				console.log('Form data ends');
				console.log(body.toString());
				const formData = qs.parse(body.toString());
				console.log(formData);
			});
		}
	} // Post method ends here

}); // Server structure finishes here

// Usually use port 3000 for setting up our http server
server.listen(3000);
console.log('running node server at port3000');