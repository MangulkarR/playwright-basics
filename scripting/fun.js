function simpleFunction(){
    console.log('This is a simple function');
}

let anonymourse = function (){
    console.log('This is an anonymous function');
}

let arrowFunction = () => {
    console.log('This is an arrow function');
}

setTimeout(simpleFunction, 1000);
setTimeout(anonymourse, 2000);
setTimeout(arrowFunction, 3000);