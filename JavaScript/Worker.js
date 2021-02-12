let intervalID = setInterval(sendMessage, 1000);
const result;

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

function getNewCoordinates(){
    result.x = getRandomIntInclusive(20, 580);
    result.y = getRandomIntInclusive(20,500);
}

onmessage = function(e) {
    console.log('Worker: Message received from main script');
    getNewCoordinates();
    result = e.data;
}

function sendMessage(){
    getNewCoordinates();
    const workerResult = 'Result: ' + result;
    console.log('Worker: Posting message back to main script');
    postMessage(workerResult);
}