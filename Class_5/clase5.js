
var nombre = 'William'  
// "nombre" es una variable global que se puede acceder a través del objeto global,
// en el caso de la consola del navegador es windows.nombres
function imprimirNombreEnMayuscula(nombre){
    var nombre = nombre.toUpperCase() // defino una variable local dentro de la función
    console.log(nombre)
}

imprimirNombreEnMayuscula(nombre)