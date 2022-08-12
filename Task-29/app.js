// Truncate string//

function truncate(str,length){
     
    if(str.length > length){
        str= str.slice(0,length)+ "...";
        alert(str);
    }else{
        alert(str);
    }
}
let value = prompt("Enter details");
let lng = prompt("Enter the length");
truncate(value,lng);