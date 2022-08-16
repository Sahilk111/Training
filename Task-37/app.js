// filter range //

function filterRange(ar1,a,b){

    return arr.filter(item => item <=b && item >=a);

}

let arr = [5, 3, 2, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); 

alert(arr);