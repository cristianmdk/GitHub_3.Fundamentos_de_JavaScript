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