let word;
let fakeWord = [];

let randomWord;
let letter;
let words = [];
let letters = [];
let wordInput = document.getElementById('word');

let main = document.getElementById('main');
let menu = document.getElementById('menu');

let juego = document.getElementById('juego');
let newGame = document.getElementById('newGame');
let errorAlert = document.getElementById('menuError');
let clearWords = document.getElementById('clear');
let random = -1;
let secretWord = document.getElementById('secretWord');
let hearts = document.getElementById('hearts');
let gameImage = document.getElementById('gameImage');
let lives = 7;
let sourceImage = 0;
let wrong = false;
let gano;

function fakerWord(){
    for (let i=0; i<randomWord.length; i++){
        fakeWord.push("");
    }
}

function checkWords(randomWord, fakeWord, letter){
    wrong = true;
    if (letters.includes(letter)){
        errorJuego.innerHTML = "Ya usaste esa letra";
        menuErrorJuego.style.display = "flex";
        wrong = false;
    } else if (letter==""){
        errorJuego.innerHTML = "No ingresaste ninguna letra";
        menuErrorJuego.style.display = "flex";
        wrong = false;
    } else {
        letters.push(letter);
        menuErrorJuego.style.display = "none";
    }
    
    for (let i=0; i<randomWord.length; i++){
        if (letter == randomWord[i]){
            fakeWord[i] = letter;
            wrong = false;
        }
    }

    if (wrong){
        lives--;
        sourceImage++;
        gameImage.src = 'public/media/img/states/state-'+ sourceImage+'.png';
    }

}

function play(randomWord, fakeWord, letter){
    secretWord.innerHTML = '';
    checkWords(randomWord, fakeWord, letter);
    for (let i=0; i<fakeWord.length; i++){
        secretWord.innerHTML += '<div><p>' + fakeWord[i] + '</p></div>';
    }
    heartsLeft();
    gano = fakeWord.join('');
    letterPress.value = "";
    letterPress.focus();
    if (gano==randomWord){
        divInputLetras.style.display = "none";
        gameImage.style.display = "none";
        secretWord.style.minWidth = "80vw";
        finH2.innerHTML = "GANASTE!";
    }
}

function heartsLeft(){
    hearts.innerHTML = "";
    if (lives <= 0){
        secretWord.style.display = "none";
        hearts.style.display = "none";
        divInputLetras.style.display = "none";
        finH2.innerHTML = "PERDISTE ZANGANO";
        setTimeout(()=>{
            sourceImage++;
            gameImage.src = 'public/media/img/states/state-'+ sourceImage+'.png';
        },1300);
        gameImage.style.height = '100%';
    } else {
        for (let i = 0; i < lives; i++) {
            hearts.innerHTML += '<span class="hearts">&#10084;</span>';
        }
    }
}

add.onclick = () => {
    word = wordInput.value.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s\s+/g, " ").trim().toUpperCase();
    if (word.length>3 && word != ""){
        words.push(word);
        clearWords.style.display = "block";
    } else {
        error.innerHTML = "Must be LONGER than three characters and cannot contain numbers";
        errorAlert.style.display = "flex";
    }
    wordInput.value = "";
    wordInput.focus();
}

wordInput.onclick = () => {
    errorAlert.style.display = "none";
}

newGame.onclick = () => {
    if (words.length<=0){
        error.innerHTML = "You need to add at least one word to start to play";
        errorAlert.style.display = "flex";
        setTimeout(()=>{
            errorAlert.style.display = "none";
        },5000);
        wordInput.focus();
    }else{
        menu.style.display = "none";
        main.style.justifyContent = "flex-start";
        juego.style.display = "grid";
        while (random<0 || random>=words.length){
            random = Math.round(Math.random()*words.length);
        }
        randomWord = words[random];
        fakerWord();
        play(randomWord, fakeWord, letter);
    }
}

clearWords.onclick = () => {
    let respuesta = prompt("Are you sure? Press Y to confirm:");
    if (respuesta.toUpperCase()=="Y"){
        words = [];
        clearWords.style.display = "none";
    }
}


let letterPress = document.getElementById('letterPress');
let letterCheck = document.getElementById('letterCheck');


letterPress.onkeyup = function(e) {
    let max = 1; // The maxlength you want 
    if(letterPress.value.length > max) {
      letterPress.value = letterPress.value.substring(0, max);
    }
};

letterCheck.onclick = () => {
    letter = letterPress.value.toUpperCase();
    play(randomWord, fakeWord, letter);
}