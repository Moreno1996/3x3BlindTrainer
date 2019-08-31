//corner letters

var cube_edges = 				["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "v", "w", "x", "z"];
var solution_edges = 		["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "v", "w", "x", "z"];
var mirror_edges = 			["m", "i", "e", "r", "c", "l", "v", "s", "b", "p", "w", "f", "a", "u", "x", "j", "d", "h", "z", "n", "g", "k", "o", "t"];
var normal =            ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "v", "w", "x", "z"];
var cube_corners = 			["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "v", "w", "x", "z"];
var solution_corners = 	["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "v", "w", "x", "z"];
var cw_corners =				["r", "m", "i", "e", "s", "c", "l", "v", "f", "b", "p", "w", "j", "a", "u", "x", "n", "d", "h", "z", "t", "g", "k", "o"];

//corners cycles
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
  [1, 15, 21, 5],
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

//Returns the color of a given piece
function getColor(piece) {
  var color = "";
  switch (piece) {
    case "a":
    case "b":
    case "c":
    case "d":
      color = "white";
      break;
    case "e":
    case "f":
    case "g":
    case "h":
      color = "green";
      break;
    case "i":
    case "j":
    case "k":
    case "l":
      color = "red";
      break;
    case "m":
    case "n":
    case "o":
    case "p":
      color = "blue";
      break;
    case "r":
    case "s":
    case "t":
    case "u":
      color = "orange";
      break;
    case "v":
    case "w":
    case "x":
    case "z":
      color = "yellow";
      break;

    default:
      color = "unkown";
  }
  return color;
}

//returns an array of colors for each piece.
function getCubeColor(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push(getColor(array[i]));
  }
  return newArray;

}
function cleanSolution(solution){
    solution = solution.toUpperCase();
    solution = solution.replace(/(\w{2})/g, '$1 ');
    return solution;
  }
//rotate the pieces, given a certain move;
function doMove(move) {
  switch (move) {
    case "F":
      rotatePieces(fc, fe);
      break;
    case "B":
      rotatePieces(bc, be);
      break;
    case "R":
      rotatePieces(rc, re);
      break;
    case "L":
      rotatePieces(lc, le);
      break;
    case "U":
      rotatePieces(uc, ue);
      break;
    case "D":
      rotatePieces(dc, de);
      break;
  }
}
//rotate the individual pieces of given corner and edge cycles
function rotatePieces(corners, edges) {
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
//given an array of moves, execute all moves in order.
function executeScramble(array) {
	cube_corners = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "v", "w", "x", "z"];
	cube_edges = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "v", "w", "x", "z"];

  for (var i = 0; i < array.length; i++) {

    var move = array[i];
    var single_move = move.charAt(0);
    if (move.length == 1) {
      doMove(single_move);
    } else if (move.charAt(1) == 2) {
      doMove(single_move);
      doMove(single_move);
    } else {
      doMove(single_move);
      doMove(single_move);
      doMove(single_move);
    }
  }
}
//returns the cube corner letters.
function getCubeCorners() {
  return cube_corners;
}
//returns the cube edge letters.
function getCubeEdges() {
  return cube_edges;
}
//returns the blind solution of the cube
function getBlindSolution() {
}

function getEdgeBuffer() {
  return solution_edges[2];
}

function getCornerBuffer() {
  return solution_corners[0];
}

function edgesSolved() {
  if (JSON.stringify(solution_edges) === JSON.stringify(normal)) {
    return true;
  }
  return false;
}
function cornersSolved() {
  if (JSON.stringify(solution_corners) === JSON.stringify(normal)) {
    return true;
  }
  return false;
}
	function getCornerSolution(){
    var cCycles = 0;
	var result = "";
  solution_corners = [...cube_corners];
  var i = 0;
  //First get Twists
  var twists = getTwists();
  var newCycle = "";
  //Then solve rest of the cube
  while (i < 30 && !cornersSolved()) {
    var piece = getCornerBuffer();

    i++;
    if(piece==newCycle || piece == normal[cw_corners.indexOf(newCycle)] || piece == normal[cw_corners.indexOf(normal[cw_corners.indexOf(newCycle)])]){
      cCycles++;
console.log("New Cycle done: " + newCycle + " and wrong corners " + countWrongCorners());
    if(countWrongCorners()==3){
      twistPiece("a",true);
      if(cornersSolved()){
        break;
      }
      twistPiece("a",true);
      if(cornersSolved()){
        break;
      }
      else{
        console.log("error");
      }
    }


    }
    if (piece == "a" || piece == "n" ||piece == "r") {
      var piece = findWrongCorner();
      newCycle = piece;
			if(piece=="NONE"){
				twistPiece("a",true);
				if(cornersSolved()){
					break;
				}
				twistPiece("a",true);
				if(cornersSolved()){
					break;
				}
			}
		}
      result += piece;
      swapCorner(piece);


    //swap piece with location it belongs;

  }
  result = cleanSolution(result);
   if(twists.length>0){
   result += "("+cleanSolution(twists)+")";
   }
   console.log("Corner cycles: " +cCycles);
  return result;
}

function getTwists(){
	var twists = ""
	for(var i = 0; i< solution_corners.length; i++){
    var piece = solution_corners[i];
		if(piece==cw_corners[i] && !(piece == "a" || piece == "n" ||piece == "r")){
			twists += piece + "";
			twistPiece(piece,false);
		}
	}
	for(var i = 0; i< solution_corners.length; i++){
    var piece = solution_corners[i];
		if(piece==normal[cw_corners.indexOf(normal[i])] && !(piece == "a" || piece == "n" ||piece == "r")){
			twists += piece + "\'";
			twistPiece(piece,true);
		}
	}


	return twists;
}
function twistPiece(piece,CW){

	var temp = normal.indexOf(piece);
	var a= cw_corners.indexOf(piece);
  var b1 = normal[a];
	var b = cw_corners.indexOf(b1);
if(CW){
	swapSingleCorner(temp,a);
	swapSingleCorner(temp,b);
	}
else{
		swapSingleCorner(temp,b);
		swapSingleCorner(temp,a);
		}


}

function swapCorner(piece) {
  var a = normal.indexOf(piece);
	swapSingleCorner(0,a)
  //swap mirror piece with location it belongs;
  a = normal.indexOf(cw_corners[a]);
	swapSingleCorner(16,a);

	 a = normal.indexOf(cw_corners[a]);
	swapSingleCorner(13,a);


}
function swapSingleCorner(a,b){
	var temp = solution_corners[a];
  solution_corners[a] = solution_corners[b];
  solution_corners[b] = temp;
}
function findWrongCorner() {
  for (var i = 0; i < normal.length; i++) {
    if (normal[i] != solution_corners[i]) {
			if(normal[i]!="a" && normal[i]!="n"&& normal[i]!="r"){
      return normal[i];

    }
  }
}
  return "NONE";

}
function countWrongCorners() {
  var count = 0;
  for (var i = 0; i < normal.length; i++) {
    if (normal[i] != solution_corners[i]) {
      count ++;

  }
}
  return count;

}


function getEdgeSolution() {
  var result = "";
  var eCycles =0;
  solution_edges = [...cube_edges];
  var i = 0;
  //First get Flips
   var flips = getFlips();
  //Then solve rest of the cube
  while (i < 30 && !edgesSolved()) {
    var piece = getEdgeBuffer();
    i++;
    if (piece == "c" || piece == "e") {
      var piece = findWrongEdge();
			if(piece=="NONE"){
				flipPiece("c");
				if(edgesSolved()){
					break;
				}
			}
      eCycles ++;
		}
      result += piece;
      swapEdge(piece);


    //swap piece with location it belongs;

  }
  result = cleanSolution(result);
  if(flips.length>0){
  result += "("+cleanSolution(flips)+")";
  }
  console.log("Edge cycles:" + eCycles);
  return result;
}

function getFlips(){
	var flips = ""
	for(var i = 0; i< solution_edges.length; i++){
		if(solution_edges[i]==mirror_edges[i]){
			flips += solution_edges[i];
			flipPiece(solution_edges[i]);

		}
	}

	return flips;
}

function flipPiece(temp){
	var i = mirror_edges.indexOf(temp);
	var mir_i = normal.indexOf(temp)
	swapSingleEdge(i,mir_i);
}
function swapEdge(piece) {
  var a = normal.indexOf(piece);
	swapSingleEdge(2,a)
  //swap mirror piece with location it belongs;
  var a_mir = mirror_edges.indexOf(piece);
	swapSingleEdge(4,a_mir);


}
function swapSingleEdge(a,b){
	var temp = solution_edges[a];
  solution_edges[a] = solution_edges[b];
  solution_edges[b] = temp;
}
function findWrongEdge() {
  for (var i = 0; i < normal.length; i++) {
    if (normal[i] != solution_edges[i]) {
			if(normal[i]!="c" && normal[i]!="e"){
      return normal[i];

    }
  }
}
  return "NONE";

}
