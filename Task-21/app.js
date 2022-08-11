// Constructor //

function Calculator(){

    this.read = function () {

        this.a = +prompt("Enter 1st number");
        this.b = +prompt("Enter 2nd number");
        
    }

    this.sum = function () {

        return (this.a + this.b);
        
    }

     this.mul = function () {

        return (this.a * this.b);
        
    }
    
}
    
let calculator = new Calculator();

calculator.read();
alert("Sum is " + calculator.sum());
alert("Product is " + calculator.mul());