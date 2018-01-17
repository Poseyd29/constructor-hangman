const inquirer = require('inquirer');
var Word = require('./word.js');

// CLIPPERS
// [ 'c', 'l', 'i', 'p', 'p', 'e', 'r', 's' ]




var game = {

	wordList: ['TIMBERWOLVES', 'JAGUARS', 'CAVELIERS', 'CLIPPERS', 'PIRATES', 'PANTHERS', 'ASTROS', 'ROCKETS', 'CARDINALS', 'PACERS'],
	guessesRemaining: 10,
	word: function () {
		return new Word(this.wordList[3])
	},
	renderBoard: function () {
		var w = this.word().wordState();
		var r = w.map(function (val) {
			return val.displayState();
		});
		return r.join('');

	},
	startGame: function () {
		console.log(`\n--------WELCOME TO HANGMAN--------\n`);
		console.log(this.renderBoard());
		makeGuess();
	},
	evaluateGuess: function (guess) {
		// [Letter, Letter, Letter, Letter, Letter, Letter, Letter, Letter]
		var w = this.word().wordState();
		var leng = w.length;
		w.forEach(function (val, index) {
			if (guess === val.character) {

				// val.visible = true;
				this.word().wordState()[index].visible = true;
			}
		});
		console.log(w);
	

		console.log(this.word().wordState());
		console.log(this.renderBoard());
		makeGuess();
	}
}
game.startGame();

function makeGuess() {
	inquirer
		.prompt([{
			type: "input",
			name: "choice",
			message: "PLEASE GUESS A LETTER"
		}])
		.then(function (val) {
			var n = val.choice.toUpperCase();
			console.log(n);
			game.evaluateGuess(n);


		});
}
