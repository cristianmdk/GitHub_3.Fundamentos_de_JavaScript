var nombre = 'Sacha', apellido = 'Lifszyc'

var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinusculas = apellido.toLowerCase()

var primeraLetraDelNombre = nombre.charAt(0)
var cantidadDeLetrasDelNombre = nombre.length

var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`
// nueva forma de concatenar y el signo $ permite agregar código js

var str = nombre.substr(1, 2)
// extra un substring el 1 es la posición de inicio y el 2 es la cantidad de caracteres