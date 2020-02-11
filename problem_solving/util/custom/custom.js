function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = {
    generateRandomBetween(min, max){
        
    }
}

function getCharecterMap(string){
    var map = {}
    for(var charCode = 97; charCode < 97+26;charCode++){
        map[String.fromCharCode[charCode]] = 0;
    }
    for(var i =0;i < string.length;i++){
        map[string[i]]++;
    }
    return map;
}