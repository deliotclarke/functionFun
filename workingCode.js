function userReady(){
 
  alert("We have 3 cups and 1 ball. Your job will be to guess which cup the ball is in using the numbers 1, 2 or 3.");
  let userReady = prompt ("Are you ready??", "Y or N?");
  if (userReady.toLowerCase()  === 'y'){
    alert("Alright! Let's do this!!");
    userGuess();
  } else if (userReady.toLowerCase() === 'n'){
    let userStay = prompt("Then why are you here? Actually... Why are any of us here? What are we doing? What balls?... In the grand scheme of space and time what balls even matter? Should we stay or should we go now, amiright?", "Stay or Go?");
      if (userStay.toLowerCase() === 'stay'){
        alert("Alright! Let's do this!!");
        userGuess();
      } else if (userStay.toLowerCase() === 'go'){
        alert("It's fine. I get it. I'll be okay. It only took me like... way too long to make this, but yeah, enjoy instagram.");
      } else {
        alert(userStay + " does not compute, my dude. Maybe refresh or kick rocks?")
      }
  } else {
    alert(userReady +  " does not compute, my dude. Maybe refresh or kick rocks?")
  }  
}

function userGuess() {
  const hiddenBall = Math.floor(Math.random()*3) + 1;
  let userGuess = prompt("The ball starts in cup 2, we shuffle once, twice, one million times. What position in the cup in now??","1, 2 or 3?");
  if (parseInt(userGuess) === hiddenBall){
    let tryAgain = prompt("YUP! You got it, homie! Try again?", "Y or N?");
    if (tryAgain.toLowerCase() === 'y'){
      alert("Sick!");
      userGuess();
    } else if (tryAgain.toLowerCase() === 'n') {
      alert("Alright! Thanks for playing!");
    } else {
      alert("I have no idea what you're saying... Maybe refresh or roll?");
    }
  } else if (parseInt(userGuess) !== hiddenBall){
    let tryAgain2 = prompt("NOPE! Sorry, my dude. Try again??");
    if (tryAgain2.toLowerCase() === 'y'){
      alert("Sick!");
      userGuess();
    } else if (tryAgain2.toLowerCase() === 'n') {
      alert("Alright! Thanks for playing!");
    } else {
      alert("I have no idea what you're saying... Maybe refresh or roll?");
    }
  }
}
userReady();
