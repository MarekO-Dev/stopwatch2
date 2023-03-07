/*
TODO
    Think off some animation types

*/
// utility functions
export class Animation{
    constructor(Obj, AnimationType = 'shake', Lifespan = 50000, Frequency = 10){
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
            let by = Math.floor(Math.random() * 2) + 0;
            let by2 = Math.floor(Math.random() * 2) + 0;
            let by3 = Math.floor(Math.random() * 5) + 0;
            timeoutHandler = setTimeout(() => {
                //console.log(oldyPos);
                    //console.log(by);
                if(oldyPos <= by3  && !reverse){
                    oldyPos += by;
                    //oldxPos += by2;
                    
                }else{
                    reverse = true;
                }
                if(oldyPos > -by3 && reverse){
                    oldyPos -= by2;
                    //oldxPos -= by;
                    console.log(oldyPos);


                }else{
                    reverse = false;
                }

                this.Obj.style['marginLeft'] = this.Methods.depositInteger(oldxPos);
                console.log(this.Methods.depositInteger(oldyPos));
                this.Obj.style['marginTop'] = this.Methods.depositInteger(oldyPos);

                animLoop();
            }, this.Frequency);
        };

        animLoop();
        //Animation's lifespan timeout
        setTimeout(() => {
            clearTimeout(timeoutHandler);
        }, this.Lifespan);
    }


    Animate (){
        switch(this.AnimationType){
            case 'shake':
                this.Shake();
            break;
        }
    }
}