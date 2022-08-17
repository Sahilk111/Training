// Average //

function getAverageAge(users) {

    return users.reduce((prev,user) => prev + user.age,0)/users.length;
    
}

let john = { name: "John", age: 20 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 10 };

let arr = [ john, pete, mary ];

alert(getAverageAge(arr));