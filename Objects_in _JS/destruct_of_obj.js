


//Method 2 to create object 
let obj2={
  name:"Sunil",
  number: 98,
  target:"IITB",
  greet:function(obj){
    console.log(`Hello i am ${obj.name}`)
  }
}

const {name:n,papa=18, number:num, target, greet:g}=obj2
console.log(n)
console.log(papa) // in destructuring we instriced  key which is not part of object
console.log(num)
console.log(target)
console.log(g(obj2))

