/*
TODO
    Think off some animation types

*/
// utility functions
export class Animation{
    constructor(Obj, AnimationType = 'shake', Lifespan = undefined, Frequency = 10){
        this.Obj = document.querySelector(Obj);
        this.cssObj = getComputedStyle(this.Obj);
        this.AnimationType = AnimationType;
        this.Lifespan = Lifespan;
        this.Frequency = Frequency;
    }

    Methods = {
        withdrawInteger: (from) => {
            const newValue = parseInt(from);
        
            return newValue;
        },
        depositInteger: (to) => {
            return to+'px';
        }

    };

    Shake(){
        let oldWidthInt = this.Methods.withdrawInteger(this.cssObj['width']);
        let oldHeightInt = this.Methods.withdrawInteger(this.cssObj['height']);
        let oldxPos = this.Methods.withdrawInteger(this.cssObj['margin-left']);
        let oldyPos = this.Methods.withdrawInteger(this.cssObj['margin-top']);

        let newWidthInt = 0;
        let reverse = false;

        let timeoutHandler = undefined;
        
        const animLoop = () => {
            let by = Math.floor(Math.random() * 2) + 0; // wrong 
            let by2 = Math.floor(Math.random() * 2) + 0;// wrong 
            let by3 = Math.floor(Math.random() * 2) + 0; // wrong 
            let by4 = Math.floor(Math.random() * 4) + 0; // wrong 
            timeoutHandler = setTimeout(() => {
                /*
                if(oldyPos <= by3  && !reverse){
                    oldyPos += by;
                }else{
                    reverse = true;
                }
                if(oldyPos > -by3 && reverse){
                    oldyPos -= by2;
                }else{
                    reverse = false;
                }
                
                */
                this.Obj.style['marginTop'] = this.Methods.depositInteger(oldyPos);
                this.Obj.style['transform'] = `rotate(${by4}deg)`;
                animLoop();
            }, this.Frequency);
        };
        animLoop();
        //Animation's lifespan timeout
        if(this.Lifespan){
            setTimeout(() => {
                clearTimeout(timeoutHandler);
            }, this.Lifespan);
        }else{
            console.log('No animation timeout');
        }
    }

    ShakeCrazy(){
        let oldWidthInt = this.Methods.withdrawInteger(this.cssObj['width']);
        let oldHeightInt = this.Methods.withdrawInteger(this.cssObj['height']);
        let oldxPos = this.Methods.withdrawInteger(this.cssObj['margin-left']);
        let oldyPos = this.Methods.withdrawInteger(this.cssObj['margin-top']);

        let newWidthInt = 0;
        let reverse = false;

        let timeoutHandler = undefined;
        
        const animLoop = () => {
            let by = Math.floor(Math.random() * (10 - 1) + 1) + 1;
            let by2 = Math.floor(Math.random() * (10 - 1) + 1) + 1;
            let by3 = Math.floor(Math.random() * (3 - 1) + 1) + 1;
            let by4 = Math.floor(Math.random() * (15 - 1) + 1) + 1;
            timeoutHandler = setTimeout(() => {
                /*
                if(oldyPos <= by3  && !reverse){
                    oldyPos += by;
                }else{
                    reverse = true;
                }
                if(oldyPos > -by3 && reverse){
                    oldyPos -= by2;
                }else{
                    reverse = false;
                }
                
                */
                this.Obj.style['marginTop'] = this.Methods.depositInteger(oldyPos);
                this.Obj.style['transform'] = `rotate(${by4}deg)`;
                animLoop();
            }, this.Frequency);
        };
        animLoop();
        //Animation's lifespan timeout
        if(this.Lifespan){
            setTimeout(() => {
                clearTimeout(timeoutHandler);
            }, this.Lifespan);
        }else{
            console.log('No animation timeout');
        }
    }

    Rotate(){
        let rotateValue = 0;

        let reverse = false;

        let timeoutHandler = undefined;
        
        const animLoop = () => {
            
            timeoutHandler = setTimeout(() => {
                
                if(rotateValue <= 360 && !reverse){
                    if(rotateValue >= 360 && !reverse){
                        reverse = true;
                    }else{
                        rotateValue++;
                    }
                    

                }else{
                    if(rotateValue <= 0 && reverse){
                        reverse = false;
                    }else{
                        rotateValue--;
                    }
                    
                
                }
                
                this.Obj.style['transform'] = `rotate(${rotateValue}deg)`;
                animLoop();
            }, this.Frequency);
        };
        animLoop();
        //Animation's lifespan timeout
        if(this.Lifespan){
            setTimeout(() => {
                clearTimeout(timeoutHandler);
            }, this.Lifespan);
        }else{
            console.log('No animation timeout');
        }
    }

    Swing(){
        let rotateValue = 0;

        let reverse = false;

        let timeoutHandler = undefined;
        
        const animLoop = () => {
            let by = Math.floor(Math.random() * 100) + 10;
            let by2 = Math.floor(Math.random() * 100) + 10;
            let by3 = Math.floor(Math.random() * 2) + 0;
            let by4 = Math.floor(Math.random() * 2) + 0;
            timeoutHandler = setTimeout(() => {
                
                if(rotateValue <= 40 && !reverse){
                    if(rotateValue >= 40 && !reverse){
                        reverse = true;
                    }else{
                        rotateValue++;
                    }
                    

                }else{
                    if(rotateValue <= -40 && reverse){
                        reverse = false;
                    }else{
                        rotateValue--;
                    }
                    
                
                }
                
                this.Obj.style['transform'] = `rotate(${rotateValue}deg)`;
                animLoop();
            }, this.Frequency);
        };
        animLoop();
        //Animation's lifespan timeout
        if(this.Lifespan){
            setTimeout(() => {
                clearTimeout(timeoutHandler);
            }, this.Lifespan);
        }else{
            console.log('No animation timeout');
        }
    }
    Animate (){
        switch(this.AnimationType){
            case 'shake':
                this.Shake();
            break;
            case 'shake-crazy':
                this.ShakeCrazy();
            break;
            case 'rotate':
                this.Rotate();
            break;
            case 'swing':
                this.Swing();
            break;
        }
    }
}