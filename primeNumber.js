
function checkPrime(num){
    // intetionally edge case is not handled like if we pass 1 it will throw true but it is false;
    if(num===1){
        return false;
    }
    for(let i=2; i<num; i++){
        if(num%i===0){
            return false;
        }
    }
    return true;
}

console.log(checkPrime(1));