function simpleFun() {
  console.log('This is a simple function');
}

let anonymousFun = function () {
  console.log('This is an anonymous function');
};

let arrowFun = () => {
  console.log('This is an arrow function');
};

setTimeout(simpleFun, 1000);
setTimeout(anonymousFun, 2000);
setTimeout(arrowFun, 3000);
