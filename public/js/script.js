let word;
let guestWord;
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

function toPlay(letters, fakeWord, randomWord, inicio){
    if (inicio){
        alert("hola");
        for (let i=0; i<fakeWord.length; i++){
            alert("hola again");
            secretWord.innerHTML += '<div><p>' + "hola" + '</p></div>';
        }
    }
    //             secretWord.innerHTML += '<div><p>' + letras[j] + '</p></div>';
    //             alert("si");
    //         }else{
    //             alert("no");
    //         }
            
    //         // secretWord.innerHTML += '<div><p>' + words[random][i].toUpperCase() + '</p></div>';
    
    //     }
    // }
    
    
}

function fakerWord(){
    for (let i=0; i<randomWord.length; i++){
        fakeWord.push("");
    }
}

add.onclick = () => {
    word = wordInput.value.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s\s+/g, " ").trim().toLowerCase();
    if (word.length>3 && word != ""){
        words.push(word);
        clearWords.style.display = "block";
    } else {
        error.innerHTML = "Must be LONGER than three characters and cannot contain numbers";
        errorAlert.style.display = "flex";
    }
    alert(words);
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

        // toPlay(letters, fakeWord, randomWord, true);

    }
}

clearWords.onclick = () => {
    let respuesta = prompt("Are you sure? Press Y to confirm:");
    if (respuesta.toLowerCase()=="y"){
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
    letter = letterPress.value.toLowerCase();    
}




