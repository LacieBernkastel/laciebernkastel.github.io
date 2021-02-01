let intervalID;
let canvas = document.getElementsByTagName("canvas")[0];
let canvas2dContext = canvas.getContext("2d");
canvas2dContext.fillStyle = 'rgb(255,0,0)';

window.addEventListener("load", function(e) {
    console.log("Page loaded");
    setTimeout( function(){
        console.log("Timeout elapsed.");
        intervalID = window.setInterval(mainLoop, 100);
    }, 4000);
});

let wallClock = 0;

function clearRect(){
    rect1.clear();
    rect2.clear();
    rect3.clear();
}

function updateClock(){
    wallClock += 1;
    rect1.update();
    rect2.update();
    rect3.update();
}

function drawRect(){
    rect1.draw();
    rect2.draw();
    rect3.draw();
}

function mainLoop(){
    clearRect();
    updateClock();
    drawRect();
}

class Rect {

    constructor(context, width, height, x, y, speed, delay){
        this.context = context;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.delay = delay;
        this.hasStarted = false;
    }

    clear(){
        this.context.clearRect(this.x, this.y, this.width, this.height);
    }

    update(){
        if((this.hasStarted == false) && (this.delay<wallClock)){
            console.log("starting");
            this.hasStarted=true;
        }
        if((this.hasStarted) && (this.x + this.width < canvas.width)){
            this.x += this.speed;
        }
    }

    draw(){
        canvas2dContext.fillRect(this.x, this.y, this.width, this.height);
    }

}


const rect1 = new Rect(canvas2dContext, 50, 50, 0, 200, 10, 10);
const rect2 = new Rect(canvas2dContext, 50, 50, 0, 300, 10, 20);
const rect3 = new Rect(canvas2dContext, 50, 50, 0, 400, 10, 30);
