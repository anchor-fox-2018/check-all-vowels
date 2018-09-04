function checkAllVowels(str){
    let vocals = ['a', 'i', 'u', 'e', 'o'];
    let tampung = [];
    for (var i = 0; i < str.length; i++){
        var j = 0;
        while(j < vocals.length){
            if(str[i] == vocals[j]){
                tampung.push(1);
            }
            j++;
        }
    }
    var jumlah = 0;
    for(var k = 0; k < tampung.length; k++){
        jumlah += tampung[k];
    }
    if(jumlah / str.length == 1){
        return true
    } else {
        return false
    }
    
}

console.log(checkAllVowels('aiueo'));//true
console.log(checkAllVowels('eoaeo'));//true
console.log(checkAllVowels('eyowaeyo'));//false

