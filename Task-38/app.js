// filter range in place //

function filterRangeInPlace(array,h,l){

    for(let i = 0;i<array.length;i++){

        let value = array[i];

        if(value < l || value >h){
            array.splice(i,1);
            i--;
        }
    }
};
let array = [5,3,2,9,1];

filterRangeInPlace(array,4,1);
alert(array);