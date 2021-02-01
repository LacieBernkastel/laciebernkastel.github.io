let time = 10;
let intervalID = window.setInterval(countdown, 1000);

function countdown(){

    let p = document.getElementById("timer");
    p.innerText = time--;

    if(time == 0){
        p.innerText = "Bonne année !"
        clearInterval(intervalID);
    }
}