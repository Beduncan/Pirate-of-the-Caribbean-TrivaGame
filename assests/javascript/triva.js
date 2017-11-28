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
		
		var C = $("<div>");
        	C = ("Correct:" +Correct+"	");
			$("#container").prepend(C);
		var w = $("<div>");
			w = ("Wrong:" +Wrong+"	");
			$("#container").prepend(w);
		var n =$("<div>");
		n = ("NotAnswered:"+NotAnswered+"	")
		$("#container").prepend(n);
	}
	else{
		$(".time").html(timeleft + ' Seconds Remaining');
		timeleft--;
	}
}
countdown();
function check(){
	var checker = $("").val();
	console.log(checker);

	//if(Question1 == "Aztec Gold"){
	//	Correct++;
	//}
	//else{Wrong++;}
}
check();
//closing ready
});