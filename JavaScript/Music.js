var v = document.getElementsByTagName("audio")[0];
var canvas = document.getElementsByTagName("canvas")[0];

v.addEventListener("canplay", function(){ v.play; }, true);

function pause(){
    v.pause();
}

function play(){
    v.play();
}



function circle(x, y, canvas, factor)
{
	let canvas2dContext = canvas.getContext("2d");

    console.log(factor);
    canvas2dContext.strokeStyle = 'rgb(' +Math.floor(255 - 20 * factor * 4) + ',0,' + Math.floor(255 - 20 * factor * 2) + ')';
    canvas2dContext.lineWidth = 5;
    canvas2dContext.beginPath();
    canvas2dContext.arc(x, y, 100, 0, factor*2*Math.PI, false);
    canvas2dContext.stroke();
}

v.addEventListener("timeupdate", function(){ 
    console.log("cc");
    circle(150, 130, canvas, v.currentTime/v.duration) });
