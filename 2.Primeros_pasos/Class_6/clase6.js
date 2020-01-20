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

// DOS FORMAS DE USAR UN OBJETO EN UNA FUNCION
function printage(person){
    var printvar = 'My name is ' + person.name.toUpperCase() +' '+ person.surname + ' and I am ' + person.age + ' years old'
    console.log(printvar)
}
//nuevas versiones de Java permiten pasar solo el atributo que quiero pasar
function printage_new({name, age}){
    var printvar = `My name is  ${name.toUpperCase()} and I'm ${age} years old`
    console.log(printvar)
}

//USAR LAS FUNCIONES
printage(cristian)
printage(choice)
printage_new(cristian)
printage_new(choice)
printage_new({name: 'Choice', age: 20}) //pasar los parametros sin crear objeto
printage_new({name: 'David'}) //Java lo completa con "undefined"
//printage_new({age: 20}) //en este caso da error porque no puede auto-completar el nombre con "undefined" y luego hacer toUppercase()









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

// primera forma, pasar el objeto como parametro en la funcion:
function primerFormaImprimirMayuscula(persona){
    var nombre = persona.nombre.toUpperCase() 
    console.log(nombre)
}

// segunda forma, imprimir desde console.log:
function segundaFormaImprimirMayuscula(persona){
    console.log(persona.nombre.toUpperCase())
}

// tercera forma, desglozar el objeto en los parametros de la función:
function terceraFormaImprimirMayuscula({ nombre }){
    console.log(nombre.toUpperCase())
}

primerFormaImprimirMayuscula(william)
segundaFormaImprimirMayuscula(marcelo)
terceraFormaImprimirMayuscula({ nombre: 'pepito' }) //se puede también definir el objeto al invocar la función