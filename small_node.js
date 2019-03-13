function printToScreen(word){

		var boolVal = (word=="sleep")

		console.log("Hello World");
		if (boolVal) {
			console.log("Goodbye World " + word);
		}
}

// For Loops, While Loops
function printArray(myarray){
	
	// I figure out how many items are in my array
	var arraySize = myarray.length;

	//Create a variable that is a counter
	//		|          Here you define how long the loop will run
	//  	|            |          Here you define what happens after each time the loop runs
	//		V            V           V i++ <-> i = i + 1
									// i+=2 <-> i = i + 2

	// for( var i =0; i < 10; i++)
	for( var i = 0; i < arraySize; i++ )
	{
			console.log("Value of array: "+ myarray[i]);
			console.log("Value of i: " + i );
	}

	var j = 0;
	while( j < arraySize ) // while( whatever here is true ) { execute loop }
	{
		console.log("Value of array: " + myarray[j] );
		j = j + 1;
	}
}

//printToScreen("sleep");
//printToScreen("sleepo");
printArray(["my","name","is","lea"]);
