//función de herencia:
function heredaDe(prototipoHijo, prototipoPadre){
    var fn = function () {} //esto es una clase vacía
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo //funcion contructora
}






//declaro la función constructora persona
function Persona(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

//declaro los prototipos siempre juntos antes de invocar a los objetos
//saludar viene siendo un método que tiene function estas funsction no pueden usar arrow function
Persona.prototype.saludar = function (){
    console.log(`hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function (){
    return this.altura >= 1.7
}






function Desarrollador(nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
}

heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function(){
    console.log(`hola, me llamo ${this.nombre} ${this.apellido} y soy desarrolador`)
}


//se comenta este bloque porque los objetos se crearán en la cosala del navegador chrome
// var william = new Persona('William', 'Gómez', 1.7)
// var marcelo = new Persona('Marcelo', 'Acuna', 1.8)
// var carlos = new Persona('Carlos','Pérez', 1.6)
// var carmen = new Persona('Carmen', 'Pérez', 1.56)