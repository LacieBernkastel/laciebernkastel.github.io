const xhr = new XMLHttpRequest();
let intervalID = window.setInterval(withFetch, 1000, callback);
let canvas = document.getElementsByTagName("canvas")[0];
let canvas2dContext = canvas.getContext("2d");

function httpGetAsync(callback)
{
    xhr.onreadystatechange = function() { 
        if (xhr.readyState == 4 && xhr.status == 200)
            callback(xhr.responseText);
    }
    xhr.open("GET", "https://stwom.herokuapp.com/300", true); // true for asynchronous 
    xhr.send(null);
}

function withFetch(callback){
    fetch("https://stwom.herokuapp.com/300")
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        callback(json);
    })
}


function callback(responseText){

    //let conv = JSON.parse(responseText);  // when fetch
    
    canvas2dContext.fillStyle = 'rgb(255,0,0)';
    canvas2dContext.clearRect(0, 0, canvas.width, canvas.height);
    canvas2dContext.beginPath();
    canvas2dContext.arc(responseText.x, responseText.y, 20, 0, (2*Math.PI), false);     // conv.x and conv.y when ajax
    canvas2dContext.fill();

}