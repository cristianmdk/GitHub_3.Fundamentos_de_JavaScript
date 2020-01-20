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

function esMayorEdad(persona){
    return persona.edad >= MAYOR_EDAD
}

function validarMayoriaEdad(persona){
    if (esMayorEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }
}

