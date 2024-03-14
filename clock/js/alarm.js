var defaultMinute = 0;
var defaultHour = 0;

let setTime;
let alarmTime;

const ringtone = new Audio("./ringtone.mp3");
ringtone.volume = 0.2;

export function alarmHourUp(){
    defaultHour++;

    if(defaultHour > 24){
        defaultHour = 0;
        document.getElementById('alarm-hour-set').innerHTML = "0" + defaultHour;
    }
    else if(defaultHour < 10){
        document.getElementById('alarm-hour-set').innerHTML = "0" + defaultHour;
    }
    else if(defaultHour <= 24){
        document.getElementById('alarm-hour-set').innerHTML = defaultHour;
    }
}

export function alarmHourDown(){
    defaultHour--;

    if(defaultHour < 0){
        defaultHour = 24;
        document.getElementById('alarm-hour-set').innerHTML = defaultHour;
    }
    else if(defaultHour < 10){
        document.getElementById('alarm-hour-set').innerHTML = "0" + defaultHour;
    }
    else if(defaultHour <= 24){
        document.getElementById('alarm-hour-set').innerHTML = defaultHour;
    }
}

export function alarmMinuteUp(){
    defaultMinute++;

    if(defaultMinute > 59){
        defaultMinute = 0;
        document.getElementById('alarm-minute-set').innerHTML = "0" + defaultMinute;
    }
    else if(defaultMinute < 10){
        document.getElementById('alarm-minute-set').innerHTML = "0" + defaultMinute;
    }
    else if(defaultMinute <= 59){
        document.getElementById('alarm-minute-set').innerHTML = defaultMinute;
    }
}

export function alarmMinuteDown(){
    defaultMinute--;

    if(defaultMinute < 0){
        defaultMinute = 59;
        document.getElementById('alarm-minute-set').innerHTML = defaultMinute;
    }
    else if(defaultMinute < 10){
        document.getElementById('alarm-minute-set').innerHTML = "0" + defaultMinute;
    }
    else if(defaultMinute <= 59){
        document.getElementById('alarm-minute-set').innerHTML = defaultMinute;
    }
}

export function alarmButtonClick(){
    const btn = document.getElementById('alarm-button');

    if(btn.textContent === "Start"){
        btn.textContent = "Stop";
        document.getElementById('alarm-hour-set').innerText = "00"
        document.getElementById('alarm-minute-set').innerText = "00"
        alarmStart();
    }
    else{
        btn.textContent = "Start"
        resetFields();
    }
}

function resetFields(){
    defaultMinute = 0;
    defaultHour = 0;
    setTime = 0;
    document.getElementById('alarm-hour-set').innerText = "00"
    document.getElementById('alarm-minute-set').innerText = "00"
    document.getElementById('alarm-display').innerText = "00:00"
    ringtone.pause();
}

function alarmStart(){

    const alarmDisplay = document.getElementById('alarm-display');
    alarmDisplay.textContent = defaultHour.toString().padStart(2, "0") + ":" + defaultMinute.toString().padStart(2, "0");
    setTime = defaultHour + ":" + defaultMinute;

    setInterval(() => {
        let data = new Date();
        let hour = data.getHours();
        let minutes = data.getMinutes();
    
        alarmTime = hour + ":" + minutes;

        if(alarmTime === setTime){

            ringtone.play();
        }
    
    }, 1000)
}