// https://me.dt.in.th/page/Quicksort/ ==> Refer this link partioning logic

// For average case n * log n => 16 * log(16) => 16 * 4 => 64
var average_case = [187, 9, 143, 141, 138, 172, 93, 134, 54, 162, 52, 158, 10, 171, 15, 139];

// Summation of 0 to n with each iteration (n - i)
// for the below worst case length is 9, hence (9-0) + (9-1) + (9-2) + (9-3) .... (9-9) => 45
var worst_case = [90, 80, 70, 60, 50, 40, 30, 20, 10];
var iteration = 1;

var best_case = [10, 20, 30, 40, 50, 60, 70, 80, 90];
var best_case = [2, 1, 3, 1, 2];
function partition(array, start_index, end_index, test_case) {
    iteration++;

    // Traversing visualization of logic (start_index = 0, end_index = 6)
    // [32, 12, 93, 78, 18, 91, 26] ( 0 => Pivot, 1 => Open)
    // [32, 12, 93, 78, 18, 91, 26] ( 0 => Pivot, 1 => Open, i => 1) //compare and swap
    // [32, 12, 93, 78, 18, 91, 26] ( 0 => Pivot, 2 => Open, i => 2) //compare and swap
    // [32, 12, 93, 78, 18, 91, 26] ( 0 => Pivot, 2 => Open, i => 3) //compare and swap
    // [32, 12, 93, 78, 18, 91, 26] ( 0 => Pivot, 2 => Open, i => 4) //compare and swap
    // [32, 12, 18, 78, 93, 91, 26] ( 0 => Pivot, 3 => Open, i => 5) //compare and swap
    // [32, 12, 18, 26, 93, 91, 78] ( 0 => Pivot, 4 => Open, i => 6) //compare and swap
    // [26, 12, 18, --32--, 93, 91, 78] // SWAP Pivot and Open-1
    // LEFT ARRAY [26, 12, 18] start_index => 0 end_index => 2 ( Again partition the LEFT ARRAY)
    // RIGHT ARRAY [93, 91, 78] start_index => 4 end_index => 6 ( Again partition the RIGHT ARRAY)

    var pivot_index = start_index;
    var open_index = pivot_index + 1;
    for (var i = open_index; i <= end_index; i++) {
        iteration++;
        if (array[pivot_index] > array[i]) {
            array[open_index] = [array[i], array[i] = array[open_index]][0] // intelligent swap
            open_index = open_index + 1;
        }
    }
    array[pivot_index] = [array[open_index - 1], array[open_index - 1] = array[pivot_index]][0] // intelligent swap
    pivot_index = open_index - 1;

    // left array ( only partition when only more than 1 element present in right or left)
    if (pivot_index - start_index > 1) {
        partition(array, start_index, pivot_index - 1, test_case);
    }
    // right array
    if (end_index - pivot_index > 1) {
        partition(array, pivot_index + 1, end_index, test_case);
    }

    console.log(`\n\n\n\n\nOVER iterations or Time Complexity : ${iteration} for ${test_case}`)
    console.log(array)

    process.exit();
}

partition(average_case, 0, average_case.length - 1, 'average case')
//partition(worst_case, 0 , worst_case.length-1, 'worst case')
// partition(best_case, 0 , best_case.length-1, 'best case')
