$(document).ready(function(){
//adding var 
	var myQuestion =[
		{
			question: "What kind of treasure does Barbossa crew steal?", 
				answers:{ 
					A: 'A fake one',
					B: 'Lots of it',
					C: 'A bottle of rum',
					D: 'Aztec gold'
				},
			correctAnswer: "D"	
		},
		{	
			question: "Why is Jack Sparrow in port royal?", 
				answers:{
					A: 'It’s a nice place', 
					B: 'He is stuck there', 
					C: 'He is trying to steal a ship', 
					D: 'To find love',
				},
			correctAnswer: "C"	 
		},
		{	
			question:"Why is the rum gone?", 
				answers:{
					A: 'Jack Drank it All ', 
					B: 'It Got Dropped', 
					C: 'Elizabeth Started a Signal', 
					D: 'The Pirates Stole it All', 
				},	
			correctAnswer: 'C'
		},
		{
			question:"Who was Will Tuners dad?", 
				answers:{
					A: 'Jack Sparrow', 
					B: 'Bob Tuner', 
					C: 'The BlackSmith', 
					D: 'Bootstrap Bill',
				},
				correctAnswer: 'D'		
		},
		{	
			question:"What’s the fastest ship in the Caribbean?",
				answers:{
					A: 'The Interceptor', 
					B: 'The Black Peral', 
					C: 'The Titanic', 
					D: 'The Flying Dutchman', 
				},
			correctAnswer: 'B'
		},		
		{	
			question:"How many pieces of 8 are there?",
				answers:{
					A: '9', 
					B: '3', 
					C: '8',
					D: '6', 
				},
			correctAnswer: 'A'
		},
		{
			question:"Which way does Jack Sparrows campus not point?",
				answers:{
					A: 'Home', 
					B: 'North', 
					C: 'West', 
					D:'East', 
				},
			correctAnswer: 'B'
		},	
		{
			question:"What is the name of captain Barbossa monkey?",
				answers:{
					A: 'Monkey', 
					B: 'Killer', 
					C: 'Larry', 
					D: "Jack", 
				},
			correctAnswer:'D'
		}
	];
	var currentQ =0;
	var score = 0;
	var TotalQ = myQuestion.length;


//getting from html
	var container = $('#container');
	var questionEl = $('.questions');
	var opt1 = $('#opt1');
	var opt2 = $('#opt2');
	var opt3 = $('#opt3');
	var opt4 = $('#opt4');

//starting functions
	//picking random question
	//function ran(){
	//	pickedQ = myQuestion[Math.floor(Math.random()*myQuestion.length)];
	//	console.log(pickedQ);
	//}
	//showing question and answers
	

//ran();


//closing ready
});