/* 
Time complexity of the function iterations will be always O(n2)
for all the cases

Time complexity of the swapping will be 
Best case O(1)
Worst case O(n2) swaps
Average case O(n2) swaps
*/

var average_case = [187, 9, 143, 141, 138, 172, 93, 134, 54, 162, 52, 158, 10, 171, 15, 139];
var iteration = 1;

function bubble_sort(array, start, end, test_case){
    for(var i = start, j = start+1; j <= end;i++, j++){
        if(array[i] > array[j]){
            array[i] = [array[j], array[j] = array[i]][0];
        }
    }
    if(end - 1 != start){
        bubble_sort(array, start, end-1, test_case)
    }
    console.log('SORTED');
    console.log(array)    
    process.exit();
    
}

bubble_sort(average_case, 0, average_case.length - 1, 'average_case');