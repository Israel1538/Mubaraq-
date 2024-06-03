let startStopBtn = document.getElementById('startStop');
let resetBtn = document.getElementById('reset');
let display = document.getElementById('display');

let hours = 0, minutes = 0, seconds = 0;
let interval = null;
let isRunning = false;

function startStop() {
    if (isRunning) {
        clearInterval(interval);
        startStopBtn.textContent = 'Start';
    } else {
        interval = setInterval(updateTime, 1000);
        startStopBtn.textContent = 'Stop';
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(interval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    display.textContent = '00:00:00';
    startStopBtn.textContent = 'Start';
    isRunning = false;
}

function updateTime() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    display.textContent = (hours < 10 ? '0' + hours : hours) + ':' + 
                          (minutes < 10 ? '0' + minutes : minutes) + ':' + 
                          (seconds < 10 ? '0' + seconds : seconds);
}

startStopBtn.addEventListener('click', startStop);
resetBtn.addEventListener('click', reset);
