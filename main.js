import * as Lib from './timersLib.js';
import * as AnimLib from './animationLib.js';
import * as ElementsLib from './elements.js';

// Assign things from Libraries to variables so it is easier to read.
const Timer = Lib.Timer;
const Animation = AnimLib.Animation;
const Element = ElementsLib.Element;

// Buttons
const startButton = Element.startButton;
const stopButton = Element.stopButton;
        
const resetButton = Element.resetButton;
const lapButton = Element.lapButton;

// Timer Displays
const Display = Element.timerDisplay;

// Define timers
const MainTimer = new Timer('main_timer');

// Define Animations


/* -----------------------------------------
    TEST function
------------------------------------------*/
function setLifespan(lifespanMS = 10000, isRandom = false){
    const minLIFESPAN = 2000
    const randomLifespan = Math.floor(Math.random()*(lifespanMS - minLIFESPAN) + 1)+minLIFESPAN;
    console.log(randomLifespan);
    return randomLifespan;
}
/* -----------------------------------------
    TEST function
------------------------------------------*/
const Animations = [
    new Animation(startButton.cssQuery, 'shake', undefined, 170),
    new Animation(stopButton.cssQuery, 'shake-crazy', undefined, 2),
    new Animation(resetButton.cssQuery, undefined, undefined, 190),
    new Animation(lapButton.cssQuery, undefined, undefined, 190),

    new Animation(Display.milliseconds.cssQuery, 'rotate', setLifespan(), 10), // <-- TESTED test function
    new Animation(Display.seconds.cssQuery, 'swing', undefined, 10),
    new Animation(Display.minutes.cssQuery, undefined, undefined, 300)
];
//-----------------------------------------
(() => {    // INIT
    /*
        Any code that runs once at the beginning
    */

    Animations.forEach(anim => {
        anim.Animate();
    });

})();
//-----------------------------------------
function main(timestamp){ // Stopwatch Loop
    
    Display.milliseconds.htmlElement.innerText = (MainTimer.Value.Milliseconds == 10) ? ('00')
                                                : (MainTimer.Value.Milliseconds == 1000) ? (990/10) 
                                                : (MainTimer.Value.Milliseconds < 10) ? (`0${MainTimer.Value.Milliseconds/10}`)
                                                : (MainTimer.Value.Milliseconds/10);
    Display.seconds.htmlElement.innerText = (MainTimer.Value.Seconds < 10) ? (`0${MainTimer.Value.Seconds}`) : MainTimer.Value.Seconds;
    Display.minutes.htmlElement.innerText = (MainTimer.Value.Minutes < 10) ? (`0${MainTimer.Value.Minutes}`) : MainTimer.Value.Minutes;
//_____________________________________
    window.requestAnimationFrame(main);
}
    window.requestAnimationFrame(main);
//-----------------------------------------


// Handle Button events below
//----------------------------------------
startButton.htmlElement.addEventListener('click', () => {
    if(!MainTimer.busy){
        MainTimer.startTimer();

        // Hide startButton and show stopButton
        startButton.htmlElement.style.display = 'none';
        stopButton.htmlElement.style.display = 'inline-block';
    }else{
        console.log('Sorry timer is busy now!');
    }
});
stopButton.htmlElement.addEventListener('click', () => {
    MainTimer.stopTimer();
    // Hide stopButton and show startButton(renamed to resume);
    startButton.htmlElement.value = 'Resume';
    startButton.htmlElement.style.display = 'inline-block';
    stopButton.htmlElement.style.display = 'none';
});
resetButton.htmlElement.addEventListener('click', () => {
    MainTimer.stopTimer();
    MainTimer.resetClock();

    // Rename startButton back to Start
    startButton.htmlElement.value = 'Start';

    // Reset buttons to original State
    startButton.htmlElement.style.display = 'inline-block';
    stopButton.htmlElement.style.display = 'none';
});

window.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});