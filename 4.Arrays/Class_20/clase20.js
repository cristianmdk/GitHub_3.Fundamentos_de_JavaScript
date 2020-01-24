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

//esta es una formna:
/* var acumulador = 0

for (var i =0; i < personas.length; i++){
    acum = acum + personas[i].cantidadLibros
} */

//podemos reducir el arreglo de la siguiente forma:
//definir una función con el nombre de reducer:
const reducer = (acum, {cantidadLibros}) => acum + cantidadLibros

var totalDeLibros = personas.reduce(reducer, 0) //aquí reduzco el arreglo personas declarado arriba

console.log(`en total todos tienen ${totalDeLibros} libros`)