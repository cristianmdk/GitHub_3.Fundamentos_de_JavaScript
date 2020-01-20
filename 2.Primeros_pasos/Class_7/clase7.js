//OBJETOS --> key = value
var cristian = {
    name : 'Cristian',
    surname : 'Angulo',
    age : 29 // age (clave) = 29 (valor)
}
var choice = {
    name : 'Chanyaporn',
    surname : 'Kiatyanyong',
    age : 25
}

// TRES FORMAS DE USAR UN OBJETO EN UNA FUNCION
function printage(person){
    var printvar = 'My name is ' + person.name.toUpperCase() +' '+ person.surname + ' and I am ' + person.age + ' years old'
    console.log(printvar)
}
//nuevas versiones de Java permiten pasar solo el atributo que quiero pasar
function printage2({name, age}){
    var printvar = `My name is  ${name.toUpperCase()} and I'm ${age} years old`
    console.log(printvar)
}
function printage3(person){
    var {name, surname} = person //--> var name = person.name, surname = person.surname
    var printvar = 'My name is ' + name.toUpperCase() +' '+ surname + ' and I am ' + person.age + ' years old'
    console.log(printvar)
}

//USAR LAS FUNCIONES
printage(cristian)
printage(choice)
printage2(cristian)
printage2(choice)
printage2({name: 'Choice', age: 20}) //pasar los parametros sin crear objeto
printage2({name: 'David'}) //Java lo completa con "undefined"
//printage2({age: 20}) //en este caso da error porque no puede auto-completar el nombre con "undefined" y luego hacer toUppercase()
printage3(cristian)




// creamos un objeto con sus atributos a partir de las llaves {} 
var william =  {
    nombre: 'William',
    apellido: 'Gómez',
    edad: 34
}

var marcelo =  {
    nombre: 'Marcelo',
    apellido: 'Acuna',
    edad: 40
}

// desesctructurar objetos
function imprimirNombreYEdad(persona){
var {nombre} = persona
var {edad} = persona

console.log(`hola, me llamo ${nombre} y tengo ${edad} años`)
}

imprimirNombreYEdad(william)
imprimirNombreYEdad(marcelo)