// SumInput //

function sumInput() {

    let arr3 =[];

    let sum=0;

    while(true){
        
   let x= prompt("Enter values");

        if(x ===""|| x ==null || !isFinite(x)){
            break;
        }else{
             arr3.push(x);
        }
    
        
    }
      
    for(let i=0;i<arr3.length;i++){

        sum = sum + +arr3[i];
        

    }
     alert(sum);
}

sumInput();
