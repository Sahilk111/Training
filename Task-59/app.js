// Print List //

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  
  function printList(list){
  
      
      while(list){
          
       alert(list.value);
          list = list.next;
      }
  }
  
  printList(list);

  // Recursion//

  function printList(list){

    alert(list.value);

    if(list.next){
        printList(list.next);
    }

    
}

printList(list);