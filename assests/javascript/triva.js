$(document).ready(function(){});
//adding var 
	var questions =[
		{
			'question': "What kind of treasure does Barbossa crew steal?", 
					'option1': 'A fake one',
					'option2': 'Lots of it',
					'option3': 'A bottle of rum',
					'option4': 'Aztec gold',
			'correctAnswer': "4"	
		},
		{	
			'question': "Why is Jack Sparrow in port royal?",
					'option1': 'It is a nice place', 
					'option2': 'He is stuck there', 
					'option3': 'He is trying to steal a ship', 
					'option4': 'To find love',
			'correctAnswer': "3"	 
		},
		{	
			'question':"Why is the rum gone?", 
					'option1': 'Jack Drank it All ', 
					'option2': 'It Got Dropped', 
					'option3': 'Elizabeth Started a Signal', 
					'option4': 'The Pirates Stole it All', 
			'correctAnswer': '3'
		},
		{
			'question':"Who was Will Tuners dad?", 
					'option1': 'Jack Sparrow', 
					'option2': 'Bob Tuner', 
					'option3': 'The BlackSmith', 
					'option4': 'Bootstrap Bill',
				'correctAnswer': '4'		
		},
		{	
			'question':"What’s the fastest ship in the Caribbean?",
					'option1': 'The Interceptor', 
					'option2': 'The Black Peral', 
					'option3': 'The Titanic', 
					'option4': 'The Flying Dutchman', 
			'correctAnswer': '2'
		},		
		{	
			'question':"How many pieces of 8 are there?",
					'option1': '9', 
					'option2': '3', 
					'option3': '8',
					'option4': '6', 
			'correctAnswer': '1'
		},
		{
			'question' :"Which way does Jack Sparrows campus not point?",
					'option1': 'Home', 
					'option2': 'North', 
					'option3': 'West', 
					'option4':'East', 
			'correctAnswer': '2'
		},	
		{
			'question':"What is the name of captain Barbossa monkey?",
					'option1': 'Monkey', 
					'option2': 'Killer', 
					'option3': 'Larry', 
					'option4': "Jack", 
			'correctAnswer':'4'
		}
	];
	var currentQ =0;
	var score = 0;
	var TotalQ = questions.length;

//getting from html
	var container = $('#container');
	var questionEl = $('.questions');
	var opt1 = $('#opt1');
	var opt2 = $('#opt2');
	var opt3 = $('#opt3');
	var opt4 = $('#opt4');

//starting functions
function loadquestion(questionIndex){
	var q = questions[questionIndex];
	questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;

	}
		
loadquestion();

//closing ready
