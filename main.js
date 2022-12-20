const timer = document.getElementById("pomodoro");

var work_minutes = 25;//Minutos los cuales estaré trabajando
var break_minutes = 5;//Minutos de break
var total_seconds = 10;//Minutos a segundos

var break_audio = new Audio("bell.mp3");
var work_audio = new Audio("work.mp3");

var timer_mode = "work";

function countDown() {
    let whole_minutes = Math.floor(total_seconds / 60);
    let whole_seconds = total_seconds % 60;

    if (whole_seconds < 10) {
        whole_seconds = "0" + whole_seconds;
    }

    timer.innerHTML = `${whole_minutes}:${whole_seconds}`;
    total_seconds--;

    if (timer_mode === "work") {
        timer.classList.remove("break_counter");
        timer.classList.add("work_counter");
        if (total_seconds < 0) {
            timer_mode = "break";
            total_seconds = 10;
            break_audio.play();
        }
    } else {
        timer.classList.remove("work_counter");
        timer.classList.add("break_counter");
        if (total_seconds < 0) {
            timer_mode = "work";
            total_seconds = 10;
            work_audio.play();
        }
    }
}

setInterval(countDown, 1000);