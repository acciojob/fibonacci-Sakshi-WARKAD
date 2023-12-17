function fibonacci(num) {  
	let firstNum = 0;
	let secondNum = 1;
	let result = firstNum + secondNum;
	for(let i=1; i<=num; i++){
		result += i; 
	}
	return result;
}

module.exports = fibonacci;
