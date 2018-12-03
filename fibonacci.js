//recursive

function fibonacci(indexVal){
    if ( indexVal <= 1){
        return 1;
    }
    else {
        return fibonacci(indexVal-1) + fibonacci(indexVal-2);
    }
}


//loop

function fibonacci (indexVal){
    var nMinusOne = 1, nMinusTwo = 1, n;
    if ( indexVal <= 1 ) {
        return 1;
    } else {
        while ( indexVal > 1 ){
            n = nMinusOne + nMinusTwo;
            nMinusTwo = nMinusOne
            nMinusOne = n;
            indexVal--;
        }
    }
    return n;
}