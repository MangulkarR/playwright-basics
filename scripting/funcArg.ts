function simpleFun(a: number, b: number):number{
    return a + b;
}
function sumWithOneArgOpt(a: number, b: number = 1):number{
    return a + b;
}

console.log(simpleFun(3, 4));
console.log(sumWithOneArgOptional(3));
console.log(sumWithOneArgOptional(3, 5));