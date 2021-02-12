let intervalID = window.setInterval(sendMessage, 1000);
let canvas = document.getElementsByTagName("canvas")[0];
let canvas2dContext = canvas.getContext("2d");
const result = document.querySelector('.result');


if (window.Worker) {
	const myWorker = new Worker("Worker.js");

	myWorker.onmessage = function(e) {
		result.textContent = drawCircle(e.data);
		console.log('Message received from worker');
	}

} else {
	console.log('Your browser doesn\'t support web workers.')
}

function sendMessage(){
    myWorker.postMessage(point)
}

function drawCircle(data){
    
    canvas2dContext.fillStyle = 'rgb(255,0,0)';
    canvas2dContext.clearRect(0, 0, canvas.width, canvas.height);
    canvas2dContext.beginPath();
    canvas2dContext.arc(data.x, data.y, 20, 0, (2*Math.PI), false); 
    canvas2dContext.fill();

}

class Point{

    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}

let point = new Point(50,50);