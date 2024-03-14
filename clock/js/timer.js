var timer;
var defaultMinute = 0;
var defaultSecond = 0;

const ringtone = new Audio("./ringtone.mp3");
ringtone.volume = 0.2;

export function timerMinuteUp(){
    defaultMinute++;

    if(defaultMinute > 59){
        defaultMinute = 0;
        document.getElementById('timer-minute-set').innerHTML = "0" + defaultMinute;
    }
    else if(defaultMinute < 10){
        document.getElementById('timer-minute-set').innerHTML = "0" + defaultMinute;
    }
    else if(defaultMinute <= 59){
        document.getElementById('timer-minute-set').innerHTML = defaultMinute;
    }
}

export function timerMinuteDown(){
    defaultMinute--;

    if(defaultMinute < 0){
        defaultMinute = 59;
        document.getElementById('timer-minute-set').innerHTML = defaultMinute;
    }
    else if(defaultMinute < 10){
        document.getElementById('timer-minute-set').innerHTML = "0" + defaultMinute;
    }
    else if(defaultMinute <= 59){
        document.getElementById('timer-minute-set').innerHTML = defaultMinute;
    }
}

export function timerSecondUp(){
    defaultSecond++;

    if(defaultSecond > 59){
        defaultSecond = 0;
        document.getElementById('timer-second-set').innerHTML = "0" + defaultSecond;
    }
    else if(defaultSecond < 10){
        document.getElementById('timer-second-set').innerHTML = "0" + defaultSecond;
    }
    else if(defaultSecond <= 59){
        document.getElementById('timer-second-set').innerHTML = defaultSecond;
    }
}

export function timerSecondDown(){
    defaultSecond--;

    if(defaultSecond < 0){
        defaultSecond = 59;
        document.getElementById('timer-second-set').innerHTML = defaultSecond;
    }
    else if(defaultSecond < 10){
        document.getElementById('timer-second-set').innerHTML = "0" + defaultSecond;
    }
    else if(defaultSecond <= 59){
        document.getElementById('timer-second-set').innerHTML = defaultSecond;
    }
}

export function timerButtonClick(){
    var btn = document.getElementById('timer-button');

    if(btn.textContent === "Start"){
        timer = setInterval(timerStart, 1000)
        btn.textContent = "Stop";
    }
    else{
        clearInterval(timer);
        btn.textContent = "Start"
        resetFields();
    }
}

function resetFields(){
    defaultMinute = 0;
    defaultSecond = 0;
    document.getElementById('timer-minute-set').innerText = "00"
    document.getElementById('timer-second-set').innerText = "00"
    document.getElementById('timer-display').innerText = "00:00"
    ringtone.pause();
}

function timerStart(){   
    const timerDisplay = document.getElementById('timer-display')
    
    if(defaultSecond == 0 && defaultMinute == 0){
        
        ringtone.play();
        clearInterval(timer);
    }
    if(defaultSecond < 0){
        if(defaultMinute > 0){
            defaultSecond = 59;
            defaultMinute--;
        }
    }
    
    timerDisplay.textContent = defaultMinute.toString().padStart(2, '0') + ":" + defaultSecond.toString().padStart(2, '0');
    defaultSecond--; 
}