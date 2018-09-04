
function checkVowels(kata){
    var hurufVokal = 'aiueo';
    var jumlahVokal = 0;
    for(var i = 0;i < kata.length;i++){

        for(var j = 0;j < hurufVokal.length;j++){
            if(kata[i] === hurufVokal[j]){
                jumlahVokal++
            }
        }
    }
    if(jumlahVokal === kata.length ){
        return true
    }else{
        return false
    }
}
console.log(checkVowels('ayam'));
console.log(checkVowels('uaio'));