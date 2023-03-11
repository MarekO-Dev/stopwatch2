const DEFAULT_TIMEOUT = 10; // if this settings is 100 then 10 of these = 1 second

export class Timer{
    constructor(name){
        this.name = name;
    }

    _busy = null;

    value = {Minutes: 0, Seconds: 0, Milliseconds: DEFAULT_TIMEOUT};
    PilnujCzasu (){
        if(this.value.Milliseconds >= 1000){
            this.value.Milliseconds = DEFAULT_TIMEOUT;
            this.value.Seconds++;
            if(this.value.Seconds > 60){
                this.value.Seconds = 0;
                this.value.Minutes++;
            }
        }
        
    }
    startTimer () {
        this._busy = 1;
        
        this._busy = setTimeout(() => {
            //___________________________
            this.PilnujCzasu();
            this.value.Milliseconds += DEFAULT_TIMEOUT; 

            //___________________________
            this.startTimer();
        }, DEFAULT_TIMEOUT);
    }

    stopTimer () {
        clearTimeout(this._busy);
        this._busy = null;
    }

    resetClock () {
        this.value.Milliseconds = DEFAULT_TIMEOUT;
        this.value.Seconds = 0;
        this.value.Minutes = 0;
    }

    get busy () {
        return this._busy;
    }
    get Name () {
        return this.name;
    }
    get Value () {
        return this.value;
    }
}


