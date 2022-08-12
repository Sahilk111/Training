// CheckSpam //

function checkSpam (str) {

    let value = str.toLowerCase();

    alert(value.includes("viagra") || value.includes("xxx"));
}

 let x= prompt("Enter details");
checkSpam(x);