// Get Day //

function getWeekDay(date1){

    let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
    return days[date1.getDay()];
}

let date = new Date(2015,0,5);
alert(getWeekDay(date));