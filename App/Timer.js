// game timer
let second = 0, minute = 0;
let timer = document.querySelector(".timer");
let interval;

function startTimer() {
    interval = setInterval(function() {
        timer.innerHTML = minute+"mins "+second+"secs";
        second++;

        if (second == 60) {
            minute++;
            second = 0;
        }

        if (minute == 60) {
            hour++;
            minute = 0;
        }
    }, 1000);
}
javascript
function moveCounter() {
    moves++;
    counter.innerHTML = moves;

    // start timer on first move
    if (moves == 1) {
        second = 0;
        minute = 0;
        hour = 0;
        startTimer();
    }
    startGame() {

        //...

        // reset timer
        let timer = document.querySelector(".timer");
        timer.innerHTML = "0 mins 0 secs";
        clearInterval(interval);
    }
