// Accumalator //

function Accumalator(startingValue) {

    this.value = startingValue;


        this.read = function () {

            this.value += +prompt("Enter value");
            
        }
    
}

let accumalator = new Accumalator(5);

accumalator.read();
alert(accumalator.value);