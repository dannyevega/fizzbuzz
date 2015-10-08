var userResponse = prompt("Please enter a number to FizzBuzz.");
var userResponseNum = parseInt(userResponse);

function fizzBuzz(num){
	var current = 0;
	for(var i = 1; i <= num; i++, current++){
		if(i % 3 === 0 && i % 5 === 0){
			$('#fizzbuzz').append('<p>FizzBuzz</p>');
		} else if(i % 3 === 0){
			$('#fizzbuzz').append('<p>Fizz</p>');
		} else if(i % 5 === 0){
			$('#fizzbuzz').append('<p>Buzz</p>');
		} else {
			$('#fizzbuzz').append('<p>' + i + '</p>');
		}
	}	
}

fizzBuzz(userResponseNum);

