// Last Day of Month //

function getLastDayOfMonth(year,month){

    return new Date(year,month +1,0).getDate();

}

alert(getLastDayOfMonth(2013, 1));