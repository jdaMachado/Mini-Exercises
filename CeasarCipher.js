// Encryption

function cCipherEnc(str, intShift){
    var encryption = '';
    var codeOfz = 122;
    var codeOfZ = 90;
    var codeOfa = 97;
    var codeOfA = 65;
    var alphabet = 26;
    intShift = intShift % 26;

    if (intShift<0){
        intShift = intShift + alphabet;
    }
    
    for ( var i = 0; i < str.length; i++){
        
        if (str.charCodeAt(i)>= codeOfa && str.charCodeAt(i)<=codeOfz){

            encryption += String.fromCharCode((str.charCodeAt(i) - codeOfa + intShift) % alphabet + codeOfa);
        
        }else if (str.charCodeAt(i)>= codeOfA && str.charCodeAt(i)<=codeOfZ){

            encryption += String.fromCharCode((str.charCodeAt(i) - codeOfA + intShift) % alphabet + codeOfA);

        }else {

            encryption += str.charAt(i); 
        }

    }
    return encryption;
}

//Decryption

function cCipherDec(str, intShift){
    var alphabet = 26;
    return cCipherEnc(str, alphabet - intShift)
}



















