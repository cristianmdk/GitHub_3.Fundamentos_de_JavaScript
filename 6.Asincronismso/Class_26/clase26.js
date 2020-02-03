//defino la siguiente clase con sus métodos saludar y soyAlto:
class Persona {
    constructor(nombre, apellido, altura) {
        this.name = nombre
        this.surname = apellido
        this.height = altura
    }

    greet(fn) {
        var {name, surname} = this
        console.log(`\nhola, I am ${name} ${surname}`)
        if (fn) {
            fn(name, surname)   
        }
    }

    soyAlto() {
        return this.height >= 1.7
    }
}

//defino esta clase con herencia de persona
class developer extends Persona{
    constructor(name, surname, height){
        super(name, surname, height) //esto es para invocar a la clase heredada
    }

    greet(fn){
        var {name, surname} = this
        console.log(`\nHola, my name is ${name} ${surname} and I am a developer`)
        if (fn) {
            fn(name, surname, true)   
        }
    }
}






//FUNCTION AS PARAMETERS
// this function will be called from another function. 
// it will need name, surname and confirmation if the person is a developer
function answer_greetings(name, surname, isDev){
    console.log(`Good morning ${name} ${surname}`)
    if (isDev) { //if the parameter is given it is because he is a developer
        console.log(`So nice, I didn't you were a developer`)
    }
}

//CREATING PEOPLE
var william = new Persona('William', 'Gómez', 1.7)
var marcelo = new Persona('Marcelo', 'Acuna', 1.8)
var carlos = new developer('Carlos','Pérez', 1.6)
var carmen = new developer('Carmen', 'Pérez', 1.56)

//GREETING AND USING THE FUNCTION AS PARAMETER
william.greet()
marcelo.greet(answer_greetings)
carlos.greet(answer_greetings)
carmen.greet(answer_greetings)



//ASYNCHRONISMS---------------------

// EVENT LOOP:
// Java can do only one task at a time, Java is not multitask, even when out processor has more than 1 core
// Java ca delegate some function to others processes. 
// Java has a call-stack where it stocks all the functions (lines)
// Java takes a functions from the call-stack, it executes it, and it throws it. 
console.log ('\n\n\n\n\n\n')
console.log ('1.')
setTimeout(console.log ('2.'), 2000) //it doesn't work because first it sees the console.log
console.log ('3.')



// Call-back: function that will be executed when the answer from the server comes back. there is a call-back-stack
console.log ('CALL-BACK:')
console.log ('Call-back->4.')

setTimeout( function (){
    console.log ('Call-back->5.') //this will be available after 3s
}, 3000)

setTimeout( ()=>console.log ('Call-back->6.') , 2000) //this will available after 2s
console.log ('Call-back->7.')



// Java will continue executing functions into the call-stack 
// When Java is free of executing tasks of the call-stack it will go to execute the functions into the call-back-stack
console.log ('CALL-BACK-STACK:')
console.log ('Call-back-stack->8.')
setTimeout( ()=>console.log ('Call-back-stack->9.') , 0)
setTimeout( ()=>console.log ('Call-back-stack->10.') , 0)
console.log ('Call-back-stack->11.')



// *Don't block the EVEN LOOP: it is important to not overload the program with heavy tasks that makes the program to never leave the call-stack
console.log ('EVEN LOOP:')
console.log ('Even loop->12.')
setTimeout( ()=>console.log ('Even loop->13.') , 2000)
for (i=0; i<3000000000 ; i++){}
console.log ('Even loop->14.')
