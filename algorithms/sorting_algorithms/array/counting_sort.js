// https://www.youtube.com/watch?v=7zuGmKfUt7s

/* 

Counting Sort is a sorting algorithm that can be used for sorting elements within a specific range 
and is based on the frequency/count of each element to be sorted.

N is the total number of elements in array
K is the range which they have provided, K is the range of elements (K = largest element - smallest element)
Time complexity: O(N+K)
Space Complexity: O(K)
Worst case: when data is skewed and range is large
Best Case: When all elements are same
Average Case: O(N+K) (N & K equally dominant)
*/
const input = [1,4,1,2,7,5,2];
const range = 10;
const result = new Array(input.length).fill(0);
const elemCount = new Array(range).fill(0);
for(let i = 0;i < input.length;i++){
    elemCount[input[i]]++;
}

for(let i = 0;i < range-1;i++){
    elemCount[i+1] = elemCount[i] + elemCount[i+1]
}


for(let i = 0; i < input.length;i++){
    const curElem = input[i];
    const elemIndex = --elemCount[curElem];
    result[elemIndex] = curElem;
}

console.log(result);