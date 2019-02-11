console.log("We have 3 cups and 1 ball. Your job will be to guess which cup the ball is in using the numbers 1, 2 or 3.")
var userInput1 = prompt ("Are you ready??", "Y or N?")
//prompt for user to input Y or N

function userReady(){
var answerY = "Y";
var answerN = "N";
var answerStay = "stay";
var answerGo = "go";
var userWhatever = "";

if (userInput1 == answerY){
  console.log("OK! The ball begins in cup 2, we shuffle once, twice, one million times. Where is the ball??")
//now user prompt to function userGuess 
} else if {(userInput1 == answerN){
  console.log("Then why are you here? Actually... Why are any of us here? What are we doing? What balls?... In the grand scheme of space and time what balls even matter? Should we stay or should we go now, amiright? Stay or Go?")
  //open up new user prompt
} else if {(userInput1 == answerStay){
  console.log("ALRIGHT! Let's do this!")
  return answerY;
  //not sure if this would work
  //return to guess
} else if {(userInput1 == answerGo){
  console.log("It's fine. I get it. I'll be okay. It only took me like... way too long to make this, but yeah, enjoy instagram.")
} else {(typeof userWhatever){
  console.log(userWhatever += " does not compute, my dude. Maybe refresh or kick rocks?")}
        }
      }
    }
  }
};

//try out a function?
function userGuess() {
var arrayCups = ["Cup 1", "Cup 2", "Cup 3"];
var hiddenBall = arrayCups[Math.floor(Math.random()*arrayCups.length)]; 
var userInput2 = "";
var outputFinal;
  
  //prompt for user input goes here
  
if (userInput2 == hiddenBall){
  console.log(userInput2 += " is correct!! You win!");
} else if {(userInput2 != hiddenBall){
  console.log(userInput2 += " is noooot correct. Sorry bud. Try Again?");
  }
};
  
// ^eventually turn into a user prompt
