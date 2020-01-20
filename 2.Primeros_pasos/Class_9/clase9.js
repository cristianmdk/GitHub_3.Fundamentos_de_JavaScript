//JAVA TIENE DIFERENTES MODOS DE COMPARAR: TANTO VALORES PRIMITIVOS COMO OBJETOS

/* Existen varias maneras de comparar variables u objetos dentro de javascript. 
En el primer ejemplo le asignamos a X un valor numérico y a Y un string. 
Para poder compararlos debemos agregar dos signos de igual (==). 
Esto los convierte al mismo tipo de valor y permite que se puedan comparar.

Cuando realizamos operaciones es recomendable usar tres símbolos de igual (===). 
Esto permite que JavasScript no iguale las variables que son de distinto tipo. 
Te recomendamos que uses el triple igual siempre que estés comparando variables.

Existen cinco tipos de datos que son primitivos:

Boolean
Null
Undefined
Number
String
*/ 

var cristian = {
    age : 29 // age (clave) = 29 (valor)
}
var choice = {
    age : 29
}
var choicita ={
    ...choice
}
var cristanchito = cristian
//si modifico a cristianchito, cristian va a cambiar porque apunta al mismo lugar de memoria
cristanchito.age = 30
console.log(cristian)
//pero si modifico a choicita, choice no va a cambiar porque es otra posicion de memoria
choicita.age = 30
console.log(choice)


/* 
= para asignar
== para comparar llevandolos a mismo tipo de dato (parseo)
=== para comparar valor y tipo de dato, respetando el tipo de dato original
Con objetos:
Tanto = como == compararan la dirección fisica del objeto (en memoria RAM) 
si y solo si se trata del mismo objeto dará true.*/

var x = 4, y = '4'