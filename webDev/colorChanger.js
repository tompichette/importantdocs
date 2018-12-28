console.log("Loaded!")
var colorChangeButton = document.getElementById("colorButton");


/* //Option One (made by me)
colorChangeButton.addEventListener("click", changeBackgroundColorBody);

function changeBackgroundColorBody(){
	if (document.body.style.backgroundColor !== "blue"){
		document.body.style.backgroundColor = "blue";
	} else {
		document.body.style.backgroundColor = "";
	}
};
*/


// OR Option Two (suggested by course)

colorChangeButton.addEventListener("click", function(){
	document.body.classList.toggle("blue-background");
});