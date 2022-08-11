// Repeat until the input is Number//

//Method-1//

function readNumber(x) {

    if(isFinite(x)){
        if(x==="" || x===null ){
            return null;
        }else{
            alert(x);
        }
    }else{
        value();
    }
    
}

function value() {
    let b = prompt("Enter the value");

    readNumber(b);
    
}
value();

//Method-2//

function readNumber(params) {

    let num;

    do {
        num = prompt("Enter the number");
        
    }while(!isFinite(num));

    if(num===null || num ==="") return null;

    return num;
}
    
alert(readNumber());
