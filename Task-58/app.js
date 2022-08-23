// Fibnocci number - recursion //

function fibno(n) {

    if (n==0){
        return 0;
    }else if(n==1){
        return 1;
    }else{
        return fibno(n-1)+ fibno(n-2);
    }
       
    };
    
    alert(fibno(5));

    // using iteration //

    function fib(n) {
        let first = 1;
        let second = 1;
        for (let i = 3; i <= n; i++) {
          let c = first + second;
          first = second;
          second = c;
        }
        return second;
      }
      
      alert(fib(4));