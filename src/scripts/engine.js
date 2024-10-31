const pianoKeys = document.querySelectorAll(".piano-keys .key");

let audio = new Audio("src/tunes/a.wav");

const playTune = (key) =>{
    console.log(key)
    audio.src = `src/tunes/${key}.wav`;
    audio.play();
};

pianoKeys.forEach((item) => {
    console.log(item.dataset.key);
    item.addEventListener("click", () => playTune(item.dataset.key) )
});