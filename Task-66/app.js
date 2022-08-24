// setTimeOut //

function printNumbers (a,b){

    let current = a;

        setTimeout(function set() {

            alert(current);
            if(current<b){
                setTimeout(set,1000);
            }

            current++;
        },1000);

}

printNumbers(3,8);

// SetInterval//

function printNumbers(a,b){

    let current =a;

    let timerId = setInterval(function(){

        alert(current);
        if(current == b){

            clearInterval(timerId);

        }
        current++
    },1000)


};

printNumbers(3,8);