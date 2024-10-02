const age = 45;
const name = 'John Doe';
const DOB = '2/2/3';

function sayName(){
    console.log('MayName' , + this.name);
}

const calculate = (a,b, operation) => {
    return operation(a,b);
} 

function gatData(dataId, getNextData){
    setTimeout(() => {
        console.log('data', dataId);
        if(getNextData){
            getNextData();
        }
    },2000);
}
