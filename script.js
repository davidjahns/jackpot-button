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
		ticket.push("<li class='ball'> " + number + "</li>"); //add valid number to array
	}

	ticket = ticket.join(""); //turn array into string of numbers without comma


	powerball = generatePowerball(); //generate powerball number 1-26

	//ticket.push(powerball); //add powerball number to end of the array

	console.log('Numbers: ' + ticket); //log the whole 6 digit array
	console.log('Powerball: ' + powerball);

	document.getElementById("numbers").innerHTML = ticket;
	document.getElementById("powerball").innerHTML = powerball;

}



//READABLE MARKUP ON JACKPOT BUTTON ACTION BELOW
//
//<div class="loader">
//   <svg class="circular" viewBox="25 25 50 50">
//       <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
//   </svg>
//</div>

//swap function
function swap() {
	document.getElementById("loader").innerHTML = "";
	document.getElementById("results").className = "";
}

//jackpot button action
document.getElementById("jackpot-button").onclick = function() {
	document.getElementById("results").className = "hidden";
	document.getElementById("loader").innerHTML = "<div class='loader'><svg class='circular' viewBox='25 25 50 50'><circle class='path' cx='50' cy='50' r='20' fill='none' stroke-width='2' stroke-miterlimit='10'/></svg></div>";
	generateTicket();
	setTimeout(swap, 2000);
};

//show overlay on load. 
window.onload = function() {
	document.getElementById("overlay").className = "";
};

//overlay button cancel
document.getElementById("go").onclick = function() {
	document.getElementById("overlay").className = "overlay-scale";
};


