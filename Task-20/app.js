// Calculator //

let calculator = {

    read(){
         this.a = +prompt("Enter value");
         this.b = +prompt("Enter 2nd value");
            
    },

    sum(){
        return (this.a + this.b);
    },

    mul(){
        return (this.a * this.b);
    }
 
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

