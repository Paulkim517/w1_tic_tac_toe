// wait for the DOM to finish loading
window.addEventListener("DOMContentLoaded", function() {


var input = document.getElementById("resetBtn");
var boxesChoice = document.getElementsByClassName("box")
var counter = 0

 for(i=0;i<boxesChoice.length;i++){
  boxesChoice[i].addEventListener("click", function(){
 	console.log("it works");
 	event.preventDefault();
 	
//determines whether or not greenX or blackO  	
 	if((counter % 2 === 0 )&&(this.innerText==="")){
 	this.style.backgroundColor="green";
 	this.innerText="X";
 	counter++;
 	alert("Player 2's turn!");
 	
}else if((counter % 2!== 0)&&(this.innerText==="")){
	this.style.backgroundColor="black";
  this.innerText="O";
  counter++;
  alert("Player 1's turn!");
 	
}else{
   alert("NOPE CHOOSE ANOTHER ONE!!!")
	};

});

	}

//supposed to be reset button
input.addEventListener("click", function(event) {
     for (i=0; i<boxesChoice.length; i++) { 
        boxesChoice[i].classList.remove("x");
        boxesChoice[i].classList.remove("o")
        boxesChoice[i].innerText = "";
        boxesChoice[i].style.backgroundColor = "transparent";


        count = 0;
        }
        alert("LET'S START OVER");
    });
	
});







	

