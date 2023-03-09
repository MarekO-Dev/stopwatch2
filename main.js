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

const Animations = [
    new Animation(startButton.cssQuery, 'shake', undefined, 20),
    new Animation(stopButton.cssQuery, 'breath', undefined, 10),
    new Animation(resetButton.cssQuery, undefined, undefined, 90),
    new Animation(lapButton.cssQuery, undefined, undefined, 90),

    new Animation(Display.milliseconds.cssQuery, undefined, undefined, 50),
    new Animation(Display.seconds.cssQuery, undefined, undefined, 50),
    new Animation(Display.minutes.cssQuery, undefined, undefined, 50)
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
    
    Display.milliseconds.htmlElement.innerText = (MainTimer.Value.Milliseconds == 10 || MainTimer.Value.Milliseconds == 1000) ? 0 : MainTimer.Value.Milliseconds;
    Display.seconds.htmlElement.innerText = (MainTimer.Value.Seconds);
    Display.minutes.htmlElement.innerText = (MainTimer.Value.Minutes);
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