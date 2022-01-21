var array = [43, 343, 54, 32, 98,3, 34,12, 87, 14, 56,73, 12, 72];
var bestcase = array[0];
var worstcase = array[array.length-1];
var averagecase_randomnumber = Math.floor(Math.random() * array.length) + 1;
var averagecase = array[averagecase_randomnumber - 1];

function linearSearch(array, element){
    for(var i = 0;i < array.length;i++){
        if(array[i] == element){
            break;
        }
    }
    if(found){
        console.log(`${element} found and complexity O(${i+1})`);
    }
}

linearSearch(array, bestcase);
linearSearch(array, worstcase);
linearSearch(array, averagecase);