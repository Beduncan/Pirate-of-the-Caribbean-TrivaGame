$(document).ready(function(){
//adding var
 var Correct= 0;
 var Wrong= 0;
 var NotAnswered= 0;
console.log(NotAnswered);
console.log(Correct);
console.log(Wrong);

//making timer 
var timeleft = 3;
var timerId = setInterval(countdown, 1000);
function countdown(){
	if(timeleft == -1){		
		clearInterval(timerId);
		check();
		var C = $("<div>");
        	C = ("Correct: " +Correct+"	");
			$("#container").prepend(C);
		var w = $("<div>");
			w = ("Wrong: " +Wrong+"	|	");
			$("#container").prepend(w);
		var n =$("<div>");
			n = ("Not Answered: "+NotAnswered+"	|	")
			$("#container").prepend(n);
	}
	else{
		$(".time").html(timeleft + ' Seconds Remaining');
		timeleft--;
	}
}
countdown();
function check(){
	var question1 = $("input[name='Q1']:checked").val();
		console.log(question1);
	if(question1 == 1){
		Correct++;
	}else{
		Wrong++;
	}
	var question2 = $("input[name='Q2']:checked").val();
		console.log(question2);
	if(question2 == 1){
		Correct++;
	}else{
		Wrong++;
	}
}

//closing ready
});