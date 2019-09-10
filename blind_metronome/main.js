
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "V", "W", "X", "Z"];

var bpm_prev="";

function generate(){
  console.log("generate");
  var letter = letters[Math.floor(Math.random()*letters.length)];
  var output = document.getElementById("output");



if(document.getElementById("checkbox").checked){
   var letter2 = letters[Math.floor(Math.random()*letters.length)];
   output.textContent = letter + "" + letter2;
}
else{
  output.textContent = letter;

}

  var bpm = parseInt(document.getElementById("BPM").value);
  if(bpm>0){
    bpm_prev = bpm;
    setTimeout(function() { generate(); }, 60000/bpm);
  }
  else{
    setTimeout(function() { check(); }, 5000);
  }
}
function check(){
  console.log("check");
  var val = document.getElementById("BPM").value
  if(bpm_prev!=val){
    console.log(bpm_prev + " != " + parseInt(val));
    generate();
  }
  else{
    setTimeout(function() { check(); }, 5000);
  }

}


  check();
