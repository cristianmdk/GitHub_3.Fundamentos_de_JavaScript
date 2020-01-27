//declaro la función que será un constructor
function Persona(nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
}
//declaro el prototipo de la función
Persona.prototype.saludar = function (){
    console.log(`hola, me llamo ${this.nombre} ${this.apellido}`)
}
//declo los objetos:
var william = new Persona('William', 'Gómez')
var marcelo = new Persona('Marcelo', 'Acuna')
var carlos = new Persona('Carlos','Pérez')
var carmen = new Persona('Carmen', 'Pérez')










function person2 (){
    //inside it is called : constructor
}
var cristian = person2() //undefined class
var david = new person2() //class person
var angulo = new person2(cristian, angulo) //I can pass parameters. Also, it depends if the function accepts some paramete


//function with parameters
function Person (name, surname, height){
    this.fullname = name + " " +surname
    this.name = name
    this.surname = surname
    this.height = height
}

var lopez = new Person('cristian', 'lopez', 1.70)
var angulo = Person('david', 'angulo', 1.73) 
//we are calling the function and creating an obj, but we are not saving that obj in any var
//new: it creates a new obj with the attribute of Person

//If we dont use the word NEW to declare a var
//We would be creating an obj with name and Person
//and returning this obj. 
//we would not be creating an element with any class, just an obj with parameters
function nonewperson (name, surname){
    var obj ={}
    obj.name = name
    obj.surname = surname
    return obj
}
var choice = nonewperson('cristian', 'lopez')
var chanya = new nonewperson('cristian', 'lopez') 
//even using new in this example we are not creating an obj with class
//because the function is returining a var called obj with two parameters


//inside the prototype of Person we will have an attribute which will greet
Person.prototype.greet = function (){
    console.log(`Hi my name is ${this.fullname}`)
}

//function to say if the person is taller than X, with a given min height
Person.prototype.imtallerthan = function (minheight){
   if (this.height > minheight){
       console.log(this.fullname + ' is taller than ' + minheight + 'cm')
   }else{
        console.log(this.fullname + ' is smaller than ' + minheight + 'cm')
   }
}
Person.prototype.imsmallerthan = function (maxheight) {
    (maxheight > this.height) ? console.log(this.fullname + ' is smaller than ' + maxheight + 'cm') : console.log(this.fullname+' is taller than '+maxheight)
}


var kiat = new Person('choice','kiatyanyong',1.65)
kiat.greet()
console.log('My name is ' + kiat.fullname)
kiat.imtallerthan(1.5)
kiat.imtallerthan(1.7)
kiat.imsmallerthan(1.8)


