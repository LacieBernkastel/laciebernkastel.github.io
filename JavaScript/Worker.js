importScripts('Point.js');

let intervalID = setInterval(sendMessage, 1000);
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

onmessage = function(e) {
    console.log('Worker: Message received from main script');
}

function sendMessage(){
    const result = new Point(getRandomIntInclusive(20, 580), getRandomIntInclusive(20, 580));
    console.log('Worker: Posting message back to main script');
    postMessage(result);
}