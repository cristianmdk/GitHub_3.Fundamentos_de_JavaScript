//declaro la función constructora
function Persona(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

//declaro los prototipos siempre juntos antes de invocar a los objetos
Persona.prototype.saludar = function (){
    console.log(`hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function (){
    return (this.altura >= 1.7)
}

var william = new Persona('William', 'Gómez', 1.7)
var marcelo = new Persona('Marcelo', 'Acuna', 1.8)
var carlos = new Persona('Carlos','Pérez', 1.6)
var carmen = new Persona('Carmen', 'Pérez', 1.56)


console.log( carlos.soyAlto())





