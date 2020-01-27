//defino la siguiente clase con sus métodos saludar y soyAlto:
class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar() {
        console.log(`hola, me llamo ${this.nombre} ${this.apellido}`)
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

    saludar(){
        console.log(`hola, me llamo ${this.nombre} ${this.apellido} y soy desarrolador`)
    }
}

//se comenta este bloque porque los objetos se crearán en la cosala del navegador chrome
/* var william = new Persona('William', 'Gómez', 1.7)
var marcelo = new Persona('Marcelo', 'Acuna', 1.8)
var carlos = new Persona('Carlos','Pérez', 1.6)
var carmen = new Persona('Carmen', 'Pérez', 1.56) */








class Person {
    constructor (name, surname, height){
        this.fullname = name + " " +surname
        this.name = name
        this.surname = surname
        this.height = height
    }

    greet(){
        console.log(`Hi my name is ${this.fullname}`)
    }

    imtallerthan(minheight){
        if (this.height > minheight){
            console.log(this.fullname + ' is taller than ' + minheight + 'm')
        }else{
             console.log(this.fullname + ' is smaller than ' + minheight + 'm')
        }
     }
}

var kiat = new Person('choice','kiatyanyong',1.65)
kiat.greet()
console.log('My name is ' + kiat.fullname)
kiat.imtallerthan(1.5)
kiat.imtallerthan(1.7)





class Developer extends Person {
    constructor (name, surname, height){
        super (name, surname, height)
    }

    greet(){
        console.log(`Hi my name is ${this.fullname} and Im a developer`)
    }
}
var angulo = new Developer('david', 'angulo', 1.73) 
angulo.greet()
angulo.imtallerthan(1.7)