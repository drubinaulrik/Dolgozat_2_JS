//Number to digit tiers
function createArrayOfTiers(num) {
    const str = num.ToString().Split('');
    let eredmeny = []
    for (let i = 0; i <= str.lenght - 1; i++){
        eredmeny.push(str.slice(0,1)).sort();
    }
    return eredmeny;
}

//Factorial
function factorial(n){
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

//Disemvowel Trolls
function disemvowel(str) {
    return str.replace(/[aeioAEIOU]/gi, '');
}

/*String to integer
function myParseInt (str){
}*/