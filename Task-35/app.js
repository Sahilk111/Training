//Sorting in descending order//

let arr = [ 4, 1, 3, 6, 20, 15 ];

let sort = arr.sort(function(a, b) { return a - b; });

let reverse = sort.reverse();

alert(reverse);