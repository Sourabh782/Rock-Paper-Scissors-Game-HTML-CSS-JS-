const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");

const yourImg = document.querySelector("#your");
const computerImg = document.querySelector("#computer");

const selfScore = document.querySelector("#youscore");
const compScore = document.querySelector("#compscore");

const reset = document.querySelector("#reset");

let userInput;

rock.addEventListener("click", () =>{
    yourImg.setAttribute("src", "rock.png");
    userInput = 1;
    computerOutput();
    winner();
})
paper.addEventListener("click", () =>{
    yourImg.setAttribute("src", "paper.png");
    userInput = 0;
    computerOutput();
    winner();
})
scissor.addEventListener("click", () =>{
    yourImg.setAttribute("src", "scissor.png");
    userInput = 2;
    computerOutput();
    winner();
})

let compTurn;

function computerOutput(){
    compTurn = Math.floor(Math.random()*3);
    console.log(compTurn);

    if(compTurn == 0){
        computerImg.setAttribute("src", "paper.png");
    }
    else if(compTurn == 1){
        computerImg.setAttribute("src", "rock.png");
    }
    if(compTurn == 2){
        computerImg.setAttribute("src", "scissor.png");
    }
}

let yourscore = 0;
let computerscore = 0;

function winner(){
    if(userInput==1 && compTurn == 2){
        selfScore.textContent = `YOU : ${++yourscore}`;
    }
    else if(userInput==2 && compTurn == 1){
        compScore.textContent = `comp : ${++computerscore}`;
    }
    else if(userInput == 1 && compTurn == 0){
        compScore.textContent = `comp : ${++computerscore}`;
    }
    if(userInput==0 && compTurn == 1){
        selfScore.textContent = `YOU : ${++yourscore}`;
    }
    else if(userInput==0 && compTurn == 1){
        compScore.textContent = `comp : ${++computerscore}`;
    }
    if(userInput==2 && compTurn == 0){
        selfScore.textContent = `YOU : ${++yourscore}`;
    }
    else if(userInput==0 && compTurn == 2){
        compScore.textContent = `comp : ${++computerscore}`;
    }
}

reset.addEventListener("click", () => {
    yourscore = 0;
    computerscore = 0;
    compScore.textContent = `comp : ${computerscore}`;
    selfScore.textContent = `YOU : ${yourscore}`;
    computerImg.setAttribute("src", "");
    yourImg.setAttribute("src", "");
})