const msg = document.getElementById('msg');
const card = document.getElementById('card');
const sum = document.getElementById('sum');
const player = document.getElementById('player');
const button = document.getElementById('newcard');
let isAlive = false;
let hasBlackJack = false;
let total = 0;
let message = '';
let array = [];


function startGame() {
    if (isAlive) {
        return;
    }
    button.classList.remove('d-none');
    button.classList.add("d-block");
    isAlive = true;
    let firstNum = getRandom();
    let secondNum = getRandom();
    array.push(firstNum);
    array.push(secondNum);
    total = firstNum + secondNum;
    renderGame();
}

// function endGame() {
//     msg.hidden = true;
//     card.hidden = true
//     sum.hidden = true;
//     player.hidden = true;
//     button.hidden = true;
// }

function renderGame() {
    card.textContent = 'Cards: ';
    for (const item of array) {
        card.textContent += item + ' ';
    }
    sum.textContent = 'Total: ' + total;
    checkBlackJack();
    msg.textContent = message;
    if (!isAlive) {
        array = [];
        return;
    } 
}

function newcard() {
    checkBlackJack();
    
    if (isAlive === true && hasBlackJack === false) {
        // console.log('Alive: ' + isAlive);
        // console.log('BlackJack: ' + hasBlackJack);
        let newNum = getRandom();
        total += newNum;
        array.push(newNum);
        // card.textContent += ' ' + newNum;
        // sum.textContent = 'Total: ' + total;
    } else return;
    // console.log(total);
    renderGame();
}

function checkBlackJack() {
    if (total > 21) {
        message = "You're Bust";
        isAlive = false;
    } else if (total == 21) {
        hasBlackJack = true;
        isAlive = false;
        message = "OMG! You're Win"
    } else {
        message = 'Do you want a new card?';
    }
}

function getRandom() {
    let rand = Math.floor(Math.random() * 13);
    
    if (rand == 1) {
        return 11;
    } else if (rand > 10 && rand < 14) {
        return 10;
    } else {
        return rand + 1;
    }
}