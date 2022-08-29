// Add method "f.defer(ms)" to functions //

Function.prototype.defer = function (ms){

    setTimeout(this,ms); 
  };
  
  function f() {
    alert("Hello!");
  };
  
  f.defer(3000);