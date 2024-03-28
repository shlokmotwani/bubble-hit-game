function createBubbleBoard(){
    const bubbleBoard = document.querySelector("#bubble-board");
    for(let i = 0; i < 10; i++){
        let rowDiv = document.createElement("div");
        for(let j = 0; j < 20; j++){
            const bubble = document.createElement("button");
            bubble.setAttribute("style", 
            `width: 60px;
            height: 60px;
            border-radius: 40%;
            margin: 7px;
            font-size: 22px;
            text-align: center;
            font-weight: bold`);
            bubbleArray.push(bubble);
            rowDiv.appendChild(bubble);
        }
        bubbleBoard.appendChild(rowDiv);
    }
}

function generateNumbers(bubbleArray){
    for(let i=0; i<bubbleArray.length; i++){
        bubbleArray[i].textContent = Math.floor(Math.random() * 10);
    }
}

function generateCurrentTarget(){
    return Math.floor(Math.random() * 10);
}

function onBubbleClick(e){
    if(String(e.target).includes("Button")){
        if(e.target.textContent == currentTarget){
            let currentScore = +scoreDisplay.value;
            scoreDisplay.value = ++currentScore;
            playNewRound();
        }
    }
}

function playGame(){
    createBubbleBoard();
    bubbleBoard.addEventListener("click", onBubbleClick);
    beginCountDown();
    playNewRound();
}

function playNewRound(){
    generateNumbers(bubbleArray);
    currentTarget = generateCurrentTarget();
    targetDisplay.value = currentTarget;
}

function beginCountDown(){
    let secondsRemaining = 60;
    let timer = window.setInterval(()=>{
        secondsRemaining--;
        if(secondsRemaining <= 0){
            bubbleBoard.style.visibility = "hidden";
            divGameOver.style.visibility = "visible";
            window.clearInterval(timer);
        }
        timerDisplay.value = secondsRemaining;
    }, 1000);
}


const bubbleArray = [];
let currentTarget = 0;
const targetDisplay = document.querySelector("#div-hit");
targetDisplay.setAttribute("style", 
`font-size: 22px;
text-align: center;
font-weight: bold`);

const timerDisplay = document.querySelector("#div-timer");
timerDisplay.setAttribute("style", 
`font-size: 22px;
text-align: center;
font-weight: bold`);
timerDisplay.value = 60;

const scoreDisplay = document.querySelector("#div-score");
scoreDisplay.setAttribute("style", 
`font-size: 22px;
text-align: center;
font-weight: bold`);
scoreDisplay.value = 0;

const bubbleBoard = document.querySelector("#bubble-board");
const divGameOver = document.querySelector("#div-game-over");
divGameOver.style.visibility = "hidden";
playGame();