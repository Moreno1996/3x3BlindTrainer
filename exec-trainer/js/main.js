 function init() {
        var textbox = document.querySelector("#contents");
		var box2 = document.querySelector("#content-text");
		var scramble = getScramble(3);
            box2.innerHTML= scramble;
			convert(scramble);

        // Add click event listener
        textbox.addEventListener("click", function() {
            var box = document.querySelector("#content-text");
			var scramble = getScramble(3);
            box.innerHTML= scramble;
			convert(scramble);

        });
    }
$(document).ready(function() {init();});





	function convert(scramble){
		scramble = clean(scramble);
		console.log(scramble);
		executeScramble(scramble);
		getBlindSolution();


	}
	function clean(scramble){
		//split string to array
		var scram_s =scramble.split(" ");
		//remove empty strings
		var scram = [];
		for( var i = 0; i<scram_s.length; i++ ){
				if(scram_s[i]!=""){
				scram.push(scram_s[i]);
			}
		}

		return scram
	}
