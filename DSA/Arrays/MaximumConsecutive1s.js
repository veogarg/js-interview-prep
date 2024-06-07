function consecutive1s(arr){
    let res = 0;
    let curr = 0;
    for(let i of arr){
        if(i === 0){
            curr = 0;
        }else {
            curr++;
            res = Math.max(res, curr);
        }
    }
    return res;
}

console.log(consecutive1s([0,1,1,1,1,1,0,0,1,1,1]))