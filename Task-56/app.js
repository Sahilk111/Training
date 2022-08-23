// Sum using for loop //


function sumTo(n) {

    result =0;
    for (let i=1;i<=n;i++){
        result += i;

    }
 return result;

};

alert(sumTo(10));
  

// Using Recurssion //

function sumTo(n) {

    if(n==1){
        return 1;
    }else{
    
        return n + sumTo(n-1);
    }
        
    
    };
    
    alert(sumTo(100));

    // Using arithmetic formula //

    function sumTo(n) {

        if(n==1){
            return 1;
        }else{
        
            return n*(n+1)/2
        }
            
        
        };
        
        alert(sumTo(5));
    
    