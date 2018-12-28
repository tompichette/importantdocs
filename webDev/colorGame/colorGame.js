var numSquares = 6;
var pickedColor;
var colors = [];
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	//assigns event listener to resetButton
	resetButton.addEventListener("click", resetGame);
	//assigns even listeners to mode buttons and runs reset
	setupModeButtons();
	//set initial colors and adds event listener to squares
	setupSquares();
	//runs initial reset
	resetGame();
}

//assigns even listeners to mode buttons and runs reset
function setupModeButtons(){
	for(i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			resetGame();
		});
	}
}
 
 //set colors and adds event listener to squares
function setupSquares(){
	for(i = 0; i < squares.length; i++){
		//add initial colors to squares
		squares[i].style.backgroundColor = colors[i];
		//add click listeners to squares
		squares[i].addEventListener("click", clickSquare);
	}
}

//resets the game
function resetGame() {
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from Array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//reset the reset button to say new colors
	resetButton.textContent = "New Colors";
	//reset the message
	messageDisplay.textContent = "";
	//change the h1 background back to default
	h1.style.backgroundColor = "steelblue";
	//change colors of squares on page
	for(i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
		} else {
			squares[i].style.display = "none";
		}
	}
};

//compares the color of the square to the picked color
function clickSquare(){
	//grab color of clicked square
	var clickedColor = this.style.backgroundColor;
	//compare color to pickedColor
	if(clickedColor === pickedColor){
		messageDisplay.textContent = "Correct!";
		changeColors(clickedColor);
		h1.style.backgroundColor = clickedColor;
		resetButton.textContent = "Play Again?";
	} else {
		this.style.backgroundColor = "#232323";
		messageDisplay.textContent = "Try Again";
	}
};

//changes all squares to the picked color
function changeColors(color){
	//loop through all squares
	for(i = 0; i < colors.length; i++){
		//change color to match given color
		squares[i].style.backgroundColor = color;
	}
};

//picks a random color from the colors array
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

//returns random colors in an array to assign to the color array
function generateRandomColors(num){
	//make an Array
	var arr = []
	//repeat num times
	for(i = 0; i < num; i++){
		//get random color and push into Array
		arr.push(randomColor());
	}
	//return Array
	return arr;
}

//returns a random rgb string
function randomColor(){
	//pick a "red" from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0-255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";	
}








/* refactored code
easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
});
*/