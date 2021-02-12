let intervalID = setInterval(getNewCoordinates, 1000);
let point = new Point(50,50);

onmessage = function(e) {
    console.log('Worker: Message received from main script');
    const result = point;
    const workerResult = 'Result: ' + result;
    console.log('Worker: Posting message back to main script');
    postMessage(workerResult);
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

function getNewCoordinates(){
    point.x = getRandomIntInclusive(20, 580);
    point.y = getRandomIntInclusive(20,500);
}


class Point{

    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}