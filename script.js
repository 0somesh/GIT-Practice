const age = 45;
const name = 'John Doe';
const DOB = '2/2/3';

function sayName(){
    console.log('MayName' , + this.name);
}

setTimeout(printToScreen, 1 * 1000);

const calculate = (a,b, operation) => {
    return operation(a,b);
} 