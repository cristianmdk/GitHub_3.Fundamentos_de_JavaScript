//FORMAS DE INCREMENTAR UNA VARIABLE
var age = 29
age = age + 2 //dos años mas
age +=1 //un año mas
age -=4 //cuatro años menos
age ++ //un año mas --> cuidado con este porque primero muestra age y luego actualiza la variable


// REDONDEAR NUMEROS A n DECIMALES
//la manera de almacenar decimales no estan precisa
// porque destina una cantidad de bits en la RAM
var apple = 40.3 //bath
var basket = apple * 3
// para evitar esto podemos:
basket_rd = apple * 3 * 100/100 //best solution
basket_round = Math.round(apple*3) //redondear a 0 decimales

basket_str = basket.toFixed(2) //tipo str
basket_flo = parseFloat(basket_str)






var peso = 75
peso -= 2 // resta 2 al valor del peso
peso += 2 // suma 2 al valor del peso

var precioVino = 200.3 // variable número con decimal

var total = Math.round(precioVino * 100 * 3) / 100
// multiplicar por 100 el precioVino pasa a un valor entero,
// luego se dive entre 100, para redondear el valor

var totalStr = total.toFixed(3) // extrae 3 número del decimal
var total2 = parseFloat(totalStr) // muestra solo 1 numero del decimal