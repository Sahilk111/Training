//How many seconds passed today//

function getSecondsToday() {
    let d = new Date();
  
  let today = new Date(now.getFullYear(), now.getMonth(),now.getDate());
  alert(today);
  
  let result = d- today;
      return Math.round(result/1000);
  }
  
  alert( getSecondsToday() );