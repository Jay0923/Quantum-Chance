const winCondition = ['winner!', 'winner!', 'winner!', 'winner!', 'winner!','winner!', 'loser!']
const bttn = document.getElementById('button')
const winLose = document.getElementById('wincondition')
const score = document.getElementById('score')
const scoreContainer = document.getElementById('highscoretrack')
let highScore = 0
let counter = 0
bttn.addEventListener('click', e =>{
    counter += 1
    const odd = winCondition[Math.floor(Math.random() * winCondition.length)]
    if(odd == 'winner!' ){
        winLose.innerText = "The odds are in your favor!"
        score.innerText = ''
    }
    else{
        winLose.innerText = "Loser"
        counter -= 1
        score.innerText = `Your score is ${counter}`
       if(highScore < counter){
        scoreContainer.innerText = highScore
        scoreContainer.innerHTML = ''
        highScore = counter
        scoreContainer.innerText = highScore
    }
        counter = 0
    }
})
