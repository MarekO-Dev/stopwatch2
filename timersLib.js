const DEFAULT_TIMEOUT = 100; // if this settings is 100 then 10 of these = 1 second

export class Timer{
    constructor(name){
        this.name = name;
    }

    _busy = null;
    value = 0; 

    startTimer () {
        this._busy = setTimeout(() => {
            //___________________________

            this.value++; 

            //___________________________
            this.startTimer();
        }, DEFAULT_TIMEOUT);
    }

    stopTimer () {
        clearTimeout(this._busy);
        this._busy = null;
    }

    resetClock () {
        this.value = 0;
    }

    get busy () {
        return this._busy;
    }
    get Name () {
        return this.name;
    }
}

export const Buttons = {
    startButton: {htmlElement: document.getElementById('startBtn'), cssQuery: '#startBtn'},
    stopButton: {htmlElement: document.getElementById('stopBtn'), cssQuery: '#stopBtn'},
    resetButton: {htmlElement: document.getElementById('resetBtn'), cssQuery: '#resetBtn'},
    lapButton: {htmlElement: document.getElementById('lapBtn'), cssQuery: '#lapBtn'}
};
