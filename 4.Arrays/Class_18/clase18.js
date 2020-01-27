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

const esmuyalta = function (persona){
    var loes = false
    if (persona.altura > 1.75){
        loes = true
    }
    return loes
}



//obtengo las personas altas con la siguinete función:
const esAlta = ({altura}) => altura >= 1.75
const esBaja = ({altura}) => altura < 1.75

//se agrupan las personas en un arreglo:
var personas = [william, marcelo, maria, carmen, carlos]

//filtar a las personas altas:
var personasAltas = personas.filter(esAlta)

//filtrar a las personas bajas:
var personasBajas = personas.filter(esBaja)

var personasmuyaltas = personas.filter(esmuyalta)