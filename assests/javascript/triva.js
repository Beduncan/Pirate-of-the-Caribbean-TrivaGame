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
	if(timeleft == -1){		
		clearInterval(timerId);
		check();
		//clearing questions and showing grades
		$("#content").empty();
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
	//if input checked is equal to 0 add to correct if not add to wrong array. do that for every question
	//question 1 
	var question1 = $("input[name='Q1']:checked").val();
	if(question1 == 1){
		Correct++;
	}
	else if(question1 == 2) {
		Wrong++;
	}else{
		NotAnswered++;
	}
	//  question 2
	var question2 = $("input[name='Q2']:checked").val();
	if(question2 == 1){
		Correct++;
	}
	else if(question2 == 2) {
		Wrong++;
	}else{
		NotAnswered++;
	}
	// quesion 3
	var question3 = $("input[name='Q3']:checked").val();
	if(question3 == 1){
		Correct++;
	}
	else if(question3 == 2) {
		Wrong++;
	}else{
		NotAnswered++;
	}
	//question 4
	var question4 = $("input[name='Q4']:checked").val();
	if(question4 == 1){
		Correct++;
	}
	else if(question4 == 2) {
		Wrong++;
	}else{
		NotAnswered++;
	}
	//quesion 5
	var question5 = $("input[name='Q5']:checked").val();
	if(question5 == 1){
		Correct++;
	}
	else if(question5 == 2) {
		Wrong++;
	}else{
		NotAnswered++;
	}
	//question 6
	var question6 = $("input[name='Q6']:checked").val();
	if(question6 == 1){
		Correct++;
	}
	 else if(question6 == 2) {
		Wrong++;
	}else{
		NotAnswered++;
	}
	//quesion 7
	var question7 = $("input[name='Q7']:checked").val();
	if(question7 == 1){
		Correct++;
	}
	else if(question7 == 2) {
		Wrong++;
	}else{
		NotAnswered++;
	}
	//question 8
	var question8 = $("input[name='Q8']:checked").val();
	if(question8 == 1){
		Correct++;
	}
	else if(question8 == 2) {
		Wrong++;
	}else{
		NotAnswered++;
	}
	// question 9
	var question9 = $("input[name='Q9']:checked").val();
	if(question9 == 1){
		Correct++;
	}
	else if(question9 == 2) {
		Wrong++;
	}else{
		NotAnswered++;
	}
	//question 10
	var question10 = $("input[name='Q10']:checked").val();
	if(question10 == 1){
		Correct++;
	}
	else if(question10 == 2) {
		Wrong++;
	}else{
		NotAnswered++;
	}
	// question 11
	var question11 = $("input[name='Q11']:checked").val();
	if(question11 == 1){
		Correct++;
	}
	else if(question11 == 2) {
		Wrong++;
	}else{
		NotAnswered++;
	}
	//quesion 12
	var question12 = $("input[name='Q12']:checked").val();
	if(question12 == 1){
		Correct++;
	}
	else if(question12 == 2) {
		Wrong++;
	}else{
		NotAnswered++;
	}
} 
//closing ready
});