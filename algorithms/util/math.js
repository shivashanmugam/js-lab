//median([9, 10, 15, 52, 54, 93, 134, 138, 139, 141, 143, 158, 162, 171, 172, 187])
function median(values){
    if(values.length ===0) return 0;
  
    values.sort(function(a,b){
      return a-b;
    });
  
    var half = Math.floor(values.length / 2);
  
    if (values.length % 2)
      return values[half];
  
    return (values[half - 1] + values[half]) / 2.0;
}

//find_median_and_pick_a_pivot([9, 10, 15, 52, 54, 93, 134, 138, 139, 141, 143, 158, 162, 171, 172, 187])
function find_median_and_pick_a_pivot(array){
    var median_value = median(array);
    var pivot = array[0]
    array.forEach(element => {
        if(Math.abs(median_value - element) < Math.abs(median_value - pivot)){
            pivot = element;
        } 
    })
    return pivot;
}

