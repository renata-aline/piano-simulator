const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input")

let mapedkeys = [];
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
    item.addEventListener("click", () => playTune(item.dataset.key))
    mapedkeys.push(item.dataset.key)
});

document.addEventListener("keydown", (e) => {
    if(mapedkeys.includes(e.key)){
        playTune(e.key)
    }
});

const showHideKeys = () => {
    pianoKeys.forEach((item) => item.classList.toggle("hide"));
}

const handleVolume = (e)=> {
    audio.volume = e.target.value
}

volumeSlider.addEventListener("input", handleVolume);

keysCheck.addEventListener("click" , showHideKeys)


