const pianoKeys = document.querySelectorAll(".piano-keys .key");

let audio = new Audio("src/tunes/a.wav");

const playTune = (key) =>{
    audio.src = `src/tunes/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add("active")
    setTimeout(()=>{
        clickedKey.classList.remove("active")
    },150)
};

pianoKeys.forEach((item) => {
    // console.log(item.dataset.key);
    item.addEventListener("click", () => playTune(item.dataset.key) )
});

document.addEventListener("keydown", (e) => {
    playTune(e.key)
});

