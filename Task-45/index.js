// Filter unique array members //

function unique(arr) {
    let set = new Set(arr);
       let arr1 = Array.from(set);
      return arr1;
  }
  
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
   alert(unique(values));