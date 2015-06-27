// wait for the DOM to finish loading
window.addEventListener("DOMContentLoaded", function() {
  // all code goes here



 var boxesChoice = document.getElementsByClassName("box")

var counter = 0

 for(i=0;i<boxesChoice.length;i++){
  boxesChoice[i].addEventListener("click", function(){
 	console.log("it works");
 	event.preventDefault();
 	
  if(){


  }else{
  	
 	if(counter % 2 == 0){
 	this.style.backgroundColor="green";
 	this.innerText="X";
 	console.log("it's even")
}else{
	this.style.backgroundColor="black";
  this.innerText="O";
 	console.log("it's odd");
};}

counter++;

 	});


}

});



	

