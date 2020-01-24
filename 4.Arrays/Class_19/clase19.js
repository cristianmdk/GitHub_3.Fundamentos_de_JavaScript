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

//esto es para pasar la altura de mts a cms:
const pasarAlturaACms = persona => ({
    ...persona, //esto se hace para no modificar los valores del objeto original
    altura: persona.altura * 100  
    })

var personasCms = personas.map(pasarAlturaACms)

console.log(personasCms)