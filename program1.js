let userScore=0 ;
let compScore=0;
let mymsg = document.querySelector("#msg")

let choices = document.querySelectorAll(".choice");
let userparaScore = document.querySelector("#user-score");
let compparaScore = document.querySelector("#comp-score");
console.log(choices);

choices.forEach((choice) => {
  choice.addEventListener("click", callChoice = () => {
    const userChoice = choice.getAttribute("id");
    console.log("user Choice=", userChoice);
    playGame(userChoice);

  });
});

const gencompChoice = () => {
  const opts = ["scissor", "rock", "paper"];
  const rndidx = Math.floor(Math.random() * 3);
  let x = opts[rndidx];
  return x;
};
const compChoice = gencompChoice();
const playGame = (userChoice) => {
  const compChoice = gencompChoice();
  console.log("computer choice=", compChoice)
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //paper,scissor
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock,scissor
      userWin = compChoice === "scissor" ? false : true;
    } else {
      //rock,paper
      userWin = compChoice === "paper" ? true : false;
    }
    console.log(userWin);
    showWinner(userWin, userChoice, compChoice) 
  }

};
const drawGame = () => {
  mymsg.innerText = "game was Draw";
  mymsg.style.backgroundColor = "black"
};

const showWinner = (userWin,userChoice,compChoice) => {
  if (userWin) {
    
    userScore++;
    mymsg.innerText = `you win!your ${userChoice} beats ${compChoice}`;
    mymsg.style.backgroundColor = "green";
    userparaScore.innerText = userScore;

  } else {
    compScore++;
    mymsg.innerText = `you lost! ${compChoice} beats ${userChoice}`;
    mymsg.style.backgroundColor = "red";
    compparaScore.innerText = compScore;
  };
};
