var inquirer = require("inquirer");
var done = true;

question = [
	{
		type: "input",
		name: "whatever",
		message: "Guess"
	}
]

function guess()
{
		inquirer.prompt(question).then( answer => {
			if( answer.whatever == 10 )
			{
				console.log("Nope");
				guess();
			}
			else
			{
					console.log("Yep");
			}
		});
}

guess()
