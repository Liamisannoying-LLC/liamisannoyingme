/**
* Title: Arrays excercise
* Author:
* Date:
* Version: 1.1 (fixed title, 7-Nov-22)
* Version: 1.2 (updated comments/instructions; activity name;  8-Nov-22)
* Purpose: Learn how to use Arraus
**/

console.log("Arrays activity")

// Some constants that will be used in this script
const WIDTH = 600;
const HEIGHT = 600;

// Some global variables that will be needed
// Task 2: 
// My word should be cat. Add the "t" to the array called myWord
// (Or insert your own word - adjust the tests in the doc)
// Add another console log to display the new third letter
var ctx
var textColor = "HotPink"
var bgColor = "Beige"
var myWord =  "cat".split('')   // Array of letters in my word.

var guesses = [] // Task 4a: uncomment this line
console.log("My word:", myWord)
console.log("My word has", myWord.length, "letters")
myWord.forEach( (x,i)=>console.log( `letter ${i} is ${x}`  ) )

// Set up the canvas... You've done it before
window.onload=startCanvas

function startCanvas(){
	ctx=document.getElementById("myCanvas").getContext("2d")
	ctx.font = "45px arial"
	ctx.fillStyle = "black"
	ctx.fillText("Guess my word",150,255);
	ctx.fillText("Press any key",150,300);
}

// Set up the keyDown event listener
window.addEventListener('keydown', keyDownFunction)

// This is the function that the eventlistener calls when a key is pressed
function keyDownFunction(keyboardEvent){
	// The keyboard event is passed to the function as an argument
	// The key that was pressed is stored in a local variable named keyDown
	var keyDown = keyboardEvent.key
	// Debug statement, log the key that was pressed
	console.log("You pressed "+keyDown)
	
	// Draw the background
	ctx.fillStyle = bgColor
	ctx.fillRect(0,0,WIDTH,HEIGHT)
	// Display the key that was pressed
	ctx.font = "45px arial"
	ctx.fillStyle = textColor
	ctx.fillText("You pressed "+keyDown, 150,150);
	// Task 3:
	// Add if statements for the second and third letters in the word (or more if you picked a longer word)
	if(keyDown == myWord[0]){
		correctLetter(keyDown)
	}else if(keyDown == myWord[1]){   // update to check the second letter...
		correctLetter(keyDown)
	}else if(keyDown == myWord[2]){   // update to check the second letter...
		correctLetter(keyDown)
	}else{
		incorrectLetter(keyDown)
	}


	// Change the fontsize to be smaller
	ctx.font = "25px arial"
	
	
	//var isNewGuess = true // Task 6a: Uncomment this line



	// Task 5:
	// Check to see if a letter has already been guessed
	// Remember counting loops from skill 3
	var numberOfGuesses = guesses.length // Change this to be the length of the guesses array	
	var count = 0; // Start counting at zero
	while(count < numberOfGuesses){ // check all the guesses
	console.log("Checking guess number",count)
		if(keyDown == guesses[count]){ // instead of 0, use the count
			// Add a console message saying that you have already guessed that letter
			// Once that is working, display the same message on the canvas
			console.log("This letter has already been guessed.")
			//isNewGuess = false// Task 6b: Uncomment, set it to false
		}
		count++ // This line increments count (add one)
	}
	
	// Task 6c:
	// Only add the new gues to the Guesses array if it is a new guess.
	// Wrap the guesses.push code in an if statement that check the isNewGuess




	// Task 4b:
	// Uncomment the next line and fix it to add the key that was just pressed to the guesses array
	guesses.push(keyDown)
	
	// Log a message that shows the contents of the gusses array (see line 25 for an example)
	console.log("guess so far",guesses)	
	// Log a message that tells you the length of the array (see line 26 for an example)
	console.log("count or length???", guesses.length)
	// Display a message on the canvas saying how many guesses
	displayGuessSize()
	// Display a message on the canvas displaying all the guesses
	displayGuesses()
}

// What to do when the key pressed is in the word.
function correctLetter(key){
	console.log("Yay,",key,"is in my word!")
	ctx.fillStyle = "lightgreen"
	ctx.fillRect(0,300,WIDTH,HEIGHT)
	ctx.fillStyle = "black"
	ctx.fillText("Yay! "+key+" is in my word", 10,470);
}


// What to do when the key pressed is not in the word.
function incorrectLetter(key){
	ctx.fillStyle = "lightcoral"
	ctx.fillRect(0,300,WIDTH,HEIGHT)
	ctx.fillStyle = "black"
	ctx.fillText("Wrong! "+key+" is not in my word", 10,470);
}

// Task 7:
// Change the word. Replace the myWord array with:
///var myWord = ["e", "l", "e", "p", "h", "a", "n", "t"]
// Display a message at the top of the canvas that says how many letters in the word
// Under task3 replace the three if statements with a loop that checks each letter in the myWord array

// Task 8 (optional):
// Use a flag like in task 6 to detect incorrect guesses.
// If a guess is wrong display the incorrect message 