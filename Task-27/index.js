// String toUpperCase//

function ucFirst(str) {

   
  let  b= str[0].toUpperCase();
    str= str.slice(1);
    alert(b + str);
    
}

let name = prompt("Enter the name");
ucFirst(name);