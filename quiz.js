let score = 0; // set score to zero

// question 1 and answers
function question1() {
    document.getElementById("start").style.display = "none";
    document.getElementById("question").innerHTML = "1. What does CSS stand for?";
    document.getElementById("answer1").innerHTML = "<input type='radio' id='q1_a1' name='answer'>Cascading CSS";
    document.getElementById("answer2").innerHTML = "<input type='radio' id='q1_a2' name='answer'>Cascading Style Sheet";
    document.getElementById("answer3").innerHTML = "<input type='radio' id='q1_a3' name='answer'>Cascading Seperate Sheet";
    // display next button
    document.getElementById("next").innerHTML = "<input type='button' onclick='question1_answer()' value='Next'>";
} // end of question1()

// question 2 and answers
function question2() {
    document.getElementById("question").innerHTML = "2. Which attribute can set text to bold?";
    document.getElementById("answer1").innerHTML = "<input type='radio' id='q2_a1' name='answer'>Text-deocoration";
    document.getElementById("answer2").innerHTML = "<input type='radio' id='q2_a2' name='answer'>Font style";
    document.getElementById("answer3").innerHTML = "<input type='radio' id='q2_a3' name='answer'>Font weight";
    // display next button
    document.getElementById("next").innerHTML = "<input type='button' onclick='question2_answer()' value='Next'>";
 } // end of question2()
 
 // question 3 and answers
 function question3() {
    document.getElementById("question").innerHTML = "3.Which tag is used to link an external CSS file?";
    document.getElementById("answer1").innerHTML = "<input type='radio' id='q3_a1' name='answer'>Script";
    document.getElementById("answer2").innerHTML = "<input type='radio' id='q3_a2' name='answer'>Link";
    document.getElementById("answer3").innerHTML = "<input type='radio' id='q3_a3' name='answer'>Rel";
    // display next button
    document.getElementById("next").innerHTML = "<input type='button' onclick='question3_answer()' value='Next'>";
 } // end of question3()
 
 // question 4 and answers
 function question4() {
    document.getElementById("question").innerHTML = "4.Which attribute sets the underline property?";
    document.getElementById("answer1").innerHTML = "<input type='radio' id='q4_a1' name='answer'>Font style";
    document.getElementById("answer2").innerHTML = "<input type='radio' id='q4_a2' name='answer'>Text-decoration";
    document.getElementById("answer3").innerHTML = "<input type='radio' id='q4_a3' name='answer'>Font weight";
    // display next button
    document.getElementById("next").innerHTML = "<input type='button' onclick='question4_answer()' value='Next'>";
 } // end of question4()
 
 // question 5 and answers
 function question5() {
    document.getElementById("question").innerHTML = "5. Which measurement unit is NOT relative?";
    document.getElementById("answer1").innerHTML = "<input type='radio' id='q5_a1' name='answer'>Px";
    document.getElementById("answer2").innerHTML = "<input type='radio' id='q5_a2' name='answer'>Cm";
    document.getElementById("answer3").innerHTML = "<input type='radio' id='q5_a3' name='answer'>%";
    document.getElementById("answer4").innerHTML = "<input type='radio' id='q5_a4' name='answer'>Em";
    // display next button
   document.getElementById("next").innerHTML = "<input type='button' onclick='question5_answer()' value='Next'>";
 } // end of question5()
 
 
// check for correct answer 
function question1_answer() {
    if (document.getElementById("q1_a2").checked) {
       alert("Awesome! \nYou're correct!");
       score = score + 1;
       question2();
    }
    else {
       alert("Sorry, is incorrect!");
       question2();
    }
} // end of question1_answer()

// check for correct answer 
function question2_answer() {
    if (document.getElementById("q2_a3").checked) {
       alert("Awesome! \nYou're correct!");
       score = score + 1;
       question3();
       
    }
    else {
       alert("Sorry, is incorrect!");
       question3();
    }
} // end of question2_answer()

// check for correct answer 
function question3_answer() {
    if (document.getElementById("q3_a2").checked) {
       alert("Awesome! \nYou're correct!");
       score = score + 1;
       question4();
    }
    else {
       alert("Sorry, is incorrect!");
       question4();
    }
} // end of question3_answer()

// check for correct answer 
function question4_answer() {
    if (document.getElementById("q4_a2").checked) {
       alert("Awesome! \nYou're correct!");
       score = score + 1;
       question5();
    }
    else {
       alert("Sorry, is incorrect!");
       question5();
    }
} // end of question4_answer()

// check for correct answer 
function question5_answer() {
    if (document.getElementById("q5_a2").checked) {
       alert("Awesome! \nYou're correct!");
       score = score + 1;
       totalScore();
    }
    else {
       alert("Sorry, is incorrect!");
       totalScore();
    }
} // end of question5_answer()


function totalScore() {	
	question.style.display = "none";
	answer1.style.display = "none";
	answer2.style.display = "none";
	answer3.style.display = "none";
	answer4.style.display = "none";
	
	document.getElementById("score").innerHTML = "Your score is: "+ score +" /5 !";
	
	var button = document.getElementById("next");
    button.style.display="none";  
    
	var message ="";
	if (score >=2) {
  	document.images["message"].src = "images/welldone.jpg" ;
  	document.getElementById("img").innerHTML = "<span style='color:green'>Awesome, well done!!!</span>";
      document.getElementById("next").innerHTML = "<input type='button' onclick='question10_answer()' value='Next'>";
	} //end of if
	else  {
  	document.images["message"].src = "images/tryharder.jpg";
  	document.getElementById("img").innerHTML = "<span style='color:red'>Bad Luck...</span>";
      document.getElementById("next").innerHTML = "<input type='button' onclick='question10_answer()' value='Next'>";
  	}
} // end of function