var inquirer = require("inquirer");
var done = true;
var p = Math.floor(Math.random() * 100) %10;

question = [
	{
		type: "input",
		name: "userNumber",
		message: "Guess the number"
	}
]
playAgain = [
	{
		type: "input",
		name: "userChoice",
		message: "play again?"
	}
]
function playAgainFunk(){
	inquirer.prompt(playAgain).then( answer => {
		if (answer.userChoice == "yes"){
			p = Math.floor(Math.random() * 100) %10;
			guess();
		}
		else {
			console.log("bye");
		}
	});
}
function guess()
{
		inquirer.prompt(question).then( answer => {
			if( answer.userNumber == p )
			{
				console.log("Correct");
				playAgainFunk();

			}
			else
			{
					console.log("Nope");
					guess();
			}
		});
}

guess()
