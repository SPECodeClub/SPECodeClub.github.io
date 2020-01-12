function Index(){
	window.location.href = 'Index.html';
}

function Quiz(){
	window.location.href = 'Quiz.html';
}

function Page1(){
	window.location.href = 'Page1.html';
}
function Page2(){
	window.location.href = 'Page2.html';
}
function Page3(){
	window.location.href = 'Page3.html';
}

function Website(){
	window.location.href = 'https://specodeclub.github.io/';
}

function Website2(){
	window.location.href = 'https://specodeclub.github.io/index.html';
}


function Lessons(){
	window.location.href = 'Lessons/Lessons.html';
}

function Lessons2(){
	window.location.href = '../../Lessons.html';
}

function How_to_use_GitHub(){
	window.location.href = 'GitHub/How to use GitHub/Index.html';
}

function Scratch_basics(){
	window.location.href = 'Scratch/Scratch basics/Index.html';
}

function Microbit_basics(){
	window.location.href = 'Microbit/Microbit basics/Index.html';
}

function Python_basics(){
	window.location.href = 'Python/Python basics/Index.html';
}

function HTML_basics(){
	window.location.href = 'HTML/HTML basics/Index.html';
}

function Parts_of_a_computer(){
	window.location.href = 'Computer/Parts of a computer/Index.html';
}

function Data(){
	window.location.href = 'Computer/Data/Index.html';
}


function Tutorials(){
	window.location.href = 'Tutorials/Tutorials.html';
}

function Platform_game(){
	window.location.href = 'Scratch/Platform game/Multi-page.html';
}

function Microbit_chain(){
	window.location.href = 'Microbit/Microbit chain/Multi-page.html';
}

function Tic_tac_toe(){
	window.location.href = 'Python/Tic tac toe/Multi-page.html';
}

function Your_own_website(){
	window.location.href = 'HTML/Your own website/Multi-page.html';
}


function Aboutus(){
	window.location.href = 'About us.html';
}



function checkmicrobitbasics(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var correct = 0;


	if (question1 == "BBC") {
		correct++;
}
	if (question2 == "25") {
		correct++;
}	
	if (question3 == "Pearl") {
		correct++;
	}
	
	var pictures = ["../../../img/win.gif", "../../../img/meh.gif", "../../../img/lose.gif"];
	var messages = ["Excellent job! Keep it up!", "Good work! You can have another go and try to get a higher score.", "Nice try! Why not have another go?"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct == 3) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " out of 3 correct.";
	document.getElementById("picture").src = pictures[score];
	}
	
