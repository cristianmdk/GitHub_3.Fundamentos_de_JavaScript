// declaro el siguiente objeto
var william =  {
    nombre: 'William',
    apellido: 'Gómez',
    edad: 34,
    peso: 73
}

// defino las siguientes constantes
const INCREMTO_PESO = 0.3
const DIAS_DEL_ANO = 365
const META = william.peso - 3

// imprimo el peso inicial del año
console.log(`Al inicio del año ${william.nombre} pesa ${william.peso}Kg`)

// declaro las siguientes funciones:
const aumentarDePeso = persona => persona.peso += INCREMTO_PESO
const bajarDePeso = persona => persona.peso -= INCREMTO_PESO
const comeMucho = () => Math.random() < 0.3 // el 30% de los dias come mucho
const realizaEjercicio = () => Math.random() < 0.4 // el 40% de los dias hace ejercicio

var dias = 0

while(william.peso > META){

    if (comeMucho()) {
        aumentarDePeso(william)
    }

    if (realizaEjercicio()) {
        bajarDePeso(william)   
    }

    dias += 1
}

console.log(`Pasaron ${dias} días hasta que ${william.nombre} adelgazó 3Kg`) 
//to.Fixed para reducir los decimales