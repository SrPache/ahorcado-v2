let word;
let words = [];
let wordInput = document.getElementById('word');

let newGame = document.getElementById('newGame');
let errorAlert = document.getElementById('menuError');

add.onclick = () => {
    word = wordInput.value.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s\s+/g, " ").trim().toLowerCase();
    if (word.length>3 && word != ""){
        words.push(word);
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
        alert("ok")
    }
}


