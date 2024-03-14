import clock from "./js/clock.js";
import {timerMinuteUp, timerMinuteDown, timerSecondUp, timerSecondDown, timerButtonClick} from "./js/timer.js"
import {alarmHourUp, alarmHourDown, alarmMinuteUp, alarmMinuteDown, alarmButtonClick} from "./js/alarm.js"
import {pomodoroWorkUp, pomodoroWorkDown, pomodoroRestUp, pomodoroRestDown, pomodoroButtonClick} from "./js/pomodoro.js"
import {chronometerStart, chronometerPause, chronometerStop} from "./js/chronometer.js"

// Clock
window.onload = setInterval(clock);

// Timer
document.getElementById('timer-minute-up').addEventListener('click', timerMinuteUp);
document.getElementById('timer-minute-down').addEventListener('click', timerMinuteDown);
document.getElementById('timer-second-up').addEventListener('click', timerSecondUp);
document.getElementById('timer-second-down').addEventListener('click', timerSecondDown);
document.getElementById('timer-button').addEventListener('click', timerButtonClick);

// Alarm
document.getElementById('alarm-hour-up').addEventListener('click', alarmHourUp);
document.getElementById('alarm-hour-down').addEventListener('click', alarmHourDown);
document.getElementById('alarm-minute-up').addEventListener('click', alarmMinuteUp);
document.getElementById('alarm-minute-down').addEventListener('click', alarmMinuteDown);
document.getElementById('alarm-button').addEventListener('click', alarmButtonClick);

// Pomodoro
document.getElementById('pomodoro-work-up').addEventListener('click', pomodoroWorkUp);
document.getElementById('pomodoro-work-down').addEventListener('click', pomodoroWorkDown);
document.getElementById('pomodoro-rest-up').addEventListener('click', pomodoroRestUp);
document.getElementById('pomodoro-rest-down').addEventListener('click', pomodoroRestDown);
document.getElementById('pomodoro-button').addEventListener('click', pomodoroButtonClick);

// Chronometer

document.getElementById('chronometer-button-start').addEventListener('click', chronometerStart);
document.getElementById('chronometer-button-pause').addEventListener('click', chronometerPause);
document.getElementById('chronometer-button-stop').addEventListener('click', chronometerStop);
