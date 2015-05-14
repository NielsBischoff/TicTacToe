//represents the individual playing fields
var boxes = document.getElementsByClassName("tile");

//represents the next move
var token = "X";

//handels click of a box
function handlePlayerClick(e){

	console.log("handlePlayerClick called")

	//do nothing if box is empty
	if(e.target.innerHTML != ""){
		console.log("not empty!")
		return
	}

	//display token in box
	e.target.innerHTML = token

	//record which box and token
	//check for winner
		//if no winner
			//check for tie

	//change to other player
	if (token === "X"){
		token = "O";
	} else { 
		token = "X"; 
	}

	/*
	if (token == "X"){
		console.log(token);
		this.innerHTML = "X";
		token = "O";
		console.log(token);
	}
	else { 
		this.innerHTML= "O";
		console.log(token);
		token = "X";
		console.log(token);
	}
	*/


}

//Make the boxes listen for a player's click
for(i = 0; i < boxes.length; i++){
	boxes[i].addEventListener("click", handlePlayerClick);
} 



//chose token

//select a field

//field selection is locked

//win logic is run 

//chekc for winner or tie 

//winner is alerted

//winner is recorded

//bord is rest