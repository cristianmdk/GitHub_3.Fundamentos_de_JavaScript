//CAMBIAR STRING TO MAYUSCULA
var name = "cristian", surname= "angulo"
var uppername = name.toUpperCase()
var uppersurname = surname.toUpperCase()

//CAMBIAR STRING TO MINUSCULA
var lowername = uppername.toLowerCase() + '(low)<--' + uppername
var lowersurname = uppersurname.toLowerCase() + '(low)<--' + uppersurname

//PRIMER, SEGUNDA Y ULTIMO CARACTER DE UN STRING
var firstleter = name.charAt(0)
var secondleter = name.charAt(1)
var lastlerter = name.charAt(name.length-1)
lastlerter = name.slice(-1)
var last2leters = name.slice(-2)

//LONGITUD DE UN STRING
//este es un atributo, no una funcion
var nleters = surname.length

//CONCATENAR DOS STRINGS
var fullname = name + " " + surname
//interpolacion de texto para concatenar
var fullname2 = `${uppername} ${uppersurname}`
// dentro de las laves `` pordemos escribir codigo JV
var fullname3 = `${uppername} ${uppersurname.toLowerCase()}`

//SUB-STRING DE TRES FORMAS
var shortname = name.charAt(0) + name.charAt(1) + name.charAt(2)
shortname = name.substr(0,4) //substr no trabaja con valores negativos
shortname = name.slice(2,-2) //slice puede recortar por detras tambien





var nombre = 'Sacha', apellido = 'Lifszyc'

var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinusculas = apellido.toLowerCase()

var primeraLetraDelNombre = nombre.charAt(0)
var cantidadDeLetrasDelNombre = nombre.length

var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`
// nueva forma de concatenar y el signo $ permite agregar código js

var str = nombre.substr(1, 2)
// extra un substring el 1 es la posición de inicio y el 2 es la cantidad de caracteres



