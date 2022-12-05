var gQuestes = []
var gId = 0
var gCountCorr = 0
var gCurrQuestIdx = 0

function initGame() {
    gQuestes = createQuests()
    // renderQuest(gId)
}
//return hard coded(ready mode)
function createQuests() {
    return [
        { id: 1, opts: ['Definitly eat the Ice cream!', 'Nah. I\'ll pass...'], correctOptIndex: 1 },
        { id: 2, opts: ['Avocado? YESSS! Great source of healthy fats', 'Blah.. get that away from me!'], correctOptIndex: 0 },
        { id: 3, opts: ['Oranges are not my thing...', 'Yes please. So much Vitamin C!'], correctOptIndex: 1 },
        { id: 4, opts: ['Figs? Looks weird, I don\'t want to taste..', 'Mmmm.. I love it! It improves bone density'], correctOptIndex: 1 },
        { id: 5, opts: ['Cookies, cookies and some more COOKIES!!', 'Once in a while is good for the soul, I take one!'], correctOptIndex: 1 },
    ]
}

function renderQuest(id) {
    // toggleButtonColor(false)
    const elImg = document.querySelector('.imgcont')
    //change img by order
    const strHTML = `<img class="image" src="img/${id + 1}.jpg" alt="">`
    elImg.innerHTML = strHTML
    //change answers innerHTML to model opts
    var elOpt1 = document.querySelector('.option1') 
    elOpt1.innerText = gQuestes[id].opts[0] //to make it more dynamic for more questions, better to use a loop with index of array
    var elOpt2 = document.querySelector('.option2')
    elOpt2.innerText = gQuestes[id].opts[1]
}

function checkAnswer(answer) { //better to send index through functionn than to make it global var
    //check if answer is correct:
    // find question: img = id
    //model question , get correct opt
    const currCorrOpt = gQuestes[gId].correctOptIndex
    // compare to answer 
    if (+answer.dataset.index === currCorrOpt) {
        gCountCorr++
        // toggleButtonColor(true)
        // setTimeout(()=>{answer.style.backgroundColor='green'},1000)
    }
    //if correct count
    //if wrong mark in red
    //continue to next question
    //unless all questions were asked
    gId++
    if (gId < gQuestes.length) renderQuest(gId)
    else endGame()
}

// function toggleButtonColor(boolean){
//     if(boolean) answer.style.backgroundColor='green'
//     else answer.style.backgroundColor='revert'
// }

function endGame() {
    //clear page
    // console.log(gCountCorr)
    var elContainer = document.querySelector('.container')
    elContainer.style.display = 'none'
    var elEnd = document.querySelector('.end')
    elEnd.style.display='block'
    var elBest = document.querySelector('.best')
    var elOkay = document.querySelector('.okay')
    var elWorst = document.querySelector('.worst')
    var elReset = document.querySelector('.reset')
    console.log(elBest)
    //show result
    if (gCountCorr === 5) elBest.style.display = 'block'
    else if (gCountCorr > 2) elOkay.style.display = 'block'
    else elWorst.style.display = 'block'
    elReset.style.display = 'block'
    //option to restart game
}

function restartGame() {
    gId = 0
    gCountCorr = 0
    gCurrQuestIdx = 0
    var elContainer = document.querySelector('.container')
    elContainer.style.display = 'block'
    var elEnd = document.querySelector('.end')
    elEnd.style.display = 'none'
    renderQuest(gId)
}