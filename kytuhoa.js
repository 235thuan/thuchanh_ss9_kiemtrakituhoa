function isFirstLetterUpperCase(str){
    let regexp = /^[A-Z]/;
    if (regexp.test(str)) {
        console.log("String's first character is uppercase");
    } else {
        console.log("String's first character is not uppercase");
    }
}
isFirstLetterUpperCase('Abcd');
isFirstLetterUpperCase('abcd');
//
// string 1: Nguyen van Nam
//
// string 2: NGUYEN VAN NAM
//
// string 3: nguyen van Nam
isFirstLetterUpperCase('Nguyen van Nam');
isFirstLetterUpperCase('NGUYEN NgAN NAM');
isFirstLetterUpperCase('nguyen van Nam');