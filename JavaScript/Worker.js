
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

function getNewCoordinates(){
    e.x = getRandomIntInclusive(20, 580);
    e.y = getRandomIntInclusive(20,500);
}

onmessage = function(e) {
    console.log('Worker: Message received from main script');
    getNewCoordinates();
    const result = point;
    const workerResult = 'Result: ' + result;
    console.log('Worker: Posting message back to main script');
    postMessage(workerResult);
}