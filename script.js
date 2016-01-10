function generateTicket(){


	//lottery generator
	var number; 
	var ticket = [];

	function generateNumber() {
		return Math.floor((Math.random() * 69) + 1);
	}

	function generatePowerball() {
		return Math.floor((Math.random() * 26) + 1);
	}

	//generate 5 white ball numbers
	for(i = 0; i < 5; i++){

		number =  generateNumber();//create random white ball number

		for(i = 0; i < ticket.length; i++) { //loop through current array of numbers

			if (number === ticket[i]) { //check to see if random number matches any current numbers. 
				number = generateNumber(); // generate a new number if number already used. 
			}
		}
		ticket.push(" " + number); //add valid number to array
	}

	powerball = generatePowerball(); //generate powerball number 1-26

	//ticket.push(powerball); //add powerball number to end of the array

	console.log('Numbers: ' + ticket); //log the whole 6 digit array
	console.log('Powerball: ' + powerball);

	document.getElementById("numbers").innerHTML = ticket;
	document.getElementById("powerball").innerHTML = powerball;

}

document.getElementById("jackpot-button").onclick = function() {

	generateTicket();
};


