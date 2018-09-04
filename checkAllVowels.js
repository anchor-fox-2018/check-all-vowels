
function CheckVowels(str) {
  var vowels = 'aiueoAIUEO'
  var checkers = false;

  for (var i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      checkers = true;
      CheckVowels(i+1);
    } else {
      checkers = false;
      return checkers;
    }
  }
  return checkers;
}

console.log(CheckVowels('aiueoAoo')); // true
console.log(CheckVowels('aiunfjhjdf')); //false
console.log(CheckVowels('aiuevoooo')); // false
console.log(CheckVowels('aiunfaaaajhjdf')); //false
console.log(CheckVowels('aiueoAIUEOaiueoAIUEO')); //true
