// String reverse //

function reverseString(str) {

    if(str.length ==0){
  
       alert("Empty");
    }else{
      
      return str.split('').reverse().join('');
    }
    
  }
  
  alert(reverseString("   Sahil  "));


  // Method -2 //

  let str = prompt("Enter string");
  str = str.trim();


   let newString ="";

    if(str.length == 0){

    alert("empty");

  }else{

  for (let i= str.length -1;i>=0;i-- ){
 
    newString += str[i]; 
}
  alert(newString);
}