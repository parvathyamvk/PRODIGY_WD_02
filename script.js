let timer;
let startTime;
let elapsedTime = 0;
let running = false;
let display = document.querySelector('.time'); // Changed to querySelector('.time') to match the div's class
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');
let lapsButton = document.getElementById('lap');
let lapsContainer = document.getElementById('laps');

function startStopwatch() {
    if (!running) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateTime, 10);
        running = true;
    }
}

function stopStopwatch() {
    if (running) {
        clearInterval(timer);
        running = false;
    }
}

function resetStopwatch() {
    clearInterval(timer);
    running = false;
    elapsedTime = 0;
    display.textContent = '00:00:00';
    lapsContainer.innerHTML = 'Laps'; // Clear lap times if implemented
}

function updateTime() {
    const now = Date.now();
    elapsedTime = now - startTime;
    display.textContent = formatTime(elapsedTime);
}

function formatTime(time) {
    let seconds = Math.floor(time / 1000 % 60);
    let minutes = Math.floor(time / 60000 % 60);
    let hours = Math.floor(time / 3600000);

    return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
}

function pad(num) {
    return num.toString().padStart(2, '0');
}

function recordlap(){
    if(running) {
        const lapTime = formatTime(elapsedTime);
        const lapItem = document.createElement('li');
        lapItem.textContent = lapTime;
        lapsContainer.appendChild(lapItem);
    }
}

startButton.addEventListener('click', startStopwatch);
stopButton.addEventListener('click', stopStopwatch);
resetButton.addEventListener('click', resetStopwatch);
lapsButton.addEventListener('click', recordlap);


