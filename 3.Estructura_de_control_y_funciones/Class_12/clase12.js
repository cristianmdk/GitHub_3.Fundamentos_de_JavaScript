var william =  {
    nombre: 'William',
    apellido: 'Gómez',
    edad: 34
}

var juan =  {
    nombre: 'Juan',
    apellido: 'Gómez',
    edad: 10
}

const MAYOR_EDAD = 18

// primera forma de declara las funciones
function esMayorEdad1(persona){
    return persona.edad >= MAYOR_EDAD
}

// // otra forma de declarar las funciones:
const esMayorEdad2 = function (persona){
    return persona.edad >= MAYOR_EDAD
} 

// // también se puede declarar con flechas y las llaves para declar el cuerpo de la función:
const esMayorEdad3 = persona => {
    return persona.edad >= MAYOR_EDAD
}

// // otra forma de declar las funciones si y solo si retorna un valor:
const esMayorEdad4 = persona => persona.edad >= MAYOR_EDAD

// // otra forma es desestructurar el objeto, de la siguiente manera:
const esMayorEdad = ({ edad }) => edad >= MAYOR_EDAD






function esMenorEdad1 (persona){
    return persona.edad <= MAYOR_EDAD
}

function esMenorEdad2 ({edad}){
    return edad <= MAYOR_EDAD
}

const esMenorEdad3 = function (persona){
    return persona.edad <=MAYOR_EDAD
}

const esMenorEdad4 = function ({edad}){
    return edad <= MAYOR_EDAD
}

const esMenorEdad5 = persona => {
    return persona.edad <= MAYOR_EDAD
}

const esMenorEdad6 = ({edad}) => {
    return edad <= MAYOR_EDAD
}

const esMenorEdad7 = persona => persona.edad <= MAYOR_EDAD

const esMenorEdad8 = ({edad}) => edad <= MAYOR_EDAD

const esMenorEdad9 = persona => !esMayorEdad(persona)

const esMenorEdad10 = ({edad}) => !esMayorEdad({edad})

const esMenorEdad = ({edad}) => edad = !esMayorEdad({edad}) 







function validarMayoriaEdad(persona){
    
    if (esMayorEdad(persona)) {

        console.log(`${persona.nombre} es mayor de edad`)

    } else {

        console.log(`${persona.nombre} es menor de edad`)
    }
}

// challenge function para permitir acceso:
function permitirAcceso (persona){
    
    if (esMenorEdad(persona)) { 
        
        console.log('ACCESO DENEGADO')

    } else {

        console.log('ACCESO PERMITIDO')
    }
}