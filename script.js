function fibonacci(num) {  
	let sum =0;
	for(let i=0; i<=num; i++){
		sum = sum + num;
	}
	return sum;
}

module.exports = fibonacci;
