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
    canvas2dContext.beginPath();
    canvas2dContext.arc(x, y, 50, 0, factor*2*Math.PI, false);
    canvas2dContext.fillStyle = "black";
    canvas2dContext.stroke();
}

v.addEventListener("timeupdate", function(){ 
    console.log("cc");
    circle(50, 130, canvas, v.currentTime/v.duration) });
