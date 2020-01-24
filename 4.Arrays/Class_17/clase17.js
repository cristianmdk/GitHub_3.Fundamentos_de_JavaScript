var william =  {
    nombre: 'William',
    apellido: 'Gómez',
    altura: 1.75
}

var marcelo =  {
    nombre: 'Macelo',
    apellido: 'acuna',
    altura: 1.78
}

var maria =  {
    nombre: 'María',
    apellido: 'Pérez',
    altura: 1.70
}

var carmen =  {
    nombre: 'Carmen',
    apellido: 'Blanco',
    altura: 1.50
}

var carlos =  {
    nombre: 'Carlos',
    apellido: 'Luis',
    altura: 1.80
}

//se agrupan las personas en un arreglo:
var personas = [william, marcelo, maria, carmen, carlos]

//recorro el arreglo por cada una de las personas:
for (var i = 0; i < personas.length; i++){

    var persona = personas[i] //asigno a esta variable el arreglo con su indice
    console.log(`${persona.nombre} mide ${persona.altura}mts`)
}