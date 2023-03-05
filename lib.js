

const START = document.getElementById('startBtn');
const STOP = document.getElementById('stopBtn');
const RESET = document.getElementById('resetBtn');
const LAP = document.getElementById('lapBtn');
const PLUS_SPEED = document.getElementById('plusSpeed');
const MINUS_SPEED = document.getElementById('minusSpeed');

const SCREEN = document.getElementById('screen');
const LAPS = {

    Lap1: document.getElementById('lap1'),
    Lap3: document.getElementById('lap3'),
    Lap4: document.getElementById('lap4'),
    Lap5: document.getElementById('lap5'),    
    Lap2: document.getElementById('lap2')

};

const Minutes_display = document.getElementById('minutes_display');
const Seconds_display = document.getElementById('seconds_display');
const Milliseconds_display = document.getElementById('milliseconds_display');

export { START, STOP,RESET, LAP, PLUS_SPEED, MINUS_SPEED, SCREEN,Minutes_display,Seconds_display,Milliseconds_display, LAPS};