window.addEventListener("DOMContentLoaded", () => {
    const coinImg = document.querySelector("#coinImg");
    const startBtn = document.querySelector("#startBtn");
    const frontBtn = document.querySelector("#front");
    const backBtn = document.querySelector("#back");
    const quizSquare = document.querySelector(".quiz");
    const conBtns = document.querySelector('.btns');
    const winner = document.querySelector('.winner');
    const wins = document.querySelector('#wins');
    const loses = document.querySelector("#loses");

    let coinSide;
    let numOfWins;
    let numOfLoses;
    
    function resetTheGame() {
        conBtns.classList.add("hidden");
        startBtn.classList.remove("hidden");
        quizSquare.classList.add("hidden");
        coinImg.classList.remove("hidden");
    }
    
    startBtn.onclick = function () {
        conBtns.classList.remove('hidden');
        startBtn.classList.add("hidden");
        quizSquare.classList.remove('hidden');
        coinImg.classList.add('hidden');
        winner.innerHTML = "";
        coinSide = Math.round(Math.random());
        console.log(coinSide);
    };

    frontBtn.onclick = function () {
        if (coinSide === 1) {
            winner.innerHTML =
              '<span style="color: green">&#128513; لقد فزت &#128513;</span>';
            coinImg.src = "img/front.png";
            numOfWins = parseInt(wins.innerHTML) + 1;
            wins.innerHTML = numOfWins; 
            resetTheGame()
        } else {
            coinImg.src = "img/front.png";
            numOfLoses = parseInt(loses.innerHTML) + 1;
            loses.innerHTML = numOfLoses;
            winner.innerHTML =
              '<span style="color: red">&#128531; لقد خسرت &#128531;</span>';
            resetTheGame()
        }
        console.log(numOfWins, numOfLoses)
    };
    
    backBtn.onclick = function () {
        if (coinSide === 0) {
            winner.innerHTML =
            '<span style="color: green">&#128513; لقد فزت &#128513;</span>';
            numOfWins = parseInt(wins.innerHTML) + 1;
            wins.innerHTML = numOfWins;
            coinImg.src = "img/back.png";
            resetTheGame()
        } else {
            coinImg.src = "img/back.png";
            numOfLoses = parseInt(loses.innerHTML) + 1;
            loses.innerHTML = numOfLoses;
            winner.innerHTML =
            '<span style="color: red">&#128531; لقد خسرت &#128531;</span>';
            resetTheGame()
        }
        console.log(numOfWins, numOfLoses);
    };
    
});
