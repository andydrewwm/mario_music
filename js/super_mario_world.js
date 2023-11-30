const overworldTheme = new Audio("./audio/smw_overworld_theme.oga");
const overworldYoshiTheme = new Audio("./audio/smw_overworld_yoshi_theme.oga");
const rideYoshiSound = new Audio("./audio/smw_riding_yoshi.wav");
const loseYoshiSound = new Audio("./audio/smw_yoshi_runs_away.wav");

async function toggleOverworld(element) {
    const eltClass = element.className;

    if (eltClass === "mario") {
        if (!overworldYoshiTheme.muted && !overworldTheme.paused) loseYoshiSound.play();
        overworldTheme.muted = false;
        overworldYoshiTheme.muted = true;

        const yoshiButton = document.getElementsByClassName("yoshi")[0];
        yoshiButton.style.backgroundColor = "";
        element.style.backgroundColor = "rgba(207, 97, 46, 0.5)";

    } else if (eltClass === "yoshi") {
        if (overworldYoshiTheme.muted || overworldYoshiTheme.paused) rideYoshiSound.play();
        overworldYoshiTheme.muted = false;
        overworldTheme.muted = true;

        const marioButton = document.getElementsByClassName("mario")[0];
        marioButton.style.backgroundColor = "";
        element.style.backgroundColor = "rgba(207, 97, 46, 0.5)";
    }

    if (overworldTheme.currentTime == 0 || overworldTheme.currentTime == overworldTheme.duration) {
        document.getElementById("overworld").className = "animateLevel";
    }

    overworldTheme.play();
    overworldYoshiTheme.play();

    overworldTheme.onpause = () => {
        document.getElementById("overworld").className = "";
        element.style.backgroundColor = "";
    }
}

function stopMusic() {
    overworldTheme.pause();
    overworldYoshiTheme.pause();

    overworldTheme.currentTime = 0;
    overworldYoshiTheme.currentTime = 0;
}
