/* 
As the number of iterations is same for all best worst and average case scenarios
O(n2)

If we consider only swapping as time complexity then O(n) for all
*/

var average_case = [187, 9, 143, 141, 138, 172, 93, 134, 54, 162, 52, 158, 10, 171, 15, 139];
var iteration = 1;

function selection_sort(array, start, end){
    var smallest_elem_index = start;
    for(var i = start+1; i <= end;i++){
        if(array[smallest_elem_index] > array[i]){
            smallest_elem_index = i;
        }
    }
    array[start] = [array[smallest_elem_index], array[smallest_elem_index] = array[start]][0];
    if(start+1 != end) {
        selection_sort(array, start+1, end)
    }
    console.log(array);
    process.exit();
    return;
}

selection_sort(average_case, 0, average_case.length - 1);
