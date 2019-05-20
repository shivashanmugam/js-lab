var array = [9, 10, 15, 52, 54, 93, 134, 138, 139, 141, 143, 158, 162, 171, 172, 187];
var bestcase = array[array.length / 2] - 1; //first pivot index
var worstcase_index = Math.round(Math.log2(array.length) + 1)// (log of n + 1) is worst case scenario
var worstcase = array[worstcase_index];
var averagecase_randomnumber = Math.floor(Math.random() * array.length) + 1; 
var averagecase = array[averagecase_randomnumber - 1];


// start >= end ELEMENT NOT FOUND
// pivot => (start + end ) / 2 
// IF elementToFind > pivot
//      start = pivot
// ELSE IF elementToFind < pivot
//      end = pivot
// ELSE 
//      ELEMENT FOUND
function binarySearch(difficulty, array, element, start, end, complexity){
    var pivot = Math.floor(((start + end) / 2));
    console.log(`${start} and ${end} and element is ${element}`);
    console.log(array.slice(start, end));
    if(start >= end){
        console.log('element not found ' + element);
        return;
    }
    if(array[pivot] > element){
        end = pivot;
    }else if(array[pivot] < element){
        start = pivot;
    }else {
        console.log(`${difficulty} : ${element} found AND Time Complexity O(${complexity})\n\n\n\n`)
        return;
    }
    binarySearch(difficulty, array, element, start, end, ++complexity);
}

binarySearch('BEST CASE', array, bestcase, 0, (array.length)-1, 1);
binarySearch('WORST CASE', array, worstcase, 0, (array.length)-1, 1);
binarySearch('AVERAGE CASE', array, averagecase, 0, (array.length)-1, 1);
