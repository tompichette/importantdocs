var boxesArray = [];
var boxes = document.querySelectorAll("td");
var message = document.querySelector("#message");
var restartButton = document.querySelector("#restart-button");
var resetScoreButton = document.querySelector("#reset-button");
var p1ScoreDisplay = document.querySelector("#p1score");
var p2ScoreDisplay = document.querySelector("#p2score");
var turn = "player1";
var gameOver = false;
var catsGame = false;
var catsGameValue;
var p1Score;
var p2Score;

init();

function init() {
	setUpListeners();
	resetScore();
	restartGame();
}

function setUpListeners() {
	for(let i = 0; i < boxes.length; i++){
		boxes[i].addEventListener("click", clickBox);
	}
	restartButton.addEventListener("click", restartGame);
	resetScoreButton.addEventListener("click", resetScore);
}

//restarts the game without resetting scores and updates message to correct player turn
 function restartGame() {
	for(let i = 0; i < boxes.length; i++){
		boxes[i].value = undefined;
		boxes[i].textContent = "";
		if(turn === "player1") {
			message.textContent = "Player One's Turn";
		} else if(turn === "player2"){
			message.textContent = "Player Two's Turn";
		}
		gameOver = false;
		catsGameValue = 0;
	}
}

//resets scores to zero, updates the display, and resets turn to player 1
function resetScore() {
	p1Score = 0;
	p2Score = 0;
	p1ScoreDisplay.textContent = p1Score;
	p2ScoreDisplay.textContent = p2Score;
	turn = "player1";
}

function updateBoxes(){
	boxesArray = [
	//top row 0
	[boxes[0].value, boxes[1].value, boxes[2].value],
	//middle row 1
	[boxes[3].value, boxes[4].value, boxes[5].value],
	//bottom row 2
	[boxes[6].value, boxes[7].value, boxes[8].value],
	//left column 3
	[boxes[0].value, boxes[3].value, boxes[6].value],
	//middle column 4
	[boxes[1].value, boxes[4].value, boxes[7].value],
	//right column 5
	[boxes[2].value, boxes[5].value, boxes[8].value],
	//top left diagonal 6
	[boxes[0].value, boxes[4].value, boxes[8].value],
	//top right diagonal 7
	[boxes[2].value, boxes[4].value, boxes[6].value]];
}

//When a box is clicked
function clickBox() {
	//check if there's already a mark in the box or if the game is over
	while(this.value !== 0 && this.value !== 1 && !gameOver){
		if(turn === "player1") { 
			//set value of box to 0
			this.value = 0;
			//set text of box to X
			this.textContent = "X";
			//set turn to player2
			turn = "player2";
			//change message to player2
			message.textContent = "Player Two's Turn";
			//update the array and check for a winner
			catsGameValue++;
			updateBoxes();
			checkForWinner(boxesArray);
			checkForcatsGameValue();
		} else if (turn === "player2") {
			//set value of box to 1
			this.value = 1;
			//set text of box to O
			this.textContent = "O";
			//set turn to player1
			turn = "player1";
			//set message to player1
			message.textContent = "Player One's Turn";
			//update the array and check for a winner
			catsGameValue++;
			updateBoxes();
			checkForWinner(boxesArray);
			checkForcatsGameValue();
		}
	}
}

function checkForcatsGameValue() {
	if(catsGameValue === 9 && gameOver === false) {
		gameOver = true;
		catsGame = true;
		message.textContent = "Cat's Game!";
	}
}

function checkForWinner(arr) {
	for(let i = 0; i < arr.length; i++) {
		let box = boxesArray[i];
		for(let j = 1; j < box.length; j++) {
			if(box[j] === undefined) {
				gameOver = false;
				break;
			} else if(box[j] !== box[0]){
				gameOver = false;
				break;
			} else if(box[j] === box[0]){
				gameOver = true;
			}
		}
		//check to see if the game is over and it isn't a cat's game
		if(gameOver === true && catsGame === false && turn === "player1") {
			message.textContent = "Game Over!";
			//add a point to player 2 and set turn to player 2 (winner gets first turn)
			p2Score += 1;
			turn = "player2";
			//updates score display
			p1ScoreDisplay.textContent = p1Score;
			p2ScoreDisplay.textContent = p2Score;
			break;
		} else if(gameOver === true && catsGame === false && turn === "player2") {
			message.textContent = "Game Over!";
			//add a point to player 1 and set turn to player 1 (winner gets first turn)
			p1Score += 1;
			turn = "player1";
			//updates score display
			p1ScoreDisplay.textContent = p1Score;
			p2ScoreDisplay.textContent = p2Score;
			break;
		}

	}
}