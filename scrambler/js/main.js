 function init() {
        var textbox = document.querySelector("#contents");
		var box2 = document.querySelector("#content-text");
		box2.innerHTML= getScramble(2);

        // Add click event listener
        textbox.addEventListener("click", function() {
            var box = document.querySelector("#content-text");
            box.innerHTML= getScramble(2);


        });
    }
$(document).ready(function() {init();});
	