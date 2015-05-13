var boxes = document.getElementsByClassName("tile");
console.log(boxes);

var Player1 = "X";

function handlePlayerClick(){
	console.log("something clicked")
	if (Player1 == "X"){
		console.log(Player1);
		this.innerHTML = "X";
		Player1 = "O";
		console.log(Player1);
	}
	else { 
		this.innerHTML= "O";
		console.log(Player1);
		Player1 = "X";
		console.log(Player1);
	}
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