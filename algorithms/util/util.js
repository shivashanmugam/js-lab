function generateArrayWithUniqueElement(length){
    var array = [], arrayLength = length;
    for(var i = 0;i < arrayLength; i++){
        while(1){
            var randomNumber = Math.floor(Math.random() * 200 + 1) // random number between 1 to 200
            if(array.includes(randomNumber) == false){ // ensuring the random number is unique one in the array
                break;
            }
        }
        array.push(randomNumber)
    }
    return array;
}

function arraySort(array){
    return array.sort(function(a, b){
        return a - b;
    })
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

