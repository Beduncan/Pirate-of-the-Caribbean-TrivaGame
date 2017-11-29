$(document).ready(function(){
//adding var
 var Correct= 0;
 var Wrong= 0;
 var NotAnswered= 0;
console.log(NotAnswered);
console.log(Correct);
console.log(Wrong);
//making timer
//time left 
var timeleft = 60;
var timerId = setInterval(countdown, 1000);
function countdown(){
	//what happen when timer hits 0 
	if(timeleft == 0){		
		clearInterval(timerId);
		check();
		//clearing questions and showing grades
		$(".time").empty();
			var done = "All Done!!"
			$(".done").append(done);
		   	var C = ("Correct: " +Correct);
			$(".correct").append(C);
			var w = ("Wrong: " +Wrong);
			$(".wrong").append(w);
			var n = ("Not Answered: "+NotAnswered)
			$(".na").append(n);
	}
	//if not keep going don by 1
	else{
		$(".time").html("time left: " +timeleft);
		timeleft--;
	}
}
countdown();
//checking if answer is right wrong or not answered 
function check(){
	//if input checked is equal to 0 add to correct if not add to wrong mde that fo every question
	var question1 = $("input[name='Q1']:checked").val();
	if(question1 == 1){
		Correct++;
	}
	if(question1 == 2) {
		Wrong++;
	}else{
		NotAnswered++;
	}
	var question2 = $("input[name='Q2']:checked").val();
	if(question2 == 1){
		Correct++;
	}
	if(question2 == 2) {
		Wrong++;
	}else{
		NotAnswered++;
	}
	var question3 = $("input[name='Q3']:checked").val();
	if(question3 == 1){
		Correct++;
	}
	if(question3 == 2) {
		Wrong++;
	}else{
		NotAnswered++;
	}
	var question4 = $("input[name='Q4']:checked").val();
	if(question4 == 1){
		Correct++;
	}if(question4 == 2) {
		Wrong++;
	}else{
		NotAnswered++;
	}
	var question5 = $("input[name='Q5']:checked").val();
	if(question5 == 1){
		Correct++;
	}
	if(question5 == 2) {
		Wrong++;
	}else{
		NotAnswered++;
	}
	var question6 = $("input[name='Q6']:checked").val();
	if(question6 == 1){
		Correct++;
	}
	if(question6 == 2) {
		Wrong++;
	}else{
		NotAnswered++;
	}
	var question7 = $("input[name='Q7']:checked").val();
	if(question7 == 1){
		Correct++;
	}
	if(question7 == 2) {
		Wrong++;
	}else{
		NotAnswered++;
	}
	var question8 = $("input[name='Q8']:checked").val();
	if(question8 == 1){
		Correct++;
	}
	if(question8 == 2) {
		Wrong++;
	}else{
		NotAnswered++;
	}
} 
//closing ready
});