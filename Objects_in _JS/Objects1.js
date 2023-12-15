

//Method 1 to create object
let obj1=new Object()
obj1.name="Aditya"
obj1.number=99
obj1.t="MIT"
obj1.greet=function(){
  console.log(`Hello ${this.name}`)
}
console.log(obj1.greet())

//Method 2 to create object 
let obj2={
  name:"Sunil",
  number: 98,
  t:"IITB",
  greet:function(obj){
    console.log(`Hello i am ${obj.name}`)
  }
}
obj2.greet(obj2)
obj2.greet(obj1)
obj2.papaBolo=function(obj){
  console.log(`Papa bolo ${obj.name}`)
}
obj2.papaBolo(obj1)

//Method 3 to create object 
function Cource(instructor, title, descriptio, languag, duration, fees, link){
    this.instructor=instructor
    this.title=title
    this.descriptio=descriptio
    this.languag=languag
    this.duration=duration
    this.duration=duration
    this.fees=fees
    this.link=link
    this.welcome=function(){
        console.log("papa bolo bete")
    }
}

//here we can create multiple object like MERNStack like java only 
let MERNStack=new Cource("Aditya", "W","MERN","Astar","Hinglish","3",50000,"https://google.com")

MERNStack.greet=function(){
    console.log("Welcome to Cohert")
}
//Sealing the object means  object methods and variables can only be modified but no extra things can be added 
Object.seal(MERNStack);
console.log(MERNStack)
console.log(MERNStack.greet())
console.log(MERNStack.welcome())
MERNStack.welcome=function(){
    console.log("Welcome bolo bete ")
}
console.log(MERNStack.welcome())
//Freezing the object means can't modify also and can't add extra also
Object.freeze(MERNStack);
MERNStack.welcome=function(){
    console.log("Welcome mat bo ")
}
console.log(MERNStack.welcome())
//Object.keys() gives all keys in the given object
console.log(Object.keys(MERNStack))
//Object.keys() gives all values in the given object
console.log(Object.values(MERNStack))
