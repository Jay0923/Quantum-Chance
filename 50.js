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

const testArr = [144, 9, 4, 16, 25, 49, 81]
// //map method will run a line of code for every element in the targeted array, then assign each updated element into a new array
const square = (num) =>{
 console.log(Math.sqrt(num))
}
const squareRoot = testArr.map(square)
// //using callbacks as the agrument of the map method, i passed in my sqrt function, which sqrts every number in my array

const testArr2 = [20, 43, 15, 17, 25, 9, 10]
const newArr = testArr2.filter(sortTest)
function sortTest (num){
    return num > 18
}
console.log(newArr)