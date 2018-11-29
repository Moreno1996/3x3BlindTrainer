var letters = [
"A","B","C","D",
"E","F","G","H",
"I","J","K","L",
"M","N","O","P",
"R","S","T","U",
"V","W","X, Y","Z"
];
var colorNames = ["","white", "green", "red", "blue", "orange", "yellow"];
var colors = [
[1,5,4],[1,4,3],[1,3,2],[1,2,5],
[2,5,1],[2,1,3],[2,3,6],[2,6,5],
[3,2,1],[3,1,4],[3,4,6],[3,6,2],
[4,3,1],[4,1,5],[4,5,6],[4,6,3],
[5,4,1],[5,1,2],[5,2,6],[5,6,4],
[6,5,2],[6,2,3],[6,3,4],[6,4,5],
]
var correctAnswer = 0;
var base = 0;
function setColor(){
	var i = Math.floor(Math.random()*letters.length);
	correctAnswer = i;
	var j = i - (i%4);
	base = j;
	console.log(i + " ->" + j)
	var letter = letters[i];
	var color = colors[i];
	document.getElementById("top").style.backgroundColor=colorNames[color[0]];
	document.getElementById("right").style.backgroundColor=colorNames[color[1]];
	document.getElementById("front").style.backgroundColor=colorNames[color[2]];
	for(var a = 0; a<4; a++){
	document.getElementById("button" + (a+1)).value=letters[j+a];

	}
	
}
function answer(i){
	if (base+i==correctAnswer){
		console.log("Good");
	}
	else{
				console.log("False");

	}
	setColor();
}