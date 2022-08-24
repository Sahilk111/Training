// Sum with arbitary amt of brackets  //


function sum(a){

    let value =a;

 function f(b){
     value += b;

     return f;    
}

    f.toString  = function(){

        return value;
    };

    return f;
};

alert(sum(3)(4)(5)(8));