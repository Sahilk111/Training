// Add the decorating "defer()" to functions //

Function.prototype.defer = function (ms){

    let f =this;

    return function(...args){
      setTimeout(() => f.apply(this,args),ms); 
    }
 
};

function f(a,b) {
  alert(a+b);
};

f.defer(3000)(5,9);