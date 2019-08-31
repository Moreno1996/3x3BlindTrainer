 function init() {
  newScramble();


 }
 $(document).ready(function() {
   init();
 });


function newScramble(){
  var box = document.querySelector("#content-text");
  var scramble = getScramble(0);
  box.innerHTML = scramble;
  convert(scramble);
}


 function convert(scramble) {
   //scramble ="B F";
   scramble = clean(scramble);
   console.log(scramble);
   executeScramble(scramble);
   var edge = document.querySelector("#edges");
  edge.innerHTML = getEdgeSolution();
  var corner = document.querySelector("#corners");
 corner.innerHTML =getCornerSolution();
   drawCube();

 }

 function clean(scramble) {
   //split string to array
   var scram_s = scramble.split(" ");
   //remove empty strings
   var scram = [];
   for (var i = 0; i < scram_s.length; i++) {
     if (scram_s[i] != "") {
       scram.push(scram_s[i]);
     }
   }

   return scram;
 }

 var cube_letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "v", "w", "x", "z"];
 var backup = ["u", "g", "i", "z", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "v", "w", "x", "z"];

 function drawCube() {
   var c = document.getElementById("canvas");
   var ctx = c.getContext("2d");
   var size = Math.min(c.width / 12, c.height / 9);
   drawCenters(ctx, size);
   drawCorners(ctx, size);
   drawEdges(ctx, size);



 }

 function drawEdges(ctx, size) {
   var colors = getCubeColor(getCubeEdges());
   //TOP FACE
   ctx.strokeStyle = "#141414";
   for (var i = 0; i < backup.length; i++) {
     ctx.fillStyle = colors[i];
     var x = i%4;
     var y = Math.floor(i/4);
     var z = (y == 0)? 1 : y % 4 ;
     var z2 = Math.ceil((y%5)/5)+Math.floor(y/5)*2;
     if (i%4== 2) {
       ctx.fillRect(z * 3 * size + size, z2 *3* size +size * (Math.floor(x / 3) + x % 3), size, size);
       ctx.strokeRect(z * 3 * size + size, z2 *3* size +size * (Math.floor(x / 3) +x % 3), size, size);

     } else {
       ctx.fillRect(z * 3 * size + ((x + 1) % 4) * size, z2 *3* size +size * (Math.floor(x / 3) + x % 3), size, size);
       ctx.strokeRect(z * 3 * size + ((x + 1) % 4) * size, z2 *3* size +size * (Math.floor(x / 3) + x % 3), size, size);

     }
   }
  }


 function drawCorners(ctx, size) {
   var colors = getCubeColor(getCubeCorners());
   ctx.strokeStyle = "#141414";
   for (var i = 0; i < 24; i++) {
     var x = i%4;
     var y = Math.floor(i/4);
     var z = (y == 0)? 1 : y % 4 ;
     var z2 = Math.ceil((y%5)/5)+Math.floor(y/5)*2;
     ctx.fillStyle = colors[i];
     ctx.fillRect(z*3 * size + 2 * size * Math.ceil((x % 3) / 3), 3*z2*size +2 * size * Math.floor(x / 2), size, size);
     ctx.strokeRect(z*3 * size + 2 * size * Math.ceil((x % 3) / 3), 3*z2*size +2 * size * Math.floor(x / 2), size, size);

   }
 }
 function drawCenters(ctx, size) {
   ctx.strokeStyle = "#141414";
   ctx.fillStyle = "white";
   ctx.fillRect(4*size,1*size, size, size);
   ctx.strokeRect(4*size,1*size, size, size);
   ctx.fillStyle = "green";
   ctx.fillRect(4*size,4*size, size, size);
   ctx.strokeRect(4*size,4*size, size, size);
   ctx.fillStyle = "red";
   ctx.fillRect(7*size,4*size, size, size);
   ctx.strokeRect(7*size,4*size, size, size);
   ctx.fillStyle = "blue";
   ctx.fillRect(10*size,4*size, size, size);
   ctx.strokeRect(10*size,4*size, size, size);
   ctx.fillStyle = "orange";
   ctx.fillRect(1*size,4*size, size, size);
   ctx.strokeRect(1*size,4*size, size, size);
   ctx.fillStyle = "yellow";
   ctx.fillRect(4*size,7*size, size, size);
   ctx.strokeRect(4*size,7*size, size, size);
   }
