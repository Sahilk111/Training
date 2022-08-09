
// function using ?//

function checkAge(age) {

    return (age>18)? true:confirm('Did parents allow you?');
     
   }
   let age = prompt("Enter age");
   
   checkAge(age);
   
   // function using OR//

   function checkAge2(age) {
   
    return (age>18)|| confirm('Did parents allow you?');
     
   }
   
   checkAge2(age);