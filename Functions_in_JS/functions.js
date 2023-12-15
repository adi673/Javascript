


//Method 2 to create object 
let obj2={
  name:"Sunil",
  number: 98,
  target:"IITB",
  greet:function(obj){
    console.log(`Hello i am ${obj.name}`)
  }
}


//passing object inside function
function printUserName(anyObj){
    console.log(`User Name is ${anyObj.name}`)
}
printUserName(obj2)
//passing the object but write object in argument only
printUserName({
  k:9,
  name:"Adi",
  price:1000
})


//passsing array inside function
function printSecondElement(yearrayhai){
  console.log(`Second Element is ${yearrayhai[1]}`)
}
printSecondElement([1,2,3,4,5])



//passing unknown number of values in function we need to use rest operator
  //but returns array we have to iterate the array to perform operation
function multipleValues(...num1){
  return num1
}
console.log(multipleValues(200,300,400,600))


function printMultipleValues(num1,num2,...num3){
  console.log(`num1 is: ${num1}`)
  console.log(`num2 is: ${num2}`)
  console.log(`num3 is: ${num3}`)
}

printMultipleValues(100,200,300,400,500,600,700)
