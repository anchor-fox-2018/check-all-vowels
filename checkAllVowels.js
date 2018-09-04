function CheckVowels(input) {
    var consonant = 'bcdfghjklmnpqrstvwxyz';
    var nonVowel = false;
    for (let i = 0; i < input.length; i++) {
        
        for (let c = 0; c < consonant.length; c++) {
            if (input[i].toLowerCase() === consonant[c]) {
                // console.log('same input: ' + input[i] + consonant[c])
                nonVowel = true;
                // console.log(nonVowel)
                break;
            }
            // console.log(`${input[i]} is a nonVowel: ` + nonVowel)
        }
    }

    if (nonVowel === true) {
        return false;
    }
    return true;
}

console.log(CheckVowels('z')); // false
console.log(CheckVowels('a')); //true
console.log(CheckVowels('az')); //false
console.log(CheckVowels('aioOF')); //false
