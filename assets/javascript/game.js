$('document').ready(function(){
/* Can define all functions seperately here */ 


/* number of games won */
var gamesWon = 0; /* counter increases by 1 when word guessed */

/* number of games lost */
var gamesLost = 0; /* counter increases by 1 when word NOT guessed */ 

/* array of words to guess */ 
var wordListToGuess = ["jacksparrow", "tortuga", "eastindiatradingcompany", "blacksmit h",
"howsyourfootwork", "whystherumgone", "norrington", "piratesbounty",
"theblackpearlscaptain", "hectorbarbossa"]; 

var letter = ""; /* letter keyed by user */ 
/* Variables Needed */ 
/* Variables Needed */
/* Variables Needed */ 
/* Variables Needed */ 
/* Variables Needed */ 
/* Variables Needed */ 
/* Variables Needed */ 
/* Variables Needed */


/* On button click */ 
function setBoard(){
/*   set score to 0 */ 
var gameScore = 0; /* counter increases by 100 with each blank filled in 
			- and - decreases by 25 when letter guessed incorrectly */ 

/*   set guesses to 6 */  	
var guesses = 6; /* Total number of guesses */ 



/*   grab word from array */ 
var mysteryWord = wordListToGuess[Math.floor(Math.random() * wordListToGuess.length)]; /* random word from array */ 



/*		then count number of characters in word, store as variable and use innerHTML to print #var underscores in wordToGuess */
		
function createBlanks() {
	var text = "_ ";
		for (i = 0; i <= mysteryWord.length; i++) { 
		    text += mysteryWord.charAt(Math.floor(Math.random() * mysteryWord.length));
		    document.getElementById("mysteryWord").innerHTML = (text);
		}
}
/*
/* have onkey event listener */
$(document).keyup(function(e) {
 	letter = alert(String.fromCharCode(evt.keyCode));
 	letter.lowerCase();
 	mysteryWord.search(letter);
 	;
    return.guesses = guesses--;
 });
       //do stuff
/* when key is typed check if in word */
	/* if in word print in correct character location */
/* 	when done increase score */
/* if not in word, print in wrongLettersGuessed */
/* 	when done remove a guess */
/* 		decrease score */
/* 		change visible hangman picture */

};

});
/* when word is complete */
/* 	change background */
/* 	hide hangman */
/* 	show "You Won!!" */
/*  increase gamesWonCounter*/
/* when all guesses used and word NOT complete */
/* 	Print "Poor Jack - wanna try again?" */
/*  increase gamesLostCounter */
