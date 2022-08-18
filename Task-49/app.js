// Destructing assignment //


let user = { name : "John", Years : 30};


let { name, Years :age, isAdmin = "False"} = user;

alert( name ); 
alert( age );
alert(isAdmin);