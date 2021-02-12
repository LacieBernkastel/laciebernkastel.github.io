
let canvas = document.getElementsByTagName("canvas")[0];
let canvas2dContext = canvas.getContext("2d");

if (window.Worker) {

    for(i = 0; i<10; i++){
        const myWorker = new Worker("Worker.js");
        let color = 'rgb(' + (20*i) + ', 0,' + (255 - (20*i)) + ')';
        myWorker.postMessage(color);
        

	    myWorker.onmessage = function(e) {
            drawCircle(e.data);
            console.log('Message received from worker ' + i);
	    }
    }
} else {
	console.log('Your browser doesn\'t support web workers.')
}

function drawCircle(data){
    console.log(data);
    canvas2dContext.fillStyle = data.color;
    // canvas2dContext.clearRect(0, 0, canvas.width, canvas.height);
    canvas2dContext.beginPath();
    canvas2dContext.arc(data.x, data.y, 20, 0, (2*Math.PI), false); 
    canvas2dContext.fill();
    
}
