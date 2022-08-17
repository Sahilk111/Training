// filter unique array //

function unique(arr) {

    let final=[];

    for (let str of arr){

        if(!final.includes(str)){
            final.push(str);
        }
    }

    return final;
}


let values = ["Tom","John","Tom","John","Pete","Henry","Pete"];

alert(unique(values));