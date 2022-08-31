import { ALPHABET } from "../constants";

function isNumeric(code: number) {
    if(code > 47 && code < 58) return true;
    return false; 
}

function isUpperCase(code : number) {
    if(code > 64 && code < 91) return true;
    return false;
}

function isPunctuation(code: number) {
    if((code > 31 && code < 48) || (code > 57 && code < 65)) return true;
    return false;
}

function isMisc(code: number) {
    if((code > 90 && code < 97) || (code > 122 && code < 127)) return true;
    return false;
}

function caesarCipher(value: string, shift: number = 7) {

    if(shift <= 0) return;
    
    let doubleAlphabet = ALPHABET.concat(ALPHABET);
    let res = "";

    for(var i = 0; i <= value.length - 1; i++) {

        var code = value.charCodeAt(i);

        if(isNumeric(code) || isPunctuation(code) || isMisc(code)) {
            res += value[i];
        } else if(isUpperCase(code)) {
            var curr = value[i].toLowerCase();
            var newChar = doubleAlphabet[(curr.charCodeAt(0) - 97) + shift].toUpperCase();
            res += newChar;
            continue;
        } else {
            res += doubleAlphabet[(code-97) + shift];
        }
    }

    value = res

    return value;
}

export { caesarCipher };