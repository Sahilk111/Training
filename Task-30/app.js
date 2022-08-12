// Extract //

function extractCurrencyValue(str){

    str= +str.slice(1);
    alert(str);    
}

let value = prompt("Enter currency");

extractCurrencyValue(value);