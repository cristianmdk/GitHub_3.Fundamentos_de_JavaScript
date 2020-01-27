//defino la siguiente clase con sus métodos saludar y soyAlto:
class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(fn) {
        var {nombre, apellido} = this
        console.log(`hola, me llamo ${nombre} ${apellido}`)
        if (fn) {
            fn(nombre, apellido)   
        }
    }

    soyAlto() {
        return this.altura >= 1.7
    }
}

//defino esta clase con herencia de persona
class Desarrollador extends Persona{
    constructor(nombre, apellido, altura){
        super(nombre, apellido, altura) //esto es para invocar a la clase heredada
    }

    saludar(fn){
        var {nombre, apellido} = this
        console.log(`hola, me llamo ${nombre} ${apellido} y soy desarrolador`)
        if (fn) {
            fn(nombre, apellido, true)   
        }
    }
}

function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen día ${nombre} ${apellido}`)
    if (esDev) { //si no recibe este parámetro no se ejecuta esta parte del código
        console.log(`ah que bueno, no sabía que eras desarrollador`)
    }
}

var william = new Persona('William', 'Gómez', 1.7)
var marcelo = new Persona('Marcelo', 'Acuna', 1.8)
var carlos = new Desarrollador('Carlos','Pérez', 1.6)
var carmen = new Persona('Carmen', 'Pérez', 1.56)

william.saludar()
marcelo.saludar(responderSaludo)
carlos.saludar(responderSaludo)