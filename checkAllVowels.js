
function checkVowels(string) {
    let vowels = ['A', 'I', 'U', 'E', 'O'];
    let vowelNum = 0;
    let stringNum = string.length;
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (string[i].toUpperCase() === vowels[j]) {
                vowelNum++;
            }
        }
    }
    if (vowelNum === stringNum) {
        return true;
    }
    return false;
}
console.log(checkVowels("aiu")) // true
console.log(checkVowels("AiE")) // true
console.log(checkVowels("aiueo")) // true
console.log(checkVowels("aizy")) //false
console.log(checkVowels("zyx")) //false