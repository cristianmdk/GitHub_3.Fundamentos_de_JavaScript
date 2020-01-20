// defino las siguientes constantes
const INCREMTO_PESO = 0.2
const DIAS_DEL_ANO = 365

// declaro el siguiente objeto
var william =  {
    nombre: 'William',
    apellido: 'Gómez',
    edad: 34,
    peso: 73
}

// imprimo el peso inicial del año
console.log(`Al inicio del año ${william.nombre} pesa ${william.peso}Kg`)

// declaro 2 funciones:
const aumentarDePeso = persona => persona.peso += INCREMTO_PESO
const bajarDePeso = persona => persona.peso -= INCREMTO_PESO

// recorro los 365 días del año a través de un for para saber si baja o sube de peso:
for (var i = 1; i <= DIAS_DEL_ANO; i++){
    var random = Math.random() // este número está entre 0 y 1 nos indicará si la persona baja o sube de peso

    if (random < 0.25) { // esto se ejecutará un 25% de las veces
        aumentarDePeso(william)

    } else if(random < 0.5) { // esto se ejecutará otro 25% de las veces, es decir si es 0,26 se ejecuta
        bajarDePeso(william)  
    }
}

console.log(`Al final del año ${william.nombre} pesa ${william.peso.toFixed(1)}Kg`) 
//to.Fixed para reducir los decimales