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

// se crea un nuevo objeto y el original no se ve afectado
function cumpleanos(persona){
    return{
        ...persona, // los 3 puntos clona o copia el obeto ya creado arriba
        edad: persona.edad + 1 // atributo que será modificado
    }
}

// va sumando 1 a la edad en el objeto, es decir impacta los atributos del objeto
/* function cumpleanos(persona){
    persona.edad += 1
}*/ 