var chronometerMinute = 0;
var chronometerSecond = 0;
var chronometerCounter;
const chronometerDisplay = document.getElementById('chronometer-display');


export function chronometerStart() {

    chronometerCounter = setInterval(chronometerTimer, 1000)
}

export function chronometerPause() {

    clearInterval(chronometerCounter);
}

export function chronometerStop() {

    clearInterval(chronometerCounter);
    chronometerDisplay.textContent = "00:00";
    chronometerSecond = 0;
    chronometerMinute = 0;

}

export function chronometerTimer() {
    
    chronometerSecond++;

    if(chronometerSecond > 59) {
        chronometerSecond = 0;
        chronometerMinute++;
    }
    chronometerDisplay.textContent = chronometerMinute.toString().padStart(2, "0") + ":" + chronometerSecond.toString().padStart(2, "0");
}