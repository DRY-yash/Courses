/*Rules to examine the script - 
1. //imp : used to denote important steps.
2. write here.
*/
//Word list -
const setOfWords = [
    "Two roads diverged in a wood, and I, I took the one less travelled by, and that has made all the difference. -Robert Frost",
    "Life is like riding a bicycle. To keep your balance, you must keep moving. -Albert Einstein",
    "No one can make you feel inferior without your consent. -Eleanor Roosevelt"
]

//Variables Declaration -
const msg_h2 = document.getElementById('msg');
const myWords_textarea = document.getElementById('mywords');
const Playbtn_i = document.querySelector('.mainbtn');
let startTime, endTime;

//main fucntions -
function play() {
    //focus text area and change buttons
    myWords_textarea.classList.add('play');
    Playbtn_i.classList.remove('fa-play');
    Playbtn_i.classList.add('fa-pause');
    myWords_textarea.value = '';

    myWords_textarea.disabled = false;
    myWords_textarea.focus();   //imp

    //add words from word list  //imp
    let randomNumber = Math.floor(Math.random() * setOfWords.length);
    msg_h2.innerHTML = setOfWords[randomNumber];

    //get start time
    let date = new Date();
    startTime = date.getTime();
}

function pause() {
    //remove focus and change buttons 
    myWords_textarea.classList.remove('play');
    Playbtn_i.classList.add('fa-play');
    Playbtn_i.classList.remove('fa-pause');

    myWords_textarea.disabled = true;

    //get end time.
    let date = new Date();
    endTime = date.getTime();

    //get total time used.
    let totalTime = ((endTime - startTime) / 1000);

    //get total words typed. //imp
    let totalStr = myWords_textarea.value;
    let wordCount = wordCounter(totalStr);

    //get speed
    let speed = Math.round((wordCount / totalTime) * 60);
    console.log(speed);

    let finalMsg = "You typed total at " + speed + " words per minute ";

    //compare words
    finalMsg += compareWords(msg_h2.innerText, totalStr);
    msg_h2.innerText = finalMsg;
}

const compareWords = (str1, str2) => {
    let words1 = str1.split(' ');
    let words2 = str2.split(' ');
    let cnt = 0;

    words1.forEach(function (item, index) {
        if (item == words2[index]) {
            cnt++;
        }
    })

    let errorWords = (words1.length - cnt);
    return (cnt + " correct out of " + words1.length + " words and the total number of error are " + errorWords + ".")
}

const wordCounter = (str) => {
    let response = str.split(' ').length;
    return response;
}

//Event listeners -
Playbtn_i.addEventListener('click', () => {
    const isPlaying = myWords_textarea.classList.contains('play');  //imp

    if (isPlaying) {
        pause();
    } else {
        play();
    }
});