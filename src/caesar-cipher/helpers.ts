
//helper functions
function isNumeric(code: number): boolean {
    if(code > 47 && code < 58) return true;
    return false; 
}

function isUpperCase(code : number): boolean {
    if(code > 64 && code < 91) return true;
    return false;
}

function isPunctuation(code: number): boolean {
    if((code > 31 && code < 48) || (code > 57 && code < 65)) return true;
    return false;
}

function isMisc(code: number): boolean {
    if((code > 90 && code < 97) || (code > 122 && code < 127)) return true;
    return false;
}

export { isNumeric, isUpperCase, isPunctuation, isMisc };