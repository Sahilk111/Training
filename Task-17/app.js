// Obect -Task-2//
function isEmpty(obj) {

    for(let key in obj){

        return false;
    }

    return true;
    
}

let user ={
    name : "Sahil"
};

isEmpty(user);