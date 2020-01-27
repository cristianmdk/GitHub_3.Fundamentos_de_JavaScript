//declaro la función que será un constructor
function Persona(nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
}
//declaro el prototipo de la función
Persona.prototype.saludar = function (){
    console.log(`hola, me llamo ${this.nombre} ${this.apellido}`)
}
//declo los objetos:
var william = new Persona('William', 'Gómez')
var marcelo = new Persona('Marcelo', 'Acuna')
var carlos = new Persona('Carlos','Pérez')
var carmen = new Persona('Carmen', 'Pérez')