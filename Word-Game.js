let words =
    [
        { word: 'CRICKET', playableWords: ['ICE', 'IRK', 'TICK', 'CITE', 'TRICK', 'RICKET'] },
        { word: 'BASEBALL', playableWords: ['SEA', 'LAB', 'SELL', 'ABLE', 'LABEL', 'BASAL'] },
        { word: 'SCRABBLE', playableWords: ['ERA', 'CAB', 'BABE', 'CARE', 'CABLE', 'SCALER'] },
        { word: 'BADMINTON', playableWords: ['AIM', 'BIT', 'ATOM', 'BOAT', 'ADMIT', 'OBTAIN'] },
        { word: 'JAVELIN', playableWords: ['VIE', 'ALE', 'EVIL', 'JEAN', 'ALIVE', 'VENIAL'] },
    ]
let div1 = document.getElementById('div')
let space = document.querySelector('.space');
let start = document.querySelector('.start');
let next = document.querySelector('.next')
let clear = document.querySelector('.clear')
let score = document.querySelector('.scoreMark')
let score1 = document.querySelector('.score')
let currentWord = null;
let currentWordIndex = 0;
let selectedSlot = null;
let selectedOption = -1
let answers = ""
let currentChar = 0;
let bottom = document.querySelector('.bottom')
let player = document.querySelector('.player')
let name = document.querySelector('.name')
let insertedName = document.querySelector('.showName')
score.value = 0
gameScore = 0



function renderbtns() {
    currentWord = words[currentWordIndex];
    space.innerHTML = "";
    div1.innerHTML = ''

    if (currentWord !== undefined) {
        for (var i = 0; i < currentWord.playableWords.length; i++) {
            let radio = document.createElement("input")
            let div = document.createElement('div')
            radio.setAttribute('type', 'radio')
            radio.setAttribute('name', 'option')
            radio.setAttribute("id", i);
            radio.setAttribute('class', 'radio')
            radio.onclick = function (e) {
                currentChar = 0
                selectedOption = e.target.id;
                var inputs = document.getElementsByClassName(selectedOption);

                // for (var k = 0; k < inputs.length; k++) {
                //     inputs[k].disabled = false;




                // }

                answers = ''


            }


            div.appendChild(radio)

            let playableWord = currentWord.playableWords[i];

            for (var j = 0; j < playableWord.length; j++) {
                let input = document.createElement('input')
                input.maxLength = '1'
                input.disabled = true;
                input.setAttribute('class', i)
                var inputId = 'option-input-' + i + j;
                input.style.textAlign = 'center'
                input.setAttribute('id', inputId);
                div.appendChild(input);


            }
            let checkmark = document.createElement('div')
            checkmark.setAttribute('class', i)
            checkmark.setAttribute('id', 'style')
            checkmark.innerHTML = '&#10003;';
            div.appendChild(checkmark)
            div1.appendChild(div)
            let checkmark1 = document.createElement('div')
            checkmark1.setAttribute('class', 'bad' + i)
            checkmark1.setAttribute('id', 'style1')
            checkmark1.innerHTML = '&#x2718;';
            div.appendChild(checkmark1)
            div1.appendChild(div)

        }
        for (var b = 0; b < currentWord.word.length; b++) {
            var button = document.createElement("button");
            button.setAttribute('class', 'button')
            // button.style.backgroundColor = 'purple'
            button.style.borderRadius = '3px'
            button.textContent = currentWord.word.charAt(b);
            button.onclick = function (e) {
                let currentInput = document.querySelector("#option-input-" + selectedOption + currentChar)

                currentInput.value = e.target.textContent
                currentChar++
                answers += currentInput.value

                let checkmarkDisplay = document.getElementsByClassName(selectedOption)
                let checkmarkDisplay1 = document.getElementsByClassName('bad' + selectedOption)
                console.log(answers)
                var inputs = document.getElementsByClassName(selectedOption);

                if (currentWord.playableWords.includes(answers) && (inputs.length - 1) === answers.length) {
                    for (var d = 0; d < checkmarkDisplay.length; d++) {
                        checkmarkDisplay[d].style.display = 'inline-block';
                        for (var e = 0; e < checkmarkDisplay1.length; e++) {
                            checkmarkDisplay1[e].style.display = 'none';


                        }
                    }

                    gameScore = gameScore + 10
                    score.value = gameScore;

                    for (z = 0; z < currentWord.playableWords.length; z++) {
                        if (currentWord.playableWords[z] === answers) {
                            currentWord.playableWords.splice(z, 1);

                        }
                    }


                } else {
                    for (var e = 0; e < checkmarkDisplay1.length; e++) {
                        checkmarkDisplay1[e].style.display = 'inline-block';


                    }
                }
                // while (currentWord.playableWords.includes(answers)) {
                //     score.value = +10
                // }



                /* 
                    Select the input element that has the id 
                    of the current selected radio input 
                    and create a variable that would represent
                    the id of the text input on that row.
                */

            }
            space.appendChild(button);

        }
    } else {
        alert(' Congrats!! You total score is ' + score.value + '.')
        var answer = prompt("Do you want to restart the game");
        if (answer == null || answer == '' || answer == 'No' || answer == 'Nope' || answer == 'Nah') {

            alert('Thanks for Playing!\nKindly exit the game.');

        }
        else {
            renderbtns()
        }
    }
}
start.onclick = function () {
    renderbtns()
    next.style.display = 'inline-block';
    clear.style.display = 'inline-block';
    start.style.display = 'none';
    score.style.display = 'inline-block';
    score1.style.display = 'block';
    bottom.style.backgroundImage = 'none';
    bottom.style.backgroundColor = 'black';
    player.style.display = 'none';
    insertedName.innerHTML = "Hello " + name.value + ' &#x1F60A'


}
let checkmarkDisplay = document.getElementsByClassName(selectedOption)
let checkmarkDisplay1 = document.getElementsByClassName('bad' + selectedOption)

next.onclick = function () {
    currentWordIndex++;
    renderbtns();
}
clear.onclick = function () {
    var inputs = document.getElementsByClassName(selectedOption);
    currentChar = 0
    answers = ''
    for (var k = 0; k < inputs.length; k++) {
        inputs[k].value = '';
        currentChar = 0
        answers = ''
    }
    let checkmarkDisplay1 = document.querySelector('.' + 'bad' + selectedOption)
    checkmarkDisplay1.style.display = 'none';
}