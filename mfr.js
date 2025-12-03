let arr = [1,3,5,7,11];

let newArr = []

for(let index = 0; index < array.length; index++){
    const element = array[index];
    newArr.push(element**2);
}

console.log(newArr);

//Filter

//It fitlers an aaray with values that passes a test
const a =[1,2,3,4,5];

const greaterThanSeven = (e) =>{
    if(e>7){
        return true
    }
    return false
}

newArr.filter(greaterThanSeven);