// Max Sum Sub Array //

function getMaxSumSubArr(arr){

    let maxSum =0;

    for (let i=0;i<arr.length;i++){
        let sumFixed = 0;
        for (let j=i;j<arr.length;j++){
            sumFixed += arr[j];
            maxSum = Math.max(maxSum,sumFixed);
        }
    }
    return maxSum;
}

alert(getMaxSumSubArr([-1,2,3,5]));