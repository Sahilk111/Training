// Method-1//
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
  
  let sum = (salaries.John+salaries.Ann+salaries.Pete);
  
  alert(sum);

// Method-2//
  
  let salaries1 = {
    John: 500,
    Ann: 160,
    Pete: 130
  }
  
  let sum1=0;
  for(let key in salaries1){
      sum1 += salaries1[key];
  }
  alert(sum1);