let count = 0;
let sec = 0;
let min = 0;
let hour = 0;
let timer;

function startTime() {
    if (timer == true) {
        count++;
        if (count == 100) {
            sec++;
            count = 0;
        }
        if (sec == 60) {
            min++;
            sec = 0;
        }
        if (min == 60) {
            hour++;
            min = 0;
        }
    }
};

function displayTime() {
    let newCount = count;
    let newSec = sec;
    let newMin = min;
    let newHour = hour;
    if (count < 10) {
        newCount = "0" + newCount;
    }
    if (sec < 10) {
        newSec = "0" + newSec;
    }
    if (min < 10) {
        newMin = "0" + newMin;
    }
    if (hour < 10) {
        newHour = "0" + newHour;
    }
    document.querySelector(".time").innerHTML = newHour + ":" + newMin + ":" + newSec + ":" + newCount;
}

function increaseCount() {
    setInterval(function () {
        startTime();
        displayTime();
    }, 10);
};
increaseCount();

function Start() {
    timer = true;
    document.querySelector(".startBtn").style.display = "none";
    document.querySelector(".resetBtn").style.display = "inline-block";
    document.querySelector(".pauseBtn").style.display = "inline-block";
};

function Pause() {
    timer = false;
    displayTime();
    document.querySelector(".pauseBtn").style.display = "none";
    document.querySelector(".resumeBtn").style.display = "inline-block";
};

function Resume() {
    timer = true;
    document.querySelector(".resumeBtn").style.display = "none";
    document.querySelector(".pauseBtn").style.display = "inline-block";
};

function Reset() {
    timer = false;
    count = 0;
    sec = 0;
    min = 0;
    hour = 0;
    displayTime();
    document.querySelector(".pauseBtn").style.display = "none";
    document.querySelector(".resumeBtn").style.display = "none";
    document.querySelector(".resetBtn").style.display = "none";
    document.querySelector(".startBtn").style.display = "inline-block";
};

document.querySelector(".startBtn").addEventListener('click', Start);

document.querySelector(".pauseBtn").addEventListener('click', Pause);

document.querySelector(".resumeBtn").addEventListener('click', Resume);

document.querySelector(".resetBtn").addEventListener('click', Reset);
