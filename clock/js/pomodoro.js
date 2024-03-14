var defaultWork = 0;
var defaultRest = 0;

var workCounter;
var restCounter;

var workTimer;
var restTimer;

const ringtone = new Audio("./ringtone.mp3");
ringtone.volume = 0.2;

export function pomodoroWorkUp() {
    defaultWork+= 5;

    if(defaultWork > 55){
        defaultWork = 0;
        document.getElementById('pomodoro-work-set').innerHTML = "0" + defaultWork;
    }
    else if(defaultWork < 10){
        document.getElementById('pomodoro-work-set').innerHTML = "0" + defaultWork;
    }
    else if(defaultWork <= 55){
        document.getElementById('pomodoro-work-set').innerHTML = defaultWork;
    }
}

export function pomodoroWorkDown() {
    defaultWork-= 5;

    if(defaultWork < 0){
        defaultWork = 55;
        document.getElementById('pomodoro-work-set').innerHTML = defaultWork;
    }
    else if(defaultWork < 10){
        document.getElementById('pomodoro-work-set').innerHTML = "0" + defaultWork;
    }
    else if(defaultWork <= 55){
        document.getElementById('pomodoro-work-set').innerHTML = defaultWork;
    }
}

export function pomodoroRestUp() {
    defaultRest+= 5;

    if(defaultRest > 55){
        defaultRest = 0;
        document.getElementById('pomodoro-rest-set').innerHTML = "0" + defaultRest;
    }
    else if(defaultRest < 10){
        document.getElementById('pomodoro-rest-set').innerHTML = "0" + defaultRest;
    }
    else if(defaultRest <= 55){
        document.getElementById('pomodoro-rest-set').innerHTML = defaultRest;
    }
}

export function pomodoroRestDown() {
    defaultRest-= 5;

    if(defaultRest < 0){
        defaultRest = 55;
        document.getElementById('pomodoro-rest-set').innerHTML = defaultRest;
    }
    else if(defaultRest < 10){
        document.getElementById('pomodoro-rest-set').innerHTML = "0" + defaultRest;
    }
    else if(defaultRest <= 55){
        document.getElementById('pomodoro-rest-set').innerHTML = defaultRest;
    }
}

export function pomodoroButtonClick() {

    const btn = document.getElementById('pomodoro-button');

    workCounter = defaultWork;
    restCounter = defaultRest;
    
    if(btn.textContent === "Start") {
        workTimer = setInterval(workCountdown, 1000);
        btn.textContent = "Stop";
    }

    else{
        btn.textContent = "Start";
        resetFields();
    }
}

function workCountdown() {
    let pomodoroDisplay = document.getElementById('pomodoro-display');  

    if(workCounter > 0) {
        workCounter--;
    }

    else if (workCounter == 0) {
        workCounter = defaultWork;  
        clearInterval(workTimer);

        restTimer = setInterval(restCountdown, 1000);
    }

    pomodoroDisplay.textContent = workCounter.toString().padStart(2, "0") + " / " + restCounter.toString().padStart(2, "0");
    
}

function restCountdown() {
    let pomodoroDisplay = document.getElementById('pomodoro-display');  

    if(restCounter > 0) {
        restCounter--;
    }

    else if (restCounter == 0) {
        restCounter = defaultRest;  
        clearInterval(restTimer);

        workTimer = setInterval(workCountdown, 1000);
    }

    pomodoroDisplay.textContent = workCounter.toString().padStart(2, "0") + " / " + restCounter.toString().padStart(2, "0");
}

function resetFields() {

    defaultWork = 0;
    defaultRest = 0;

    document.getElementById('pomodoro-work-set').textContent = "00";
    document.getElementById('pomodoro-rest-set').textContent = "00";
    document.getElementById('pomodoro-display').textContent = "00 / 00";

    clearInterval(workTimer);
    clearInterval(restTimer);
}