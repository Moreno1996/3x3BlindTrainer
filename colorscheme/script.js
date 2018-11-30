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
var allNumbers;
var hard = false;
var good = 0;
var total =0;
var started = false;
function startGame(){
	allNumbers = Array.from(Array(letters.length).keys());
	allNumbers = shuffleArray(allNumbers);
	setAnswer(allNumbers.shift());
}
function setAnswer(i){
	correctAnswer = i;
	setColor();
}
function setColor(){
	console.log(allNumbers);
	var j = correctAnswer - (correctAnswer%4);
	base = j;
	console.log(correctAnswer + " ->" + j)
	var letter = letters[correctAnswer];
	var color = colors[correctAnswer];
	document.getElementById("top").style.backgroundColor=colorNames[color[0]];
	document.getElementById("right").style.backgroundColor=colorNames[color[1]];
	if(!hard){
	document.getElementById("front").style.backgroundColor=colorNames[color[2]];
	}
	else{
	document.getElementById("front").style.backgroundColor="black";

	}
	for(var a = 0; a<4; a++){
	document.getElementById("button" + (a+1)).value=letters[j+a];

	}
	
}
function answer(i){
	if(!started){
		stopwatch.start();
	}
	if (base+i==correctAnswer){
		console.log("Good"); 
		good ++;
				document.getElementById("res").innerHTML="Great!";

	}
	else{
				document.getElementById("res").innerHTML="To Bad!";

	}
		
	if(allNumbers.length>0){	
	total ++;
	setAnswer(allNumbers.shift());
	}
	else{
	stopwatch.stop();	
	document.getElementById("res").innerHTML = 	document.getElementById("res").innerHTML + " and no more questions!";
	total = 24;
	}
	document.getElementById("goodCount").innerHTML=good;
	document.getElementById("total").innerHTML=total;
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
	return array;
}
document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('input[type="checkbox"]');

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
	hard = true;  
stopwatch.stop();
stopwatch.clear();	
	startGame();
	} else {
	  stopwatch.stop();
stopwatch.clear();	
      hard = false;
	  startGame();
    }
  });
});