 //Backup 21-4-19 20:00
var cube_corners = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "v", "w", "x", "z"];
var cube_edges = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "v", "w", "x", "z"];
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

function switchwithBuffer(loc, locmirror) {
	var bufferindex = 2;
	var buffermirrorindex = 4;
	console.log("shoot " + cube_edges[bufferindex] + " to " + cube_edges[loc] + " and  " + cube_edges[buffermirrorindex] + " to " + cube_edges[locmirror]);
	var tempIndexSticker = cube_edges[loc];
	var tempIndexMirrorSticker = cube_edges[locmirror];
	cube_edges[loc] = cube_edges[bufferindex];
	cube_edges[locmirror] = cube_edges[buffermirrorindex]
	cube_edges[bufferindex] = tempIndexSticker;
	cube_edges[buffermirrorindex] = tempIndexMirrorSticker;
}

function getEdgeSolution() {
	var solution = "";
	var solution2 = "";
	var normal = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "v", "w", "x", "z"];
	var mirror = ["m", "i", "e", "r", "c", "l", "v", "s", "b", "p", "w", "f", "a", "u", "x", "j", "d", "h", "z", "n", "g", "k", "o", "t"];
	var scram = cube_edges;
	var buffer = getEdgeBufferPiece();
	console.log("Start " + cube_edges);
	console.log("Buffer " + buffer);
	var newBuffer = -1;
	var prevBuf = buffer;
	var prev = false;
	for (var i = 0; i < 30; i++) {
		if (buffer == "c" || buffer == "e") {
			solution = solution.slice(0, -1);
			if(prev){
				console.log("prevBuf=" + prevBuf);
				solution += prevBuf;
				prevBuf = "";
			}
			if (differenceIndex(normal, cube_edges) == -1) {
				console.log("Solution = " + solution);
				console.log("Solution2 = " + solution2);
				console.log("Early break " + cube_edges);
				return solution;
			} else {
				newBuffer = differenceIndex(normal, cube_edges);
								console.log("Shoot to new buffer: "+ newBuffer);

				prevBuf = normal[newBuffer];
				prev = true;
			}
		}
		var loc;
		var locmirror;
		if (newBuffer != -1) {
			 loc = normal.indexOf(cube_edges[newBuffer]);
			locmirror = mirror.indexOf(cube_edges[newBuffer]);
			newBuffer = -1;
		} else {
			 loc = normal.indexOf(buffer);
			locmirror = mirror.indexOf(buffer);
		}
		if (loc != 2 && loc != 4) {
			switchwithBuffer(loc, locmirror);
		}

		var b = cube_edges[2];
		normal.indexOf(cube_edges[2])



		solution += cube_edges[2];
		buffer = cube_edges[2];
	}
	console.log("End " + cube_edges);
	console.log("Solution = " + solution);
	console.log("Solution2 = " + solution2);
	return solution;
}

function getCornerSolution() {
	var solution = "";
	var normal = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "v", "w", "x", "z"];
	var buffer = getCornerBufferPiece();
	while (buffer !== "c") {
		solution += buffer;
		var loc = normal.indexOf(buffer);
		buffer = cube_corners[loc];
	}
	return solution;
}

function walkThroughPieces(buffer) {
	while (buffer !== "c") {
		solution += buffer;
		var loc = normal.indexOf(buffer);
		buffer = cube_corners[loc];
	}
}
rotate("u");
