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












const pasardobeAltura1 = function (persona) {
    persona.altura = persona.altura * 2
    return persona
}
const pasardobeAltura2 = function (persona) {
    persona.altura *= 2
    return persona
}
const pasardobeAltura3 = (persona) => {
    persona.altura *= 2
    return persona
}
const pasardobeAltura4 = (persona) => {
    persona.altura *= 2
    return persona
}
const pasardobeAltura5 = (persona) => {
    persona.altura *= 2
    return {
        ...persona,
    }
}
const pasardobeAltura6 = (persona) => {
    return {
        ...persona,
        alturaDoble: persona.altura * 2
    }
}
//de esta forma no se modifican los datos
const pasardobeAltura = (persona) => ({
    ...persona,
    alturaDoble: persona.altura * 2
})

var personasDms = personas.map(pasardobeAltura)