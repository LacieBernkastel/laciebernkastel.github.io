const express = require('express');
const app = express();
app.listen(3000, () => console.log('listening at port 3000'));
app.use(express.static('public'))

function factoriel(n){

    n = parseInt(n);
    
    if(Number.isInteger(n)){
        if(n==0){
            return 1;
        }
        if(n > 0){
            return BigInt(n)*BigInt(factoriel(n-1));
        }
        if(n < 0){
            throw Error("Negative value passed to factoriel");
        }
    }
    else{
        throw Error("Not an Integer");
    }
}

try{

    m = process.argv[2];
    //console.time("factoriel");
    const start = Date.now();

    res = factoriel(m);
    
    //console.timeEnd("factoriel");
    const millis = Date.now() - start;
    console.log(`Seconds elapsed = ${Math.floor(millis/1000)}`)

    console.log("Le résultat de", m, "! est", res);
} catch(error){
    console.log(error);
}