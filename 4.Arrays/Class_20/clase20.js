var william =  {
    nombre: 'William',
    apellido: 'Gómez',
    altura: 1.75,
    cantidadLibros: 23
}

var marcelo =  {
    nombre: 'Macelo',
    apellido: 'acuna',
    altura: 1.78,
    cantidadLibros: 345
}

var maria =  {
    nombre: 'María',
    apellido: 'Pérez',
    altura: 1.70,
    cantidadLibros: 567
}

var carmen =  {
    nombre: 'Carmen',
    apellido: 'Blanco',
    altura: 1.50,
    cantidadLibros: 456
}

var carlos =  {
    nombre: 'Carlos',
    apellido: 'Luis',
    altura: 1.80,
    cantidadLibros: 4
}

//se agrupan las personas a un arreglo:
var personas = [william, marcelo, maria, carmen, carlos]

//se quiere totalizar la cantidad de libros recorriendo cada objeto

var cantidad = 0
for (var i=0; i<personas.length ; i++){
    cantidad = cantidad + personas[i]['cantidadLibros']
}


function reductor2 (acomulador, persona){
    return acomulador + persona.cantidadLibros
}
var cantidad2 = personas.reduce(reductor2, 2) // 0 significa que cantidad2 tiene como valor inicial 0


const reductor3 = function (acomulador, persona){
    return acomulador + persona.cantidadLibros
}
var cantidad3 = personas.reduce(reductor3, 3)


const reductor4 = (acomulador, persona) =>{
    return acomulador + persona.cantidadLibros
}
var cantidad4 = personas.reduce(reductor4, 4)


const reductor5 = (acomulador, persona) =>acomulador + persona.cantidadLibros
var cantidad5 = personas.reduce(reductor5, 5)


const reductor6 = (acomulador, {cantidadLibros}) =>acomulador + cantidadLibros
var cantidad6 = personas.reduce(reductor6, 6)


console.log(`1.en total todos tienen ${cantidad} libros`)
console.log(`2.en total todos tienen ${cantidad2} libros`)
console.log(`3.en total todos tienen ${cantidad3} libros`)
console.log(`4.en total todos tienen ${cantidad4} libros`)
console.log(`5.en total todos tienen ${cantidad5} libros`)
console.log(`6.en total todos tienen ${cantidad6} libros`)




//podemos reducir el arreglo de la siguiente forma:
//definir una función con el nombre de reducer:
const reducer = (acum, {cantidadLibros}) => acum + cantidadLibros
var totalDeLibros = personas.reduce(reducer, 0) //aquí reduzco el arreglo personas declarado arriba
console.log(`0.en total todos tienen ${totalDeLibros} libros`)




