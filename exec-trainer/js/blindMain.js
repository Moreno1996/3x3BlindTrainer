var cube_corners 	= 	["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "v", "w", "x", "z"];
var cube_edges 		= 	["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "v", "w", "x", "z"];
var normal = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "v", "w", "x", "z"];
var mirror = ["m", "i", "e", "r", "c", "l", "v", "s", "b", "p", "w", "f", "a", "u", "x", "j", "d", "h", "z", "n", "g", "k", "o", "t"];
var edge_flips = [];
//corners
var fc = [
	[4, 5, 6, 7],
	[3, 8, 21, 18],
	[2, 11, 20, 17]
];
var bc = [
	[12, 13, 14, 15],
	[0, 19, 22, 9],
	[1, 16, 23, 10]
];
var uc = [
	[0, 1, 2, 3],
	[12, 8, 4, 16],
	[13, 9, 5, 17]
];
var dc = [
	[20, 21, 22, 23],
	[7, 11, 15, 19],
	[6, 10, 14, 18]
];
var lc = [
	[16, 17, 18, 19],
	[0, 4, 20, 14],
	[3, 7, 23, 13]
];
var rc = [
	[8, 9, 10, 11],
	[1, 14, 21, 5],
	[2, 12, 22, 6]
];
//edge cycles
var fe = [
	[4, 5, 6, 7],
	[2, 11, 20, 17]
];
var be = [
	[12, 13, 14, 15],
	[0, 19, 22, 9]
];
var ue = [
	[0, 1, 2, 3],
	[4, 16, 12, 8]
];
var de = [
	[20, 21, 22, 23],
	[6, 10, 14, 18]
];
var le = [
	[16, 17, 18, 19],
	[3, 7, 23, 13]
];
var re = [
	[8, 9, 10, 11],
	[1, 15, 21, 5]
];

function getCornerBufferPiece() {
	return cube_corners[2];
}

function getEdgeBufferPiece() {
	return cube_edges[2];
}
//rotate the pieces, given a certain move;
function rotate(move) {
	switch (move) {
		case "F":
			rotatepieces(fc, fe);
			break;
		case "B":
			rotatepieces(bc, be);
			break;
		case "R":
			rotatepieces(rc, re);
			break;
		case "L":
			rotatepieces(lc, le);
			break;
		case "U":
			rotatepieces(uc, ue);
			break;
		case "D":
			rotatepieces(dc, de);
			break;
	}
}
//
function rotatepieces(corners, edges) {
	//for each array, rotate the corner pieces.
	for (var i = 0; i < corners.length; i++) {
		var subi = corners[i][3];
		var sub = cube_corners[subi];
		for (var j = 3; j > 0; j--) {
			cube_corners[corners[i][j]] = cube_corners[corners[i][j - 1]];
		}
		cube_corners[corners[i][0]] = sub;
	}
	//for each array, rotate the edge pieces.
	for (var i = 0; i < edges.length; i++) {
		var subi = edges[i][3];
		var sub = cube_edges[subi];
		for (var j = 3; j > 0; j--) {
			cube_edges[edges[i][j]] = cube_edges[edges[i][j - 1]];
		}
		cube_edges[edges[i][0]] = sub;
	}
}

function executeScramble(array) {
	for (var i = 0; i < array.length; i++) {
		var move = array[i];
		var single_move = move.charAt(0);
		if (move.length == 1) {
			rotate(single_move);
		} else if (move.charAt(1) == 2) {
			rotate(single_move);
			rotate(single_move);
		} else {
			rotate(single_move);
			rotate(single_move);
			rotate(single_move);
		}
	}
}

function getBlindSolution() {
	console.log("Edge: " + getEdgeSolution());
	console.log("Corners: " + getCornerSolution());
}

function differenceIndex(a, b) {
	for (var i = 0; i < a.length; i++) {
		if (a[i] != b[i]) {
			//if buffer is flipped
			if (b[i] == "c" || b[i] == "e") {
				//skip
			} else {
				//different index
				return i;
			}
		}
	}
	return -1;
}




function getCornerSolution() {
	var solution = "";
	var buffer = getCornerBufferPiece();
	while (buffer !== "c") {
		solution += buffer;
		var loc = normal.indexOf(buffer);
		buffer = cube_corners[loc];
	}
	return solution;
}

function findNewBuffer(array){
	// find first difference between normal and array;
	for (var i = 0; i < array.length; i++) {
		if (array[i] != normal[i]) {
			//if buffer is flipped
			if (array[i] === "c" || array[i] === "e") {
				//skip
			} else {
				//different index
				return normal[i];
			}
		}
	}
	return "no";
}
function swapPiece(i,j, array){
	var temp = array[i];
	array[i]=array[j];
	array[j]=temp;
}
function swap(loc){
	//Index buffer
	var indexLoc = 2;
	var indexLocMirror = 4;
	//Index of where the location should be
	var target = normal.indexOf(loc);
	var targetMirror = mirror.indexOf(loc);

swapPiece(indexLoc,target,cube_edges);
swapPiece(indexLocMirror,targetMirror,cube_edges);
}
function isFinished(){
	//if no difference between array and how it should be
	if(differenceIndex(cube_edges,normal)==-1){return true;}

	else{return false;}
}
function checkFlip(array){
	var flips="";
		for (var i = 0; i < array.length; i++) {
			var a  = array[i];
			var b = mirror[i];
			if(a === b && (a!=="c"&&a!=="e")){
				flips += normal[i];
				swapPiece(i,normal.indexOf(mirror[i]),cube_edges);
			}
		}
		if(flips.length%2==1){
			flips += "c";
		}
		console.log("Flips: "+flips);
}
function getEdgeSolution(){
	var solution = "";
	var shootLoc;
	var prev="";
	var prevCE="";
	checkFlip(cube_edges);
	for(var i = 0; i< 20; i++){
		shootLoc = getEdgeBufferPiece();
		if(shootLoc === "c" || shootLoc === "e" ){
			prevCE = shootLoc;
			if(prev!=""){
				if(prevCE == shootLoc);
				solution += normal[mirror.indexOf(prev)];
			}
			else{
				solution += prev;

			}
			if(isFinished()){
				return solution;
			}
			//buffer is in place
			shootLoc = findNewBuffer(cube_edges);
			swap(shootLoc);
			shootLoc = getEdgeBufferPiece();
			prev = shootLoc;
		}
		else if(prev===shootLoc || mirror[normal.indexOf(prev)] === shootLoc){
			if(isFinished()){
				return solution;
			}
		}
		solution += shootLoc;
		swap(shootLoc);
	}
	return solution;
}
