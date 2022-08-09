
// function pow(x,n) that returns x in power n.//

function pow(x,n) {

    let result = 1;

    for (let i=1;i<=n;i++){

        result= result*x;
       
    }

    return result;

}

pow(3,3);