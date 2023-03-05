/*
    ELEMENTS
*/

import {START,STOP, RESET, LAP, PLUS_SPEED, MINUS_SPEED, SCREEN,Minutes_display,Seconds_display,Milliseconds_display, LAPS} from './lib.js';


const Timer = {
    Settings: {
        Timeout: 1000/100 // Millisecond
    },
    Clock: [0,0,0,null],
    Methods:{
        startClock: () => {
            START.style.display = 'none';
            STOP.style.display = 'inline-block';
            Timer.Clock[3] = setTimeout(() => {
                if(Timer.Clock[0] >= 100){
                    Timer.Clock[1]++;
                    Timer.Clock[0] = 0;
                    
                }
                if(Timer.Clock[1] >= 60){
                    Timer.Clock[2]++;
                    Timer.Clock[1] = 0; 
                }
                Timer.Clock[0]++;    
                //console.log(Timer.Clock[0]);
                Timer.Methods.startClock();
            }, Timer.Settings.Timeout);

        },
        stopClock: () => {
            clearTimeout(Timer.Clock[3]);
            STOP.style.display = 'none';
            START.style.display = 'inline-block';
        }
    },
    Laps: []
};

/*
    Function below changes provided number to CSS value with 'px' appended
    it returns string or a number.
*/
function toCSSVal (value, returnCSS = true){
    const newVal = value.toString() + 'px';
    if(returnCSS){
        return newVal;
    }else{
        return value;
    }
}

class ANIMATION {
    value = 50;
    
    max = 60;
    min = 40;

    normalStep = this.value/150;
    quickStep = this.value/50;
    slowStep = this.value/200;



    reverseAnim = false;
}

const MillisecondsAnimSettings = new ANIMATION;
const SecondsAnimSettings = new ANIMATION;
const MinutesAnimSettings = new ANIMATION;
/*
const MillisecondsAnimSettings = {
    value: 50,
    
    max: 100,
    min: 30,

    normalStep: 0.4,
    quickStep: 1.6,
    slowStep: 0.2,



    reverseAnim: false
};
*/


const refreshMilliseconds = () => {
    if(!MillisecondsAnimSettings.reverseAnim){
        if(MillisecondsAnimSettings.value <= MillisecondsAnimSettings.max){
    
            MillisecondsAnimSettings.value += MillisecondsAnimSettings.quickStep;
            Milliseconds_display.style.fontSize = toCSSVal(MillisecondsAnimSettings.value);

        }else if(MillisecondsAnimSettings.value >= MillisecondsAnimSettings.max){
            
            MillisecondsAnimSettings.reverseAnim = true;

        }
    }else{
        if(MillisecondsAnimSettings.value >= MillisecondsAnimSettings.min){
            
            MillisecondsAnimSettings.value -= MillisecondsAnimSettings.normalStep;
            Milliseconds_display.style.fontSize = toCSSVal(MillisecondsAnimSettings.value);
            
        }else if(MillisecondsAnimSettings.value <= MillisecondsAnimSettings.min){
            
            MillisecondsAnimSettings.reverseAnim = false;

        }
    }
};
const refreshSeconds = () => {
    if(!SecondsAnimSettings.reverseAnim){
        if(SecondsAnimSettings.value <= SecondsAnimSettings.max){
    
            SecondsAnimSettings.value += SecondsAnimSettings.quickStep;

            Seconds_display.style.fontSize = toCSSVal(SecondsAnimSettings.value);
        }else if(SecondsAnimSettings.value >= SecondsAnimSettings.max){
            SecondsAnimSettings.reverseAnim = true;
        }
    }else{
        if(SecondsAnimSettings.value >= SecondsAnimSettings.min){
            SecondsAnimSettings.value -= SecondsAnimSettings.normalStep;

            Seconds_display.style.fontSize = toCSSVal(SecondsAnimSettings.value);
            
        }else if(SecondsAnimSettings.value <= SecondsAnimSettings.min){
            SecondsAnimSettings.reverseAnim = false;
        }
    }
};

const refreshMinutes = () => {
    if(!MinutesAnimSettings.reverseAnim){
        if(MinutesAnimSettings.value <= MinutesAnimSettings.max){
    
            MinutesAnimSettings.value += MinutesAnimSettings.quickStep;

            Minutes_display.style.fontSize = toCSSVal(MinutesAnimSettings.value);
        }else if(MinutesAnimSettings.value >= MinutesAnimSettings.max){
            MinutesAnimSettings.reverseAnim = true;
        }
    }else{
        if(MinutesAnimSettings.value >= MinutesAnimSettings.min){
            MinutesAnimSettings.value -= MinutesAnimSettings.normalStep;

            Minutes_display.style.fontSize = toCSSVal(MinutesAnimSettings.value);
            
        }else if(MinutesAnimSettings.value <= MinutesAnimSettings.min){
            MinutesAnimSettings.reverseAnim = false;
        }
    }
};
const Animate = () => {
    

    
    refreshMilliseconds();
    refreshSeconds();
    refreshMinutes();
    Milliseconds_display.innerHTML = (Timer.Clock[0] < 10) ? ('0'+Timer.Clock[0]) : (Timer.Clock[0]);
    Seconds_display.innerHTML = (Timer.Clock[1] < 10) ? ('0'+Timer.Clock[1]) : (Timer.Clock[1]);
    Minutes_display.innerHTML = (Timer.Clock[2] < 10) ? ('0'+Timer.Clock[2]) : (Timer.Clock[2]);


    
window.requestAnimationFrame(Animate);
};
window.requestAnimationFrame(Animate);


const handleLaps = (laps = undefined) => {
    if(Timer.Laps.length >= 5){
        //Timer.Laps.shift();
        //Timer.Laps.push({
            //ms: Timer.Clock[0]
       // });
    }else{
        
        
        if(Timer.Laps.length < 5){
            Timer.Laps.push({ms:Timer.Clock[0]});
        }
    }

    for(let i = 0; i < Timer.Laps.length; i++){
        if(Timer.Laps[i] == undefined){

        }else{
            LAPS.Lap1.innerHTML = `Lap 1: ${Timer.Laps[0].ms}`;
            LAPS.Lap2.innerHTML = `Lap 2: ${Timer.Laps[1].ms}`;
            LAPS.Lap3.innerHTML = `Lap 3: ${Timer.Laps[2].ms}`;
            LAPS.Lap4.innerHTML = `Lap 4: ${Timer.Laps[3].ms}`;
            LAPS.Lap5.innerHTML = `Lap 5: ${Timer.Laps[4].ms}`;
            //LAPS.Lap5.innerHTML = `Log: first ${Timer.Laps[0].ms} \n second ${Timer.Laps[1].ms} `;
        }
    }
};

(() => {
    STOP.style.display = 'none';
})();

START.addEventListener('click', Timer.Methods.startClock);
STOP.addEventListener('click', Timer.Methods.stopClock);
RESET.addEventListener('click', () => {

    Timer.Clock[0] = 0;
    Timer.Clock[1] = 0;
    Timer.Clock[2] = 0;

    Timer.Laps[0].ms = 0;
});
LAP.addEventListener('click', handleLaps);