/* ***************************
  JWD JavaScript Assessment
  This code is unfinished. You will need to study it to figure out what it does. Then you will need to use this and
  your own code, to finish the app. 
  
  The tasks you need to do are below.
    TASKS TODO:
      1. Calculate the score as the total of the number of correct answers
      2. Add an Event listener for the submit button, which will display the score and highlight 
         the correct answers when the button is clicked. Use the code from lines 67 to 86 to help you.
      3. Add 2 more questions to the app (each question must have 4 options).
      4. Reload the page when the reset button is clicked (hint: search window.location)
      5. Add a countdown timer - when the time is up, end the quiz, display the score and highlight the correct answers
*************************** */

window.addEventListener('DOMContentLoaded', () => {
    const start = document.querySelector('#start');
    start.addEventListener('click', function (e) {
      document.querySelector('#quizBlock').style.display = 'block';
      start.style.display = 'none';
    });

  //Timer to display
  function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer == 0) {
           window.alert("Time is up. Please Refresh the page");
           document.getElementById("time").style.visibility="hidden";
           document.getElementById("timeLabel").style.visibility="hidden";
           
        
        }
    }, 1000);
}

window.onload = function () {
    var oneMinute = 60,
        display = document.querySelector('#time');
    startTimer(oneMinute, display);
};

    // quizArray QUESTIONS & ANSWERS
    // q = QUESTION, o = OPTIONS, a = CORRECT ANSWER
    // Basic ideas from https://code-boxx.com/simple-javascript-quiz/
    const quizArray = [
      {
        q: 'Which is the third planet from the sun?',
        o: ['Saturn', 'Earth', 'Pluto', 'Mars'],
        a: 1, // array index 1 - so Earth is the correct answer here
      },
      {
        q: 'Which is the largest ocean on Earth?',
        o: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
        a: 3,
      },
      {
        q: 'What is the capital of Australia',
        o: ['Sydney', 'Canberra', 'Melbourne', 'Perth'],
        a: 1,
      },
      {
        q: 'Who is the director of the movie, The Dark Knight',
        o: ['Tom Hanks', 'Chris Nolan', 'Spielberg', 'James Cameron'],
        a: 1,
      },
      {
        q: 'What is the largest mammal?',
        o: ['Rhino', 'Elephant', 'Tiger', 'Blue Whale'],
        a: 3,
      },
    ];

  
    // function to Display the quiz questions and answers from the object
    const displayQuiz = () => {
      const quizWrap = document.querySelector('#quizWrap');
      let quizDisplay = '';
      quizArray.map((quizItem, index) => {
        quizDisplay += `<ul class="list-group">
                     Q - ${quizItem.q}
                      <li class="list-group-item mt-2" id="li_${index}_0"><input type="radio" name="radio${index}" id="radio_${index}_0"> ${quizItem.o[0]}</li>
                      <li class="list-group-item" id="li_${index}_1"><input type="radio" name="radio${index}" id="radio_${index}_1"> ${quizItem.o[1]}</li>
                      <li class="list-group-item"  id="li_${index}_2"><input type="radio" name="radio${index}" id="radio_${index}_2"> ${quizItem.o[2]}</li>
                      <li class="list-group-item"  id="li_${index}_3"><input type="radio" name="radio${index}" id="radio_${index}_3"> ${quizItem.o[3]}</li>
                      </ul>
                      <div>&nbsp;</div>`;
        
    
      });
      quizWrap.innerHTML = quizDisplay;
    };
   

    //Event listener for the submit button
    const btn = document.getElementById('btnSubmit');
    btn.addEventListener('click', function(event){
    const totalScore = calculateScore();
    console.log('Button Clicked');
    console.log('Total Score'+totalScore);
    document.getElementById("time").style.visibility="hidden";
    document.getElementById("timeLabel").style.visibility="hidden";
    
    });

    // Calculate the score
    const calculateScore = () => {
      let score = 0;
    
      quizArray.map((quizItem, index) => {
        for (let i = 0; i < 5; i++) {
          //highlight the li if it is the correct answer
          let li = `li_${index}_${i}`;
          let r = `radio_${index}_${i}`;
          liElement = document.querySelector('#' + li);
          radioElement = document.querySelector('#' + r);
          if (i==0 && r.valueOf === "radio_0_1")
          {
            score++;
          }
            
          if (i==1 && r === "radio_1_3")
          {
            score++;
          }
            
          if (i==2 && r === "radio_2_1")
          {
            score++;
          }
            
          if (i==3 && r === "radio_3_1")
          {
            score++;
          }
          if (i==4 && r === "radio_4_3")
          {
            score++;
          }
            
        
          console.log('Value of Radio Element ' ,r);
          console.log('Score In Loop ',score);
  
          if (quizItem.a == i) {
            //change background color of li element here
            
          }
  
          if (radioElement.checked) {
            // code for task 1 goes here
          }
        }
      });
      return score;
    };
  
    // call the displayQuiz function
    displayQuiz();
    console.log("Score="+score);
  });
