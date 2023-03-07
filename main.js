import * as Lib from './timersLib.js';
import * as AnimLib from './animationLib.js';

// Assign things from Libraries to variables so it is easier to read.
const Timer = Lib.Timer;
const Animation = AnimLib.Animation;

// Buttons
const startButton = Lib.Buttons.startButton;
const stopButton = Lib.Buttons.stopButton;
const resetButton = Lib.Buttons.resetButton;
const lapButton = Lib.Buttons.lapButton;
// Define timers
const Milliseconds = new Timer('milliseconds');

// Define Animations
//const sButton = document.querySelector('#startBtn');
const other = {
    millisecondsD: {htmlElement: document.getElementById('milliseconds_display'), cssQuery: '#milliseconds_display'}
};
const Animations = [
    new Animation(startButton.cssQuery, undefined, undefined, 100),
    new Animation(stopButton.cssQuery, undefined, undefined, 10),
    new Animation(resetButton.cssQuery, undefined, undefined, 100),
    new Animation(lapButton.cssQuery, undefined, undefined, 100),
    new Animation(other.millisecondsD.cssQuery, undefined, undefined, 50)
];
//-----------------------------------------
(() => {    // INIT
    /*
        Any code that runs once at the beginning
    */
    //startButtonAnim.Animate('shake');

    Animations.forEach(anim => {
        anim.Animate();
    });


})();
//-----------------------------------------
function main(){ // Stopwatch Loop
   
//_____________________________________
    window.requestAnimationFrame(main);
}
    window.requestAnimationFrame(main);
//-----------------------------------------


// Handle Button events below
//----------------------------------------
startButton.htmlElement.addEventListener('click', () => {
    if(!Milliseconds.busy){
        Milliseconds.startTimer();

        // Hide startButton and show stopButton
        startButton.htmlElement.style.display = 'none';
        stopButton.htmlElement.style.display = 'inline-block';
    }else{
        console.log('Sorry timer is busy now!');
    }
});
stopButton.htmlElement.addEventListener('click', () => {
    Milliseconds.stopTimer();
    // Hide stopButton and show startButton(renamed to resume);
    startButton.htmlElement.value = 'Resume';
    startButton.htmlElement.style.display = 'inline-block';
    stopButton.htmlElement.style.display = 'none';
});
resetButton.htmlElement.addEventListener('click', () => {
    Milliseconds.stopTimer();
    Milliseconds.resetClock();

    // Rename startButton back to Start
    startButton.htmlElement.value = 'Start';

    // Reset buttons to original State
    startButton.htmlElement.style.display = 'inline-block';
    stopButton.htmlElement.style.display = 'none';
});