


document.getElementById("demo").innerHTML = "Hello JavaScript";



/*On button click 
	set score to 0
	var score = 0
	set guesses to 6
	grab word from array
		then count  number of characters in word
		store # in variable
		use innerHTML to print #var underscores in wordToGuess
have onkey event listener
when key is typed check if in word
if in word print in correct character location
	when done increase score
if not in word, print in wrongLettersGuessed
	when done remove a guess
		decrease score
		change visible hangman picture
when word is complete
	change background
	hide hangman
	show "You Won!!"
when all guesses used and word NOT complete
	Print "Poor Jack - wanna try again?"
 */