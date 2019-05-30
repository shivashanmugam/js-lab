/* 
Complexity if we consider iterations of array elements
Irrespective of the case the algorithm iterations (n-1) * (n-1) times
T(n) = n2 + n - 2

If we consider only swapping as time complexity then
Worst case - O(n2)
Best case - O(1)
Average case O(n2)
*/

var average_case = [187, 9, 143, 141, 138, 172, 93, 134, 54, 162, 52, 158, 10, 171, 15, 139];
var worst_case = [16, 15, 14, 13, 12, 11, 10, 9, 8,7 ,6 ,5,  4,3, 2, 1 ];
var best_case = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
var iteration = 1;
var swap_iteration = 0;

function insertion_sort(array, test_case) {
    for(var i = 0;i < array.length - 1;i++){
        iteration++;
        for(var j = i+1; j < array.length;j++){
            iteration++;
            if(array[i] > array[j]){
                array[j] = [array[i], array[i] = array[j]][0]; //intelligent swap
                swap_iteration++;
            }
        }
    }
    console.log('SORTED and iteration is ' + iteration + ' and swap iteration is ' + swap_iteration);
    console.log(array)
}

//insertion_sort(average_case, 'average_case')
insertion_sort(worst_case, 'worst_case')
//insertion_sort(best_case, 'best_case')