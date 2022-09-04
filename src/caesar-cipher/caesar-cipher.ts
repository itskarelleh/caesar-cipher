import { ALPHABET } from "../constants";
import { isNumeric, isPunctuation, isUpperCase, isMisc
} from './helpers';

function caesarCipher(value: string, shift: number = 7): string {

    if(shift <= 0) return "";
    
    let doubleAlphabet = ALPHABET.concat(ALPHABET);
    let res = "";

    for(var i = 0; i <= value.length - 1; i++) {

        var code = value.charCodeAt(i);
        
        //for detecting characters
        if(isNumeric(code) || isPunctuation(code) || isMisc(code)) {
            res += value[i];
            continue;
        } 
        
        if(isUpperCase(code)) {
            var curr = value[i].toLowerCase();
            var newChar = doubleAlphabet[(curr.charCodeAt(0) - 97) + shift].toUpperCase();
            res += newChar;
            continue;
        } 
        
        if(code > 96 && code < 123){
            res += doubleAlphabet[(code-97) + shift];
        } 

        if(code === 10) {
            res += "<br />";
        }
    }


    value = res;

    return value;
}

export { caesarCipher };