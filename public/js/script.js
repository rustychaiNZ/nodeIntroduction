// Document ready function
$(document).ready(function(){
	var x = 5;
	console.log(x);
	y = 10;
	console.log(y);
	// Cannot change the value when a variable is declared const becuase it's constant
	const z = 'hello world';
	console.log(z);
 	// z = 'na changed my mind'; would not work because z was delceared as a constant variable

	// Let has block scope meaning that it is only known inside of the structure that it is declared
	for(let i = 0; i < 5; i++){
		console.log(i);
	}

	// console.log(i); will not display due to i being delcared inside of for structure


	// arrow function is written using => together with no spaces and works the same as a function
	let total = (p,q)=> console.log(p + q);
	total(21,23);

});