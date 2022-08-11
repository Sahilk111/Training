// Random Integer//

function randomInteger(min,max) {

    alert(Math.round(min + Math.random()*(max-min)));
    
}

for (let i=1; i<8;i++){
   
   randomInteger(1,5);
}