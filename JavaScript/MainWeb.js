let intervalID = window.setInterval(withFetch, 1000, callback);
let canvas = document.getElementsByTagName("canvas")[0];
let canvas2dContext = canvas.getContext("2d");
const result = document.querySelector('.result');


if (window.Worker) {
	const myWorker = new Worker("Worker.js");

	myWorker.onmessage = function(e) {
		result.textContent = e.data;
		console.log('Message received from worker');
	}
} else {
	console.log('Your browser doesn\'t support web workers.')
}