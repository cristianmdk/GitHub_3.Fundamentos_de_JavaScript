var william =  {
    nombre: 'William',
    apellido: 'Gómez',
    edad: 18,
    scrumMaster: true,
    cocinero: false,
    dentista: false,
    desarrollador: true,
    piloto:false,
    cantante:true,
    fullStack: true
}

function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es:`)

    if (persona.scrumMaster) { // esta condición de esta manera por defecto es TRUE
        console.log('ScrumMaster')
    }

    if (persona.cocinero) {
        console.log('Cocinero')
    }

    if (persona.dentista) {
        console.log('Destista')
    }

    if (persona.desarrollador) {
        console.log('Desarrollador')
    }

    if (persona.piloto) {
        console.log('Piloto')
    }

    if (persona.cantante) {
        console.log('Cantante')
    }

    if (persona.fullStack) {
        console.log('Desarrollador FullStack')
    }

}

function EsMayorDeEdad(persona){
    var mensaje = ("* " + persona.nombre + ' ' +persona.apellido + " es")
    if (persona.edad >=18){
        console.log(mensaje,"mayor de edad")
    }
    else{
        console.log(mensaje + " menor de edad")
    }
}

imprimirProfesiones(william)
EsMayorDeEdad(william)
