let time = 10;
let intervalID = window.setInterval(countdown, 100);
let canvas = document.getElementsByTagName("canvas")[0];
let canvas2dContext = canvas.getContext("2d");
canvas2dContext.fillStyle = 'rgb(255,0,0)';

let x = 0;
let y = 275;
let width = 50;
let height = 50;

function countdown(){

    if(x + width > canvas.width){
        clearInterval(intervalID);
    }
    else{
        
        canvas2dContext.clearRect(0, 0, canvas.width, canvas.height);
        canvas2dContext.fillRect(x, y, width, height);
        x += 10;

    }

}