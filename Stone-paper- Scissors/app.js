let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userPoints= document.querySelector("#user-score");
const compPoints = document.querySelector("#comp-score");

const drawGame = () => {
    console.log();
    msg.innerText = "Game was draw."
}
const showWinner = (userWin,userChoice, compChoice)=> {
    if(userWin){
        msg.innerText =`Your ${userChoice} beats computer's ${compChoice}  `;
        msg.style.backgroundColor = "green";
        userScore++;
        userPoints.innerText = userScore;
    } else {
        msg.innerText=`You lose! computers ${compChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor = "red";
        compScore++;
        compPoints.innerText = compScore;
    }
}

const getCompChoice = () =>{
    const options = ["rock", "paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const playGame = (userChoice) =>{
    console.log("You choose: ", {userChoice});
    
    const compChoice = getCompChoice();
    console.log("Computer choose: " , {compChoice});
    
    if(userChoice === compChoice){
        drawGame();
        msg.style.backgroundColor= "#081b31"
    }
    else {
        let userWin  = true;
        if(userChoice === "rock"){
            //com-- paper, scissors
            userWin = compChoice === "paper"? false : true;
        } else if(userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === "rock"?  true : false;
        } else{
            //rock, paper
            userWin = compChoice === "rock"? false : true; 
        }
        showWinner(userWin,userChoice, compChoice );
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", ()=> {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})