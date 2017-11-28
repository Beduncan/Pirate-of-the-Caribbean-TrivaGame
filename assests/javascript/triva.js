$(document).ready(function(){
//adding var
var Correct = 0
var Wrong = 0
var NotAnswered = 0 
console.log(Correct);
console.log(Wrong);

//making timer 
var timeleft = 3;
var timerId = setInterval(countdown, 1000);
function countdown(){
	if(timeleft == -1){
		clearInterval(timerId);
		check();
	}
	else{
		$(".time").html(timeleft + ' Seconds Remaining');
		timeleft--;
	}
}
countdown();
function check(){
	var Question1 = document.getElementsByTagName('Q1');
	console.log(Question1);

	if(Question1 == "Aztec Gold"){
		Correct++;
	}
	else{Wrong++;}


}
//closing ready
});