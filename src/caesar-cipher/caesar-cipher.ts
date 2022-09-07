const ALPHABET: string[] = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));

function isUpperCase(code : number): boolean {
    if(code > 64 && code < 91) return true;
    return false;
}

function caesarCipher(value: string, shift: number = 7): string {

    if(shift <= 0) return "";
    
    let doubleAlphabet = ALPHABET.concat(ALPHABET);
    let res = "";

    for(var i = 0; i <= value.length - 1; i++) {

        var code = value.charCodeAt(i);
        
        if(isUpperCase(code)) {
            var curr = value[i].toLowerCase();
            var newChar = doubleAlphabet[(curr.charCodeAt(0) - 97) + shift].toUpperCase();
            res += newChar;
            continue;
        } else if(code > 96 && code < 123){
            res += doubleAlphabet[(code-97) + shift];
        } else if(code === 10) {
            res += "<br />";
        } else {
            res += value[i];
        }
    }
    
    value = res;

    return value;
}

export { caesarCipher };