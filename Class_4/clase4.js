function printage(names , ages){
    var printvar = 'My name is ' + names + ' and I am ' + ages + ' years old'
    console.log(printvar)
}

// USAR LA FUNCION
var name = 'Cristian', age = 29
printage(name, age)
    //Java pa tratar de ejecuar porque es un lenguaje debilmente tipado
    //Java es un lenguaje interpretado
printage('name') 
printage('Choice', 25)






var nombre = 'William', edad = '34'

function imprimirEdad(n, e){
    console.log(`${n} tiene ${e} años`)
}

imprimirEdad(nombre, edad);
imprimirEdad('Manuel', 22)
imprimirEdad('Pedro', 56)
imprimirEdad('María', 35)
imprimirEdad('Marcelo', 40)