/* 
Time complexity for all cases O (n log n)
For the best and worst and average cases will be having same time complexity 
Because irrespective of the case the iterations and comparisons are relatively same

Time Complexity understanding
Merge sort is a divide and conquer method based algorithm
The divide method , divides the array by every time, which means 8 => 4 => 2 ( log n ) is the time complexity of the divide
The conquer method, compares n times of the array size 

Time taken for merge sort = Time taken to sort the left half + time taken to sort the right half + Time taken to merge the left and right half
T(n) = C1 + ( n * C2 )+ T(n/2) + T(n/2) + ( n *  C3 ) + C4
T(n) = (T(n/2) + T(n/2) + n(C2 + C3) + (C1 + C4)
T(n) = 2T(n/2) + n(C~) + C~~ // C~~ is neglible as we concern about only growing part of time complexity
T(n) = 2( 2T(n/4) + n/2(C~) )
T(n) = 2( 2T(n/4) + n/2(C~) )

*/
var average_case = [187, 9, 143, 141, 138, 172, 93, 134, 54, 162, 52, 158, 10, 171, 15, 139];
var iteration = 1;


function merge_sort(array, test_case) {
    var scope = iteration;
    console.log('\n\n\n' + iteration)
    // constant time (C1)
    var mid_element = Math.floor(array.length / 2 );

    // n * constnat time (C2)
    var left_array = array.slice(0, mid_element);
    var right_array = array.slice(mid_element, array.length);
    
    // T(n/2)
    if(left_array.length > 1){
        iteration++;
        left_array = merge_sort(left_array, test_case)
    }
    // T(n/2)
    if(right_array.length > 1){
        iteration++;
        right_array = merge_sort(right_array, test_case)
    }

    // n * constant time( C3 ) 
    var sorted_array = [];
    for(var left_i = 0, right_i = 0; left_i < left_array.length && right_i < right_array.length;){
        iteration++;
        if(left_array[left_i]  < right_array[right_i]){
            sorted_array.push(left_array[left_i++])
        } else {
            sorted_array.push(right_array[right_i++])
        }
    }
    if(right_i < right_array.length){
        sorted_array = sorted_array.concat(right_array.slice(right_i, right_array.length))
    } else{
        sorted_array = sorted_array.concat(left_array.slice(left_i, left_array.length))
    }

    console.log(sorted_array)

    if(scope == 1){
        console.log('\n\nsorted array\n'+sorted_array)
        console.log(`Testcase : ${test_case} --- Iteration : ${iteration}`)
        return;
    }
    return sorted_array;
    
}

merge_sort(average_case, 'average_case') // n log n ( 16 * 4) => 64




