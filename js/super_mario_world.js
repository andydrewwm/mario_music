const regTracks = [
    new Audio("./audio/smw_overworld.mp3"),
    new Audio("./audio/smw_athletic.mp3"),
    new Audio("./audio/smw_underwater.mp3"),
    new Audio("./audio/smw_underground.mp3"),
]
const yoshiTracks = [
    new Audio("./audio/smw_overworld_yoshi.mp3"),
    new Audio("./audio/smw_athletic_yoshi.mp3"),
    new Audio("./audio/smw_underwater_yoshi.mp3"),
    new Audio("./audio/smw_underground_yoshi.mp3"),
]

const onYoshiSfx = new Audio("./audio/smw_riding_yoshi.wav");
const offYoshiSfx = new Audio("./audio/smw_yoshi_runs_away.wav");

const HIGHLIGHT = "rgba(207, 97, 46, 0.5)";

async function toggleMusic(elt) {
    const is_mario = elt.className === "mario";
    const level = elt.parentElement.id
    let levelIndex;
    let animateClass = `animate-${level}`;

    switch (level) {
        case "overworld":
            levelIndex = 0;
            break;
        case "athletic":
            levelIndex = 1;
            break;
        case "underwater":
            levelIndex = 2;
            break;
        case "underground":
            levelIndex = 3;
            break;
        default:
            break;
    }

    const regTrack = regTracks[levelIndex];
    const yoshiTrack = yoshiTracks[levelIndex];

    if (is_mario) {
        if (!yoshiTrack.muted && !regTrack.paused) offYoshiSfx.play();
        regTrack.muted = false;
        yoshiTrack.muted = true;

        document.getElementsByClassName("yoshi")[levelIndex].style.backgroundColor = "";
        elt.style.backgroundColor = HIGHLIGHT;
    } else {
        if (yoshiTrack.muted || yoshiTrack.paused) onYoshiSfx.play();
        yoshiTrack.muted = false;
        regTrack.muted = true;

        document.getElementsByClassName("mario")[levelIndex].style.backgroundColor = "";
        elt.style.backgroundColor = HIGHLIGHT;
    }

    if (regTrack.currentTime == 0 || regTrack.currentTime == regTrack.duration) {
        document.getElementById(level).className = animateClass;
    }

    regTrack.play();
    yoshiTrack.play();

    regTrack.onpause = () => {
        document.getElementById(level).className = "";
        element.style.backgroundColor = "";
    }
}

function stopMusic(elt) {
    const level = elt.parentElement.id
    let levelIndex;
    switch (level) {
        case "overworld":
            levelIndex = 0;
            break;
        case "athletic":
            levelIndex = 1;
            break;
        case "underwater":
            levelIndex = 2;
            break;
        case "underground":
            levelIndex = 3;
            break;
        default:
            break;
    }
    const regTrack = regTracks[levelIndex];
    const yoshiTrack = yoshiTracks[levelIndex];

    regTrack.pause();
    yoshiTrack.pause();

    regTrack.currentTime = 0;
    yoshiTrack.currentTime = 0;

    document.getElementsByClassName("mario")[levelIndex].style.backgroundColor = "";
    document.getElementsByClassName("yoshi")[levelIndex].style.backgroundColor = "";
}
