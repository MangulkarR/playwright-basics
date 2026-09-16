function simpleMath(a, b){
    return a + b;
}
function sumWithOneArgOptional(a, b = 1){
    return a + b;
}

console.log(simpleMath(3, 4));
console.log(sumWithOneArgOptional(3));
console.log(sumWithOneArgOptional(3, 5));