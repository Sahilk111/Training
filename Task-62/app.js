// Filter inArray //


function inArray(arr){

    return function(x){

        return arr.includes(x);
    }
}


let arr =[1,2,3,4,5,6,7];

alert(arr.filter(inArray([3,6,9])));