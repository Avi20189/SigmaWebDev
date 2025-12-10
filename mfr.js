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


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box{
            width: 56px;
            height: 45px;
            border: 2px solid black;
            margin: 5px;
            padding: 5px;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="box">Box1</div>
        <div class="box">Box2</div>
        <div class="box">Box3</div>
        <div class="box">Box4</div>
        <div class="box">Box5</div>

    </div>
    <script src="script.js"></script>
</body>
</html>